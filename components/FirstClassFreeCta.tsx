"use client";

import Link from "next/link";

interface FirstClassFreeCtaProps {
  href: string;
}

export function FirstClassFreeCta({ href }: FirstClassFreeCtaProps) {
  return (
    <div className="rounded-xl border border-primary/20 bg-background/60 p-6 text-center shadow-lg md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
        First Class Free
      </p>
      <h3 className="mt-3 text-2xl font-semibold">
        Try Your First Group Class Free
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Experience the 222 Fit community, coaching, and energy — no pressure, no
        commitment.
      </p>
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        <li>Coach-led group training</li>
        <li>All fitness levels welcome</li>
        <li>Supportive, motivating environment</li>
      </ul>
      <div className="mt-6 flex flex-col items-center gap-2">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Complimentary First Group Class
        </Link>
        <p className="text-xs text-muted-foreground">Limited to new clients only</p>
      </div>
    </div>
  );
}
