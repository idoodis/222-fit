import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { Star } from "lucide-react";

interface GoogleReviewsBadgeProps {
  className?: string;
}

export function GoogleReviewsBadge({ className }: GoogleReviewsBadgeProps) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See all 222 Fit Google reviews"
      className={`inline-flex items-center gap-3 rounded-md border border-primary/30 bg-transparent px-4 py-3 text-left text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        className || ""
      }`}
    >
      <Star className="h-5 w-5 text-primary" />
      <span className="flex flex-col">
        <span>Read Our 5★ Reviews on Google</span>
        <span className="text-xs text-muted-foreground">
          Trusted by local clients in Carol Stream
        </span>
      </span>
    </a>
  );
}

