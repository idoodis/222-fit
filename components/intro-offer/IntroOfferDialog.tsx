"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Dumbbell,
  Lock,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { INTRO_OFFER_CONFIG } from "@/lib/intro-offer/config";
import type { ResolvedCountdown } from "@/lib/intro-offer/state";
import { Countdown } from "./Countdown";
import styles from "./intro-offer.module.css";

export type DismissMethod =
  | "close_button"
  | "escape"
  | "backdrop"
  | "maybe_later"
  | "cta";

interface IntroOfferDialogProps {
  open: boolean;
  countdown: ResolvedCountdown;
  /** The deadline has passed (only relevant when a countdown is configured). */
  expired: boolean;
  onClaim: () => void;
  /** Called once the dialog has fully closed (after its exit animation). */
  onClosed: (method: DismissMethod) => void;
}

const EXIT_MS = 220;
const { copy, checkoutUrl, offerDetails } = INTRO_OFFER_CONFIG;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Locks page scroll without the layout jumping when the scrollbar hides. */
function lockScroll() {
  const html = document.documentElement;
  const body = document.body;
  const scrollbar = window.innerWidth - html.clientWidth;
  const prev = { overflow: html.style.overflow, padding: body.style.paddingRight };
  html.style.overflow = "hidden";
  if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
  return () => {
    html.style.overflow = prev.overflow;
    body.style.paddingRight = prev.padding;
  };
}

