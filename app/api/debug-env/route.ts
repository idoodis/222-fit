// TEMPORARY DEBUG ENDPOINT - DELETE AFTER TESTING
// This helps verify environment variables are loaded correctly
// Visit: http://localhost:3000/api/debug-env

import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!env.RESEND_API_KEY,
    apiKeyLength: env.RESEND_API_KEY?.length || 0,
    fromEmail: env.RESEND_FROM_EMAIL || "NOT SET",
    toEmail: env.RESEND_TO_EMAIL || "NOT SET",
    siteUrl: env.NEXT_PUBLIC_SITE_URL,
  });
}

