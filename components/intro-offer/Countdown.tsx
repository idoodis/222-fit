"use client";

import { memo } from "react";
import { splitDuration, useSecondsRemaining } from "@/lib/intro-offer/clock";
import { cn } from "@/lib/utils";
import styles from "./intro-offer.module.css";

interface CountdownProps {
  /** Epoch ms when the offer ends. */
  deadline: number;
  label: string;
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** A single digit. Keyed by value so only digits that change re-animate. */
const Digit = memo(function Digit({ value }: { value: string }) {
  return (
    <span className={styles.digitSlot}>
      <span key={value} className={styles.digit}>
        {value}
      </span>
    </span>
  );
});

const Segment = memo(function Segment({
  value,
  unit,
}: {
  value: string;
  unit: string;
}) {
  return (
    <div className={styles.segment}>
      <div className={styles.segmentFace}>
        {value.split("").map((d, i) => (
          // Index keys are intentional: each slot is a fixed position.
          <Digit key={`${value.length}-${i}`} value={d} />
        ))}
      </div>
      <span className={styles.segmentUnit}>{unit}</span>
    </div>
  );
});

function Separator() {
  return (
    <span className={styles.separator} aria-hidden="true">
      :
    </span>
  );
}

export function Countdown({ deadline, label, className }: CountdownProps) {
  const remaining = useSecondsRemaining(deadline);
  const { days, hours, minutes, seconds } = splitDuration(remaining);
  // HOURS : MINUTES : SECONDS, adding a days block only for long deadlines.
  const showDays = hours >= 100;
  const displayHours = showDays ? hours % 24 : hours;

  const spoken = [
    showDays && `${days} day${days === 1 ? "" : "s"}`,
    `${displayHours} hour${displayHours === 1 ? "" : "s"}`,
    `${minutes} minute${minutes === 1 ? "" : "s"}`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className={cn(styles.countdown, className)}>
      <p className={styles.countdownLabel}>{label}</p>
      {/* role="timer" is not announced every second; the label summarizes it. */}
      <div
        role="timer"
        aria-label={`${label} ${spoken}`}
        className={styles.countdownRow}
      >
        <div aria-hidden="true" className="contents">
          {showDays && (
            <>
              <Segment value={pad(days)} unit="Days" />
              <Separator />
            </>
          )}
          <Segment value={pad(displayHours)} unit="Hours" />
          <Separator />
          <Segment value={pad(minutes)} unit="Minutes" />
          <Separator />
          <Segment value={pad(seconds)} unit="Seconds" />
        </div>
      </div>
    </div>
  );
}

/** Compact h:mm:ss text for the reminder pill. */
export function CountdownText({ deadline }: { deadline: number }) {
  const remaining = useSecondsRemaining(deadline);
  const { days, hours, minutes, seconds } = splitDuration(remaining);
  const text =
    hours >= 100
      ? `${days}d ${pad(hours % 24)}h`
      : `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return <span className="tabular-nums">{text}</span>;
}
