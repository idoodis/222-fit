"use client";

import { Sparkles, X } from "lucide-react";
import { INTRO_OFFER_CONFIG } from "@/lib/intro-offer/config";
import { CountdownText } from "./Countdown";
import styles from "./intro-offer.module.css";

interface OfferReminderProps {
  /** Visually hidden while the popup is open (kept mounted so focus returns here). */
  hidden: boolean;
  /** Active deadline to show a compact timer, if any. */
  deadline: number | null;
  onOpen: () => void;
  onHide: () => void;
  onIntent?: () => void;
}

const { copy } = INTRO_OFFER_CONFIG;

export function OfferReminder({
  hidden,
  deadline,
  onOpen,
  onHide,
  onIntent,
}: OfferReminderProps) {
  return (
    <aside
      className={styles.reminder}
      data-hidden={hidden}
      aria-label="New member offer"
      aria-hidden={hidden || undefined}
    >
      <div className={styles.reminderInner}>
        <button
          type="button"
          className={styles.reminderButton}
          onClick={onOpen}
          onPointerEnter={onIntent}
          onFocus={onIntent}
          aria-haspopup="dialog"
          tabIndex={hidden ? -1 : undefined}
        >
          <span className={styles.reminderIcon} aria-hidden="true">
            <Sparkles className="h-[1.15rem] w-[1.15rem]" />
          </span>
          <span className="min-w-0">
            <span className={styles.reminderTitle}>{copy.reminderTitle}</span>
            <span className={styles.reminderSub}>
              {copy.reminderSubtitle}
              {deadline !== null && (
                <>
                  <span aria-hidden="true"> · </span>
                  <span className="sr-only">, offer ends in </span>
                  <CountdownText deadline={deadline} />
                </>
              )}
            </span>
          </span>
        </button>
        <button
          type="button"
          className={styles.reminderClose}
          onClick={onHide}
          aria-label="Hide new member offer reminder"
          tabIndex={hidden ? -1 : undefined}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
