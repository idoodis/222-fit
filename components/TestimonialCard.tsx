import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-4 text-muted-foreground">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center gap-4">
        {image ? (
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20 ring-2 ring-primary/10">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-14 w-14 flex-shrink-0 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
}

