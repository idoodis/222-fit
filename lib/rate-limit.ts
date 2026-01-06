// Rate limiting utility
// Supports Upstash Redis or in-memory fallback

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

// In-memory rate limit store (fallback)
const memoryStore = new Map<string, { count: number; resetTime: number }>();

async function checkRateLimitUpstash(
  identifier: string,
  limit: number,
  windowMs: number
): Promise<RateLimitResult | null> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return null; // Upstash not configured
  }

  try {
    const key = `rate_limit:${identifier}`;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Get current count
    const getResponse = await fetch(`${redisUrl}/get/${key}`, {
      headers: {
        Authorization: `Bearer ${redisToken}`,
      },
    });

    const getData = await getResponse.json();
    const currentCount = getData.result ? parseInt(getData.result, 10) : 0;

    if (currentCount >= limit) {
      // Get TTL to calculate reset time
      const ttlResponse = await fetch(`${redisUrl}/ttl/${key}`, {
        headers: {
          Authorization: `Bearer ${redisToken}`,
        },
      });
      const ttlData = await ttlResponse.json();
      const ttl = ttlData.result || windowMs;

      return {
        success: false,
        limit,
        remaining: 0,
        reset: now + ttl * 1000,
      };
    }

    // Increment count
    const newCount = currentCount + 1;
    const setResponse = await fetch(`${redisUrl}/setex/${key}/${Math.ceil(windowMs / 1000)}/${newCount}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redisToken}`,
      },
    });

    if (!setResponse.ok) {
      throw new Error("Failed to update rate limit");
    }

    return {
      success: true,
      limit,
      remaining: limit - newCount,
      reset: now + windowMs,
    };
  } catch (error) {
    console.error("Upstash rate limit error:", error);
    return null; // Fallback to memory
  }
}

function checkRateLimitMemory(
  identifier: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    memoryStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  // Increment count
  record.count++;
  memoryStore.set(identifier, record);

  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetTime,
  };
}

export async function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000 // 10 minutes
): Promise<RateLimitResult> {
  // Try Upstash Redis first
  const upstashResult = await checkRateLimitUpstash(identifier, limit, windowMs);
  if (upstashResult !== null) {
    return upstashResult;
  }

  // Fallback to in-memory (TODO: In production, consider using a proper rate limiter)
  return checkRateLimitMemory(identifier, limit, windowMs);
}

