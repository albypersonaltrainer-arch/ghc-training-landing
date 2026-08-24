"use client";

import { track } from "@vercel/analytics";

type FunnelValue = string | number | boolean;
type FunnelData = Record<string, FunnelValue>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackFunnelEvent(
  name: string,
  data: FunnelData = {},
  metaStandardEvent?: string
) {
  try {
    track(name, data);
  } catch {
    // Analytics must never interrupt the conversion path.
  }

  if (typeof window === "undefined" || !window.fbq) {
    return;
  }

  try {
    window.fbq("trackCustom", name, data);

    if (metaStandardEvent) {
      window.fbq("track", metaStandardEvent, data);
    }
  } catch {
    // Meta Pixel must never interrupt the conversion path.
  }
}
