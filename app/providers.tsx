"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { POSTHOG_KEY, mainSiteConfig } from "@/lib/analytics/config";

// Module scope, not component state: React StrictMode mounts effects twice in
// development, and posthog.init() is not idempotent.
let initialized = false;

/**
 * Client-side analytics boundary. The root layout stays a server component and
 * simply wraps its children in this.
 *
 * No PostHogProvider: nothing in this app calls the React hooks yet, and the
 * provider is only needed to supply them. Plain init keeps the surface small.
 *
 * If NEXT_PUBLIC_POSTHOG_KEY is unset the whole thing is a pass-through, so the
 * site builds and runs normally before the key exists.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (initialized || !POSTHOG_KEY) return;
    initialized = true;
    posthog.init(POSTHOG_KEY, {
      ...mainSiteConfig(),
      debug: process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "1",
    });
  }, []);

  return <>{children}</>;
}
