import {
  INTRO_OFFER_CONFIG,
  type CountdownConfig,
  type CountdownExpireBehavior,
} from "./config";

/** What we remember about a visitor, per campaign, in localStorage. */
export interface IntroOfferVisitorState {
  firstVisitAt?: number;
  /** Visitor-specific deadline (visitor countdown mode only). Never reset. */
  visitorDeadline?: number;
  /** Last time the popup opened by itself (timer, exit intent or offer link). */
  lastAutoShownAt?: number;
  dismissedAt?: number;
  claimedAt?: number;
}

export interface IntroOfferSnapshot extends IntroOfferVisitorState {
  /** Reminder pill hidden by the visitor for this browser session. */
  reminderHiddenThisSession: boolean;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export const STORAGE_KEY = `222fit.introOffer.${INTRO_OFFER_CONFIG.campaignId}`;
const SESSION_REMINDER_KEY = `${STORAGE_KEY}.reminderHidden`;

/* --- Storage (all access is wrapped: storage can be blocked or full) ---- */

function readLocal(): IntroOfferVisitorState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object"
      ? (parsed as IntroOfferVisitorState)
      : {};
  } catch {
    return {};
  }
}

function readSessionHidden() {
  try {
    return window.sessionStorage.getItem(SESSION_REMINDER_KEY) === "1";
  } catch {
    return false;
  }
}

/* --- A tiny external store so React reads storage hydration-safely ------ */

let snapshot: IntroOfferSnapshot | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getSnapshot(): IntroOfferSnapshot {
  if (snapshot === null) {
    snapshot = { ...readLocal(), reminderHiddenThisSession: readSessionHidden() };
  }
  return snapshot;
}

/** On the server there is no visitor state yet: render nothing. */
export function getServerSnapshot(): IntroOfferSnapshot | null {
  return null;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  // Keep multiple tabs in sync (e.g. dismissed in another tab).
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      snapshot = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function updateVisitorState(patch: Partial<IntroOfferVisitorState>) {
  const { reminderHiddenThisSession, ...current } = getSnapshot();
  const next = { ...current, ...patch };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Still update in memory so this page view behaves correctly.
  }
  snapshot = { ...next, reminderHiddenThisSession };
  emit();
}

export function hideReminderForSession() {
  try {
    window.sessionStorage.setItem(SESSION_REMINDER_KEY, "1");
  } catch {
    // ignore
  }
  snapshot = { ...getSnapshot(), reminderHiddenThisSession: true };
  emit();
}

/** Development helper: forget everything about this visitor. */
export function resetVisitorState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(SESSION_REMINDER_KEY);
  } catch {
    // ignore
  }
  snapshot = null;
  emit();
}

/* --- Countdown ----------------------------------------------------------- */

export interface ResolvedCountdown {
  mode: "off" | "fixed" | "visitor";
  /** Epoch ms when the offer ends, or null when there is no real deadline. */
  deadline: number | null;
  onExpire: CountdownExpireBehavior;
}

const DISABLED: ResolvedCountdown = {
  mode: "off",
  deadline: null,
  onExpire: "hide-timer",
};

export function visitorWindowMs(config: CountdownConfig) {
  return config.mode === "visitor" &&
    config.enforcedByBusiness &&
    config.durationHours > 0
    ? config.durationHours * 60 * 60 * 1000
    : null;
}

/** Turns the countdown config into a concrete deadline for this visitor. */
export function resolveCountdown(
  config: CountdownConfig,
  state: IntroOfferVisitorState
): ResolvedCountdown {
  if (config.mode === "fixed") {
    const deadline = Date.parse(config.endsAt);
    if (Number.isNaN(deadline)) return DISABLED;
    return { mode: "fixed", deadline, onExpire: config.onExpire };
  }

  const windowMs = visitorWindowMs(config);
  if (config.mode === "visitor" && windowMs !== null) {
    // Persisted on first visit (see IntroOffer.tsx) so it never restarts.
    const deadline =
      state.visitorDeadline ??
      (state.firstVisitAt !== undefined ? state.firstVisitAt + windowMs : null);
    if (deadline === null) return DISABLED;
    return { mode: "visitor", deadline, onExpire: config.onExpire };
  }

  return DISABLED;
}

/* --- Display rules ------------------------------------------------------- */

/** Whether the popup may open by itself (timer or exit intent). */
export function canAutoShow(state: IntroOfferVisitorState, now: number) {
  const { dismissCooldownDays, claimCooldownDays } = INTRO_OFFER_CONFIG.timing;
  const within = (at: number | undefined, days: number) =>
    typeof at === "number" && now - at < days * DAY_MS;

  if (within(state.claimedAt, claimCooldownDays)) return false;
  // An automatic impression counts like a dismissal, so refreshing while the
  // popup is open never re-triggers it on the next page load.
  if (within(state.lastAutoShownAt, dismissCooldownDays)) return false;
  if (within(state.dismissedAt, dismissCooldownDays)) return false;
  return true;
}

export function isExcludedPath(pathname: string | null) {
  if (!pathname) return false;
  return INTRO_OFFER_CONFIG.excludedPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}
