import { featuredReviews } from "@/lib/featuredReviews";
import { Star } from "lucide-react";

export function FeaturedReviews() {
  return (
    <div className="mt-8">
      <div className="grid gap-6 md:grid-cols-3">
        {featuredReviews.map((review, index) => (
          <div
            key={`${review.author}-${index}`}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2 text-primary">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary" />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{review.text}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{review.author}</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