export default function IntroOfferDialog({
  open,
  countdown,
  expired,
  onClaim,
  onClosed,
}: IntroOfferDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeMethod = useRef<DismissMethod | null>(null);
  const pointerDownOutside = useRef(false);
  const [closing, setClosing] = useState(false);
  const titleId = useId();
  const descId = useId();

  // Always call the latest onClosed without re-running the open effect.
  const onClosedRef = useRef(onClosed);
  useEffect(() => {
    onClosedRef.current = onClosed;
  });

  const finish = useCallback((method: DismissMethod) => {
    setClosing(false);
    onClosedRef.current(method);
  }, []);

  // Open the native modal dialog (focus trap, inert page, top layer).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open || dialog.open) return;
    closeMethod.current = null;
    dialog.showModal();
    const unlock = lockScroll();

    // Catch closes the browser performs itself (e.g. a repeated Escape it
    // won't let pages intercept). Watching the `open` attribute is more
    // reliable than the async `close` event.
    const observer = new MutationObserver(() => {
      if (!dialog.open && closeMethod.current === null) {
        closeMethod.current = "escape";
        finish("escape");
      }
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });

    return () => {
      observer.disconnect();
      unlock();
      if (dialog.open) dialog.close();
    };
  }, [open, finish]);

  const requestClose = useCallback(
    (method: DismissMethod) => {
      const dialog = dialogRef.current;
      if (!dialog?.open || closeMethod.current) return;
      closeMethod.current = method;
      const close = () => {
        dialog.close();
        finish(method);
      };
      if (prefersReducedMotion()) {
        close();
        return;
      }
      setClosing(true);
      window.setTimeout(close, EXIT_MS);
    },
    [finish]
  );

  const timerActive =
    countdown.deadline !== null && !expired && countdown.mode !== "off";
  const offerEnded = expired && countdown.onExpire === "hide-offer";
  const showOffer = offerDetails.verified && !offerEnded;
  const timerLabel =
    countdown.mode === "visitor"
      ? "Your intro offer window closes in"
      : "Offer ends in";

  // Staggered entrance: each block fades up slightly after the previous one.
  const reveal = (order: number) => ({
    className: styles.reveal,
    style: { "--i": order } as React.CSSProperties,
  });

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      data-state={closing ? "closing" : "open"}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onCancel={(e) => {
        e.preventDefault();
        requestClose("escape");
      }}
      onPointerDown={(e) => {
        pointerDownOutside.current = !panelRef.current?.contains(
          e.target as Node
        );
      }}
      onClick={(e) => {
        const outside = !panelRef.current?.contains(e.target as Node);
        if (outside && pointerDownOutside.current) requestClose("backdrop");
      }}
    >
      <div className={styles.frame}>
        <div ref={panelRef} className={styles.panel}>
          <div className={styles.borderGlow} aria-hidden="true" />
          <div className={styles.surface}>
            <div className={styles.aura} aria-hidden="true" />
            <div className={styles.grain} aria-hidden="true" />

            <button
              type="button"
              onClick={() => requestClose("close_button")}
              className={styles.closeButton}
              aria-label="Close new member offer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className={`${styles.content} relative px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-9 text-center sm:px-10 sm:pb-8 sm:pt-11`}>
              <div {...reveal(0)}>
                <span className={styles.badge}>
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.badge}
                </span>
              </div>

              <h2
                id={titleId}
                {...reveal(1)}
                className={`${styles.reveal} ${styles.headline} mt-5 text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-brand-off-white sm:text-[2.35rem]`}
              >
                <span className="block">{copy.headlineLead}</span>
                <span className={`${styles.goldText} block`}>
                  {copy.headlineAccent}
                </span>
              </h2>

              {showOffer && (
                <div {...reveal(2)}>
                  <div className={styles.offerCard}>
                    <span className={styles.offerSheen} aria-hidden="true" />
                    <p className={styles.offerEyebrow}>Intro Offer</p>
                    <p className="sr-only">
                      {offerDetails.quantity} {offerDetails.unit.toLowerCase()} for{" "}
                      {offerDetails.currency}
                      {offerDetails.price}
                    </p>
                    <div className={styles.offerRow} aria-hidden="true">
                      <div className={styles.offerFigure}>
                        <span className={styles.offerNumber}>
                          {offerDetails.quantity}
                        </span>
                        <span className={styles.offerCaption}>
                          {offerDetails.unit}
                        </span>
                      </div>
                      <span className={styles.offerFor}>for</span>
                      <div className={styles.offerFigure}>
                        <span className={`${styles.offerNumber} ${styles.offerPrice}`}>
                          <span className={styles.offerCurrency}>
                            {offerDetails.currency}
                          </span>
                          {offerDetails.price}
                        </span>
                        <span className={styles.offerCaption}>Total</span>
                      </div>
                    </div>
                    {offerDetails.term && (
                      <p className={styles.offerTerm}>{offerDetails.term}</p>
                    )}
                  </div>
                </div>
              )}

              <p
                id={descId}
                {...reveal(3)}
                className={`${styles.reveal} ${styles.subhead} mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-brand-warm-gray sm:text-base`}
              >
                {copy.subheadline}
              </p>

              <div {...reveal(4)}>
                <div className={styles.eligibility}>
                  <span className={styles.eligibilityIcon} aria-hidden="true">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className={styles.eligibilityTitle}>{copy.eligibility}</p>
                    <p className="mt-0.5 text-xs leading-snug text-brand-warm-gray">
                      {copy.eligibilityNote}
                    </p>
                  </div>
                </div>
              </div>

              {timerActive && countdown.deadline !== null && (
                <div {...reveal(5)}>
                  <Countdown
                    deadline={countdown.deadline}
                    label={timerLabel}
                    className="mt-6"
                  />
                </div>
              )}

              {offerEnded ? (
                <div {...reveal(6)}>
                  <div className={styles.ended} role="status">
                    <p className="font-semibold text-brand-off-white">
                      This offer has ended.
                    </p>
                    <p className="mt-1 text-sm text-brand-warm-gray">
                      See our{" "}
                      <Link
                        href="/pricing"
                        className="font-medium text-brand-gold underline-offset-4 hover:underline"
                        onClick={() => requestClose("maybe_later")}
                      >
                        current pricing
                      </Link>{" "}
                      for ways to get started.
                    </p>
                  </div>
                </div>
              ) : (
                <div {...reveal(7)}>
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                    onClick={() => {
                      onClaim();
                      requestClose("cta");
                    }}
                  >
                    <span className={styles.ctaSheen} aria-hidden="true" />
                    <span className="relative">{copy.cta}</span>
                    <ArrowRight
                      className={`${styles.ctaArrow} relative h-5 w-5`}
                      aria-hidden="true"
                    />
                    <span className="sr-only"> (opens Mindbody checkout in a new tab)</span>
                  </a>
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-brand-warm-gray">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.ctaNote}
                  </p>
                </div>
              )}

              <div {...reveal(8)}>
                <ul className={styles.trust}>
                  <li>
                    <Dumbbell className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                    {copy.trust[0]}
                  </li>
                  <li aria-hidden="true" className={styles.trustDot} />
                  <li>
                    <Users className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                    {copy.trust[1]}
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => requestClose("maybe_later")}
                  className="mt-4 rounded px-2 py-1 text-xs font-medium text-brand-warm-gray/80 underline-offset-4 transition-colors hover:text-brand-off-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
