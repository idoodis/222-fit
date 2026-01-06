import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { InitialsAvatar } from "@/components/InitialsAvatar";

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
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
        <InitialsAvatar name={name} size="lg" />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
}

