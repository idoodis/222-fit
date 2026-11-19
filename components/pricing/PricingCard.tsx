import {
  CalendarCheck,
  Check,
  CircleSlash,
  FileX,
  Infinity as InfinityIcon,
  RefreshCw,
  ShoppingBag,
} from "lucide-react";
import type { PricingPackage } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { PricingCtaLink } from "./PricingCtaLink";
import styles from "./pricing.module.css";

const TERMS = {
  recurring: {
    heading: "Membership",
    note: "Billed monthly",
    rows: [
      { icon: RefreshCw, label: "Auto renewal" },
      { icon: FileX, label: "No contract" },
    ],
  },
  "one-time": {
    heading: "Purchase",
    note: "One-time payment",
    rows: [
      { icon: ShoppingBag, label: "One-time purchase" },
      { icon: CircleSlash, label: "No auto-renewal" },
    ],
  },
} as const;

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  const terms = TERMS[pkg.billing];
  const AllowanceIcon = pkg.unlimited ? InfinityIcon : CalendarCheck;
  const headingId = `pricing-${pkg.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(styles.card, pkg.featured && styles.cardFeatured)}
    >
      {pkg.featured && (
        <span className={styles.badge}>
          <InfinityIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Unlimited
        </span>
      )}

      <header>
        <h3 id={headingId} className={styles.name}>
          {pkg.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {pkg.description}
        </p>
      </header>

      <div className={styles.priceBlock}>
        <p className={styles.price}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{pkg.price}</span>
          <span className={styles.period}>/ {pkg.period}</span>
        </p>
        <p className={styles.billingNote}>{terms.note}</p>
      </div>

      <div
        className={cn(
          styles.allowance,
          pkg.unlimited && styles.allowanceUnlimited
        )}
      >
        <AllowanceIcon className={styles.allowanceIcon} aria-hidden="true" />
        <span>{pkg.allowance}</span>
      </div>

      <ul className={styles.features}>
        {pkg.features.map((feature) => (
          <li key={feature}>
            <Check className={styles.featureIcon} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className={styles.terms}>
        <p className={styles.termsHeading}>{terms.heading}</p>
        <ul className="mt-2.5 space-y-2">
          {terms.rows.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.termRow}>
              <span className={styles.termIcon} aria-hidden="true">
                <Icon className="h-3.5 w-3.5" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <PricingCtaLink pkg={pkg} />
      </div>
    </article>
  );
}
