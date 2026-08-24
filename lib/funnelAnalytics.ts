"use client";

type FunnelValue = string | number | boolean;
type FunnelData = Record<string, FunnelValue>;
type EcosystemSource = "ghcacademy" | "ghcnutrition";

const SESSION_KEY = "ghc_training_funnel_session";
const ECOSYSTEM_KEY = "ghc_training_ecosystem_source";
const ANALYTICS_ENDPOINT = "https://fqjtmpsdrocejlgiogss.supabase.co/functions/v1/ghc-training-funnel-event";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_V3BJykjVQ_et162tsMwV0A_OOCciXMR";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fallbackUuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function getSessionId() {
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;

    const sessionId = typeof crypto.randomUUID === "function" ? crypto.randomUUID() : fallbackUuid();
    window.sessionStorage.setItem(SESSION_KEY, sessionId);
    return sessionId;
  } catch {
    return typeof crypto.randomUUID === "function" ? crypto.randomUUID() : fallbackUuid();
  }
}

function getEcosystemSource(): EcosystemSource | null {
  try {
    const source = window.sessionStorage.getItem(ECOSYSTEM_KEY);
    return source === "ghcacademy" || source === "ghcnutrition" ? source : null;
  } catch {
    return null;
  }
}

function sendFirstPartyEvent(name: string, data: FunnelData) {
  const payload = JSON.stringify({
    sessionId: getSessionId(),
    eventName: name,
    pagePath: window.location.pathname,
    ecosystemSource: getEcosystemSource(),
    data,
  });

  void fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "content-type": "application/json",
    },
    body: payload,
    keepalive: true,
    credentials: "omit",
  }).catch(() => {
    // Analytics must never interrupt the conversion path.
  });
}

export function trackFunnelEvent(
  name: string,
  data: FunnelData = {},
  metaStandardEvent?: string
) {
  if (typeof window === "undefined") return;

  sendFirstPartyEvent(name, data);

  if (!window.fbq) return;

  try {
    window.fbq("trackCustom", name, data);

    if (metaStandardEvent) {
      window.fbq("track", metaStandardEvent, data);
    }
  } catch {
    // Meta Pixel is optional and must never interrupt the conversion path.
  }
}
