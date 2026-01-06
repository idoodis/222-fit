import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}


