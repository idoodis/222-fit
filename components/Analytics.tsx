"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface AnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics({ measurementId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasLoggedId = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    if (!measurementId || hasLoggedId.current) {
      return;
    }

    // Temporary dev-only confirmation; remove after verifying GA.
    console.log("[GA4] Measurement ID detected:", measurementId);
    hasLoggedId.current = true;
  }, [measurementId]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
