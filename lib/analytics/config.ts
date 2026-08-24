import type { CaptureResult, PostHogConfig } from "posthog-js";

/**
 * Shared PostHog configuration for every da-system.ai surface.
 *
 * All six tools plus the marketing site are served from one origin
 * (da-system.ai) via rewrites, so they share one PostHog project — and,
 * importantly, one browser persistence store. Two consequences drive the
 * design here:
 *
 *  1. The `surface` property is stamped per-instance in `before_send`, never
 *     via `posthog.register()`. Super properties are written to that shared
 *     store, so a registered `surface` on one tool would leak onto another
 *     tool's events.
 *
 *  2. Anything rendering client-confidential data (portfolio values, creator
 *     handles, brand margins) runs the `locked` tier, which captures the fact
 *     of a pageview and nothing about its contents.
 */

export type Surface = "site" | "wtf" | "da_trading" | "instagram" | "affiliates" | "livestream";
export type Tier = "content" | "locked";

// Verified empirically: this project's key authenticates against US Cloud and
// is rejected by EU. Region is fixed per PostHog account at signup.
const REGION = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "eu" : "us";

/**
 * PostHog *project* API key. This is a publishable key — it is compiled into
 * the client bundle and is visible to anyone who views the deployed
 * JavaScript, so keeping it out of the repo would buy nothing. The secret
 * Personal API key is a different credential and is not used here.
 *
 * Overridable via env so it can be rotated without a code change; rotate in
 * PostHog → Settings → Project if it is ever abused.
 */
export const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_AggoqCgB2mJBbMsxAjpxENiEq2nhU34YwstDBghPZ2hN";

/** Same-origin proxy defined in next.config.ts — see the comment there. */
export const POSTHOG_API_HOST = "/ingest";

/** Real PostHog host, so "view in PostHog" deep links still resolve. */
export const POSTHOG_UI_HOST = `https://${REGION}.posthog.com`;

const CONTENT_PATH = /^\/(thesis|writing)(\/|$)|^\/$/;

/**
 * `tier` may be a literal (single-tier apps) or "by-url" for the main site,
 * where autocapture is URL-scoped and the effective tier therefore differs
 * per event. Deriving it from the event's own $current_url keeps the label
 * honest, so "show me every content-tier event" cannot silently include a
 * confidential route.
 */
function stampSurface(surface: Surface, tier: Tier | "by-url") {
  return (event: CaptureResult | null): CaptureResult | null => {
    if (!event) return null;
    // Defensive: before_send runs on every event, so anything thrown here
    // silently drops all analytics. `properties` is typed as required but is
    // not guaranteed present at runtime for every internal event.
    try {
      let effective: Tier;
      if (tier === "by-url") {
        let path = "";
        try {
          path = new URL(String(event.properties?.$current_url ?? "")).pathname;
        } catch {
          path = "";
        }
        effective = CONTENT_PATH.test(path) ? "content" : "locked";
      } else {
        effective = tier;
      }
      event.properties = { ...(event.properties ?? {}), surface, surface_tier: effective };
    } catch {
      // Enrichment is best-effort; never lose the event over it.
    }
    return event;
  };
}

/**
 * Baseline for every surface: record that a page was viewed and how long it
 * was open, and nothing else. No DOM text, no element attributes, no inputs,
 * no replay, no network URLs.
 */
export function lockedConfig(surface: Surface): Partial<PostHogConfig> {
  return {
    api_host: POSTHOG_API_HOST,
    ui_host: POSTHOG_UI_HOST,

    // Capture surface — deliberately minimal.
    autocapture: false,
    capture_pageview: "history_change",
    capture_pageleave: true,
    rageclick: false,
    capture_dead_clicks: false,
    enable_heatmaps: false,
    capture_exceptions: false,
    // network_timing would ship full request URLs, which can carry record ids.
    capture_performance: { web_vitals: true, network_timing: false },

    // Replay is off everywhere and is never turned on: unlike autocapture it
    // cannot be scoped by URL, so the confidential routes veto it site-wide.
    disable_session_recording: true,

    // Inert while autocapture is false. Kept as a guard so that if anyone
    // enables autocapture later they do not silently start shipping DOM text.
    mask_all_text: true,
    mask_all_element_attributes: true,

    person_profiles: "identified_only",
    disable_surveys: true,
    disable_web_experiments: true,

    before_send: stampSurface(surface, "locked"),
  };
}

/**
 * Marketing/editorial pages only. Adds click autocapture so we can see which
 * links in an essay actually get followed.
 *
 * Scoped with `url_allowlist` rather than by conditionally initialising: the
 * provider mounts once in the root layout and never remounts on client-side
 * navigation, so a per-pathname init would leave the content-tier instance
 * live after a soft nav to /results. `url_allowlist` is evaluated at capture
 * time against the current URL, so it follows navigation correctly.
 */
export function mainSiteConfig(): Partial<PostHogConfig> {
  return {
    ...lockedConfig("site"),
    autocapture: {
      url_allowlist: [
        /^https?:\/\/(www\.)?da-system\.ai\/?$/,
        /^https?:\/\/(www\.)?da-system\.ai\/thesis(\/.*)?$/,
        /^https?:\/\/(www\.)?da-system\.ai\/writing(\/.*)?$/,
        // localhost, so the same behaviour is testable before deploy
        /^https?:\/\/localhost(:\d+)?\/?$/,
        /^https?:\/\/localhost(:\d+)?\/thesis(\/.*)?$/,
        /^https?:\/\/localhost(:\d+)?\/writing(\/.*)?$/,
      ],
      dom_event_allowlist: ["click"],
      element_allowlist: ["a", "button"],
    },
    mask_all_text: false,
    mask_all_element_attributes: false,
    capture_performance: { web_vitals: true, network_timing: true },
    rageclick: true,
    before_send: stampSurface("site", "by-url"),
  };
}
