/**
 * Pricing page packages
 * =====================
 *
 * Single source of truth for the cards on /pricing. Edit prices, class
 * allowances, features and Mindbody checkout links here.
 *
 * Each `checkoutUrl` must be the exact Mindbody link for that pricing option
 * (Mindbody > Pricing option > "Copy link").
 */

export type PricingPackageId = "drop-in" | "standard" | "premium" | "all-access";

export interface PricingPackage {
  id: PricingPackageId;
  name: string;
  description: string;
  /** Whole dollars. */
  price: number;
  /** Shown after the price: "$100 / month". */
  period: "month" | "class";
  /** The headline benefit, e.g. "2 Classes / Week". */
  allowance: string;
  /** Unlimited plans get extra visual emphasis. */
  unlimited?: boolean;
  /** Additional benefits shown as checkmark rows. */
  features: string[];
  /**
   * "recurring": shows Auto Renewal + No Contract.
   * "one-time": shows One-time purchase + No auto-renewal.
   */
  billing: "recurring" | "one-time";
  /** Visually highlight this card as the premium option. */
  featured?: boolean;
  checkoutUrl: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "drop-in",
    name: "Drop-In",
    description: "Try a class without commitment",
    price: 30,
    period: "class",
    allowance: "1 Class",
    features: ["No commitment required", "Perfect for trying us out"],
    billing: "one-time",
    checkoutUrl:
      "https://go.mindbodyonline.com/book/app/pricing/bus_11kXh8Q6yhVKZkhngw/po_11kXh8Q6yhVKZFjdcY?mbo_src=po-mgmt-copy-link",
  },
  {
    id: "standard",
    name: "Standard Pack",
    description: "Perfect for getting started",
    price: 100,
    period: "month",
    allowance: "1 Class / Week",
    features: [],
    billing: "recurring",
    checkoutUrl:
      "https://go.mindbodyonline.com/book/app/pricing/bus_11kXh8Q6yhVKZkhngw/po_11kXh8Q6yhVKZFjdkg?mbo_src=po-mgmt-copy-link",
  },
  {
    id: "premium",
    name: "Premium Pack",
    description: "Great value for regular training",
    price: 160,
    period: "month",
    allowance: "2 Classes / Week",
    features: [],
    billing: "recurring",
    checkoutUrl:
      "https://go.mindbodyonline.com/book/app/pricing/bus_11kXh8Q6yhVKZkhngw/po_11kXh8Q6yhVKZFjdmh?mbo_src=po-mgmt-copy-link",
  },
  {
    id: "all-access",
    name: "All Access",
    description: "Train as often as you like",
    price: 200,
    period: "month",
    allowance: "Unlimited Classes / Week",
    unlimited: true,
    features: ["10% off products"],
    billing: "recurring",
    featured: true,
    checkoutUrl:
      "https://go.mindbodyonline.com/book/app/pricing/bus_11kXh8Q6yhVKZkhngw/po_11kXh8Q6yhVKZFjdpk?mbo_src=po-mgmt-copy-link",
  },
];
