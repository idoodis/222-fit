import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-primary transition-transform group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

