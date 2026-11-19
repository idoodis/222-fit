"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { INTRO_OFFER_CONFIG } from "@/lib/intro-offer/config";
import {
  canAutoShow,
  getServerSnapshot,
  getSnapshot,
  hideReminderForSession,
  isExcludedPath,
  resetVisitorState,
  resolveCountdown,
  subscribe,
  updateVisitorState,
  visitorWindowMs,
} from "@/lib/intro-offer/state";
import { useHasPassed } from "@/lib/intro-offer/clock";
import { trackEvent } from "@/lib/analytics";
import { OfferReminder } from "./OfferReminder";
import type { DismissMethod } from "./IntroOfferDialog";

// The dialog is code-split and only downloaded when it is about to be used,
// so it adds nothing to the initial page load.
const loadDialog = () => import("./IntroOfferDialog");
const IntroOfferDialog = dynamic(loadDialog, { ssr: false });

type OpenTrigger = "auto_timer" | "exit_intent" | "offer_link" | "reminder";

const { timing, countdown: countdownConfig, reminder } = INTRO_OFFER_CONFIG;
const URL_PARAM = "intro_offer";

/** Don't interrupt someone typing in a form, using the schedule, or in another modal. */
function isVisitorBusy() {
  if (document.visibilityState !== "visible") return true;
  const active = document.activeElement;
  if (
    active?.matches(
      'input, textarea, select, iframe, [contenteditable="true"], [contenteditable=""]'
    )
  ) {
    return true;
  }
  return Boolean(document.querySelector('dialog[open], [aria-modal="true"]'));
}

export function IntroOffer() {
  const pathname = usePathname();
  const visitor = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);
  const [dialogMounted, setDialogMounted] = useState(false);
  const urlHandled = useRef(false);

  const countdown = useMemo(
    () =>
      visitor
        ? resolveCountdown(countdownConfig, visitor)
        : resolveCountdown({ mode: "off" }, {}),
    [visitor]
  );
  const expired = useHasPassed(countdown.deadline);

  const ready = visitor !== null && visitor.firstVisitAt !== undefined;
  const excluded = isExcludedPath(pathname);
  const available =
    INTRO_OFFER_CONFIG.enabled &&
    ready &&
    !(expired && countdown.onExpire === "hide-offer");

  // First visit bookkeeping. The visitor countdown deadline is fixed here,
  // once, so refreshing or returning never restarts it.
  useEffect(() => {
    if (!INTRO_OFFER_CONFIG.enabled) return;

    if (
      process.env.NODE_ENV === "development" &&
      new URLSearchParams(window.location.search).get(URL_PARAM) === "reset"
    ) {
      resetVisitorState();
    }

    const state = getSnapshot();
    const firstVisitAt = state.firstVisitAt ?? Date.now();
    const windowMs = visitorWindowMs(countdownConfig);
    updateVisitorState({
      firstVisitAt,
      ...(windowMs !== null && state.visitorDeadline === undefined
        ? { visitorDeadline: firstVisitAt + windowMs }
        : {}),
    });
  }, []);

  const show = useCallback(
    (trigger: OpenTrigger) => {
      if (trigger !== "reminder") {
        updateVisitorState({ lastAutoShownAt: Date.now() });
      } else {
        trackEvent("intro_offer_reopen", { source: "reminder_pill" });
      }
      trackEvent("intro_offer_impression", {
        trigger,
        countdown_mode: countdown.mode,
        page_path: window.location.pathname,
      });
      setDialogMounted(true);
      setOpen(true);
    },
    [countdown.mode]
  );

  // Automatic opening: after a short delay, on desktop exit intent, or
  // immediately from an offer link (?intro_offer=open).
  useEffect(() => {
    if (!available || excluded || open) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const cleanups: (() => void)[] = [];

    const url = new URL(window.location.href);
    if (!urlHandled.current && url.searchParams.get(URL_PARAM) === "open") {
      urlHandled.current = true;
      // Drop the param so a refresh or shared copy of the URL doesn't reopen it.
      url.searchParams.delete(URL_PARAM);
      window.history.replaceState(window.history.state, "", url);
      timers.push(setTimeout(() => show("offer_link"), 600));
      return () => timers.forEach(clearTimeout);
    }

    if (!canAutoShow(getSnapshot(), Date.now())) return;

    // Warm up the dialog code shortly before it's needed.
    timers.push(setTimeout(() => void loadDialog(), 2500));

    const attempt = () => {
      if (isVisitorBusy()) {
        timers.push(setTimeout(attempt, 4000));
        return;
      }
      show("auto_timer");
    };
    // Measured from when the visitor landed, not from each client navigation.
    const elapsed = performance.now();
    timers.push(
      setTimeout(attempt, Math.max(0, timing.initialDelayMs - elapsed))
    );

    const desktopPointer = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)"
    ).matches;
    if (timing.exitIntent && desktopPointer) {
      const onMouseOut = (event: MouseEvent) => {
        if (
          event.relatedTarget === null &&
          event.clientY <= 0 &&
          performance.now() > timing.exitIntentMinDwellMs &&
          !isVisitorBusy()
        ) {
          show("exit_intent");
        }
      };
      document.addEventListener("mouseout", onMouseOut);
      cleanups.push(() => document.removeEventListener("mouseout", onMouseOut));
    }

    return () => {
      timers.forEach(clearTimeout);
      cleanups.forEach((fn) => fn());
    };
  }, [available, excluded, open, show]);

  const handleClaim = useCallback(() => {
    updateVisitorState({ claimedAt: Date.now() });
    trackEvent("intro_offer_cta_click", {
      link_url: INTRO_OFFER_CONFIG.checkoutUrl,
      countdown_mode: countdown.mode,
      page_path: window.location.pathname,
    });
  }, [countdown.mode]);

  const handleClosed = useCallback((method: DismissMethod) => {
    setOpen(false);
    if (method === "cta") return;
    updateVisitorState({ dismissedAt: Date.now() });
    trackEvent("intro_offer_dismiss", { method });
  }, []);

  const handleHideReminder = useCallback(() => {
    hideReminderForSession();
    trackEvent("intro_offer_reminder_hide");
  }, []);

  if (!visitor) return null;

  const hasSeenOffer = Boolean(
    visitor.lastAutoShownAt || visitor.dismissedAt || visitor.claimedAt
  );
  const showReminder =
    available &&
    reminder.enabled &&
    !excluded &&
    hasSeenOffer &&
    !visitor.reminderHiddenThisSession;
  const activeDeadline = expired ? null : countdown.deadline;

  return (
    <>
      {showReminder && (
        <OfferReminder
          hidden={open}
          deadline={activeDeadline}
          onOpen={() => show("reminder")}
          onHide={handleHideReminder}
          onIntent={() => void loadDialog()}
        />
      )}
      {/* Stays mounted if the offer ends while open, to show the "ended" state. */}
      {dialogMounted && (available || open) && (
        <IntroOfferDialog
          open={open}
          countdown={countdown}
          expired={expired}
          onClaim={handleClaim}
          onClosed={handleClosed}
        />
      )}
    </>
  );
}
