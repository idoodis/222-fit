"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./pricing.module.css";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
}

/**
 * Fades content up as it scrolls into view. Content that is already on
 * screen when the page hydrates is left untouched (no flash), and nothing is
 * hidden for reduced-motion users or browsers without IntersectionObserver.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect();
      },
      // The huge top margin treats anything already scrolled past as visible,
      // so jumping down the page never leaves content hidden above.
      { rootMargin: "100000px 0px -10% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(styles.reveal, className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
