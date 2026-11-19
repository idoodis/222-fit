"use client";

import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { PricingPackage } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import styles from "./pricing.module.css";

interface PricingCtaLinkProps {
  pkg: Pick<PricingPackage, "id" | "name" | "checkoutUrl" | "featured">;
}

/** "Get Started" → the package's own Mindbody checkout, in a new tab. */
export function PricingCtaLink({ pkg }: PricingCtaLinkProps) {
  return (
    <a
      href={pkg.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get started with ${pkg.name} (opens Mindbody checkout in a new tab)`}
      className={cn(styles.cta, pkg.featured && styles.ctaFeatured)}
      onClick={() =>
        trackEvent("pricing_cta_click", {
          package_id: pkg.id,
          package_name: pkg.name,
          link_url: pkg.checkoutUrl,
        })
      }
    >
      <span>Get Started</span>
      <ArrowUpRight className={styles.ctaIcon} aria-hidden="true" />
    </a>
  );
}
