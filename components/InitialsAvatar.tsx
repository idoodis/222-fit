import { cn } from "@/lib/utils";

interface InitialsAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Generates initials from a full name
 * Examples:
 * - "John Doe" → "JD"
 * - "Sarah M." → "SM"
 * - "Mary Jane Watson" → "MW" (first and last)
 * - "Madonna" → "M" (single name)
 */
function getInitials(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";

  const parts = trimmed.split(/\s+/).filter((part) => part.length > 0);

  if (parts.length === 0) return "?";
  if (parts.length === 1) {
    // Single name: use first letter
    return parts[0].charAt(0).toUpperCase();
  }

  // Multiple names: use first letter of first and last name
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return `${first}${last}`;
}

const sizeClasses = {
  sm: "h-9 w-9 text-sm", // 36px mobile
  md: "h-12 w-12 text-base", // 48px desktop
  lg: "h-14 w-14 text-lg", // 56px (current TestimonialCard size)
};

export function InitialsAvatar({
  name,
  size = "lg",
  className,
}: InitialsAvatarProps) {
  const initials = getInitials(name);
  const sizeClass = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex-shrink-0 rounded-full bg-card border border-primary/30 flex items-center justify-center font-medium text-primary",
        sizeClass,
        className
      )}
      aria-label={`Reviewer initials for ${name}`}
      role="img"
    >
      {initials}
    </div>
  );
}

