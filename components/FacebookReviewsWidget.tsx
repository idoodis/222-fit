"use client";

import { useEffect } from "react";

interface FacebookReviewsWidgetProps {
  pageUrl?: string;
  width?: number;
  height?: number;
}

/**
 * Facebook Reviews Widget Component
 * 
 * To use this, you need to:
 * 1. Get your Facebook Page ID (you have: 100082665914539)
 * 2. Add the Facebook SDK to your layout.tsx
 * 3. Use this component on your testimonials page
 * 
 * Note: Facebook's embedded reviews have limitations.
 * The manual approach in lib/facebook-reviews.ts is recommended.
 */
export function FacebookReviewsWidget({
  pageUrl = "https://www.facebook.com/100082665914539",
  width = 500,
  height = 500,
}: FacebookReviewsWidgetProps) {
  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (typeof window !== "undefined" && !window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="reviews"
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite={pageUrl}
          className="fb-xfbml-parse-ignore"
        >
          <a href={pageUrl}>222 Fit</a>
        </blockquote>
      </div>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    FB?: any;
  }
}


