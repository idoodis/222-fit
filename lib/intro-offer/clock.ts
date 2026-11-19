"use client";

import { useSyncExternalStore } from "react";

/**
 * One shared, second-aligned clock for every countdown on the page.
 * A single timer runs only while something is subscribed, and subscribers
 * re-render only when the value they select actually changes.
 */

let nowSec = 0;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

const currentSecond = () => Math.floor(Date.now() / 1000);

function scheduleTick() {
  // Fire just after the next whole second so digits flip in sync.
  const delay = 1000 - (Date.now() % 1000) + 10;
  timer = setTimeout(() => {
    nowSec = currentSecond();
    listeners.forEach((listener) => listener());
    scheduleTick();
  }, delay);
}

function onVisibilityChange() {
  // Timers are throttled in background tabs; resync when the tab returns.
  if (document.visibilityState === "visible") {
    nowSec = currentSecond();
    listeners.forEach((listener) => listener());
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    nowSec = currentSecond();
    scheduleTick();
    document.addEventListener("visibilitychange", onVisibilityChange);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }
  };
}

function getNowSeconds() {
  if (listeners.size === 0 || nowSec === 0) nowSec = currentSecond();
  return nowSec;
}

const noopSubscribe = () => () => {};

/** Whole seconds remaining until `deadline` (epoch ms), ticking each second. */
export function useSecondsRemaining(deadline: number | null) {
  return useSyncExternalStore(
    deadline === null ? noopSubscribe : subscribe,
    () =>
      deadline === null
        ? 0
        : Math.max(0, Math.ceil(deadline / 1000 - getNowSeconds())),
    () => 0
  );
}

/** Re-renders only when `deadline` passes. */
export function useHasPassed(deadline: number | null) {
  return useSyncExternalStore(
    deadline === null ? noopSubscribe : subscribe,
    () => deadline !== null && getNowSeconds() * 1000 >= deadline,
    () => false
  );
}

export function splitDuration(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}
