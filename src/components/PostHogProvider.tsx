"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { PROFILE } from "@/data/profile";

/**
 * Initializes PostHog client-side analytics when a project key is configured.
 * Automatically captures pageviews (including UTM parameters like ?utm_source=qr)
 * and pageleave events on static GitHub Pages exports.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = PROFILE.posthog.key;
    if (!key || posthog.__loaded) return;

    posthog.init(key, {
      api_host: PROFILE.posthog.host || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
