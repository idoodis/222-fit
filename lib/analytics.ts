const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Sends a GA4 event through the gtag snippet loaded in app/layout.tsx.
 * Silently does nothing when analytics isn't configured or is blocked.
 */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;
  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", name, {
      transport_type: "beacon",
      // The Mindbody schedule widget registers its own GA property on the
      // same gtag; keep these events in the site's property only.
      ...(GA_ID ? { send_to: GA_ID } : {}),
      ...params,
    });
  } catch {
    // Analytics must never break the page.
  }
}
