"use client";

import { buttonVariants } from "@/components/ui/button";
import { BOOKING_MEMBERSHIPS_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface BookNowButtonProps {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function BookNowButton({
  variant = "default",
  size = "default",
  className,
  children,
}: BookNowButtonProps) {
  return (
    <Link
      href={BOOKING_MEMBERSHIPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Calendar className="h-4 w-4" />
      {children || "Book Now"}
    </Link>
  );
}

