/**
 * New Member Intro Offer — configuration
 * ======================================
 *
 * This is the ONLY file you should need to edit to change the intro offer
 * popup, its countdown, or its timing.
 *
 * Quick reference
 * ---------------
 * - Turn the whole feature off:           enabled: false
 * - Show the price / sessions in popup:   offerDetails.verified: true
 * - Countdown to a real end date:         countdown: { mode: "fixed", endsAt: "2026-12-31T23:59:59-06:00", onExpire: "hide-offer" }
 * - Per-visitor window (only if honored): countdown: { mode: "visitor", durationHours: 48, enforcedByBusiness: true, onExpire: "hide-offer" }
 * - No countdown (default):               countdown: { mode: "off" }
 * - Start every visitor fresh (new promo): change campaignId
 */

export type CountdownExpireBehavior =
  /** The offer is over: hide the popup and the reminder pill entirely. */
  | "hide-offer"
  /** Keep promoting the offer, just remove the timer. */
  | "hide-timer";

export type CountdownConfig =
  /** No countdown is displayed. Use this when the offer has no real deadline. */
  | { mode: "off" }
  /**
   * One real promotional deadline that applies to everyone.
   * Use an ISO 8601 date WITH a timezone offset. Carol Stream, IL is
   * -06:00 in winter (CST) and -05:00 in summer (CDT).
   */
  | { mode: "fixed"; endsAt: string; onExpire: CountdownExpireBehavior }
  /**
   * A personal window that starts on the visitor's first visit and is
   * remembered in their browser (it never restarts on refresh).
   *
   * Only use this if 222 FIT genuinely honors AND enforces the window.
   * `enforcedByBusiness` must be set to `true` to acknowledge that;
   * otherwise the countdown stays disabled.
   */
  | {
      mode: "visitor";
      durationHours: number;
      enforcedByBusiness: boolean;
      onExpire: CountdownExpireBehavior;
    };

export const INTRO_OFFER_CONFIG = {
  /** Master switch for the popup and the reminder pill. */
  enabled: true,

  /**
   * Identifies this promotion in each visitor's browser storage.
   * Changing it resets dismissals, CTA clicks and visitor countdowns for
   * everyone — do that when you launch a new/different promotion.
   */
  campaignId: "intro-offer-2026",

  /** The existing Mindbody checkout for the Intro Offer pricing option. */
  checkoutUrl:
    "https://go.mindbodyonline.com/book/app/pricing/bus_11kXh8Q6yhVKZkhngw/po_11kXh8Q6yhVKZFjdjf?mbo_src=po-mgmt-copy-link",

  copy: {
    badge: "Exclusive New Member Offer",
    headlineLead: "New to 222 FIT?",
    headlineAccent: "Your Journey Starts Here.",
    subheadline:
      "Experience the energy, coaching, and community of 222 FIT with our exclusive introductory offer.",
    eligibility: "New Members Only",
    eligibilityNote:
      "Available to first-time 222 FIT members only. Eligibility restrictions may apply.",
    cta: "Claim My Intro Offer",
    ctaNote: "Secure checkout on Mindbody",
    trust: ["Professional coaching", "Supportive community"],
    reminderTitle: "New Member Special",
    reminderSubtitle: "New members only",
  },

  /**
   * Offer specifics shown inside the popup. They are ONLY displayed when
   * `verified` is true — confirm they match the live Mindbody pricing option
   * before switching it on, and update them whenever the offer changes.
   *
   * Pre-filled from the Mindbody checkout page as seen on 2026-11-19.
   */
  offerDetails: {
    verified: false,
    price: "$22",
    summary: "3 sessions · use within 12 days of purchase",
  },

  /**
   * Countdown timer. Disabled by default because no real promotional
   * deadline has been confirmed. Never present an invented deadline as real.
   */
  countdown: { mode: "off" } as CountdownConfig,

  timing: {
    /** Delay before the popup first appears on a visit (ms). */
    initialDelayMs: 7000,
    /** After a visitor closes the popup, wait this long before auto-showing again. */
    dismissCooldownDays: 7,
    /** After a visitor clicks the CTA, wait this long before auto-showing again. */
    claimCooldownDays: 30,
    /** Desktop only: show early if the cursor leaves toward the browser tabs. */
    exitIntent: true,
    /** Minimum time on site before exit intent can fire (ms). */
    exitIntentMinDwellMs: 2500,
  },

  /** Floating "New Member Special" pill that reopens the popup. */
  reminder: { enabled: true },

  /**
   * Pages where neither the popup nor the reminder appears (focused landing
   * pages, legal pages, confirmation pages). Matches the path and its children.
   */
  excludedPaths: [
    "/group-training-free-class",
    "/thank-you",
    "/privacy",
    "/privacy-policy",
    "/terms",
  ],
} as const;

export type IntroOfferConfig = typeof INTRO_OFFER_CONFIG;
