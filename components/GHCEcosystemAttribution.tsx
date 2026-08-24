'use client';

import { Analytics } from '@vercel/analytics/next';
import { useEffect } from 'react';
import FunnelAnalytics from '@/components/FunnelAnalytics';

const STORAGE_KEY = 'ghc_training_ecosystem_source';
const CAMPAIGN = 'ghc_ecosystem';
const MEDIUM = 'ecosystem';

const SOURCE_LABELS = {
  ghcacademy: 'GHC Academy',
  ghcnutrition: 'GHC Nutrition',
} as const;

type EcosystemSource = keyof typeof SOURCE_LABELS;

function isSource(value: string | null): value is EcosystemSource {
  return Boolean(value && value in SOURCE_LABELS);
}

function resolveSource() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');

  if (
    isSource(source) &&
    params.get('utm_medium') === MEDIUM &&
    params.get('utm_campaign') === CAMPAIGN
  ) {
    window.sessionStorage.setItem(STORAGE_KEY, source);
    return source;
  }

  const stored = window.sessionStorage.getItem(STORAGE_KEY);
  return isSource(stored) ? stored : null;
}

function appendOriginToWhatsApp(anchor: HTMLAnchorElement, source: EcosystemSource) {
  try {
    const url = new URL(anchor.href);
    if (url.hostname !== 'wa.me') return false;

    const marker = `Origen: ${SOURCE_LABELS[source]}`;
    const currentText = url.searchParams.get('text') || '';
    if (!currentText.includes(marker)) {
      url.searchParams.set('text', `${currentText}\n\n${marker}`.trim());
      anchor.href = url.toString();
    }
    anchor.dataset.ghcEcosystemSource = source;
    return true;
  } catch {
    return false;
  }
}

function appendOriginToEmail(anchor: HTMLAnchorElement, source: EcosystemSource) {
  const rawHref = anchor.getAttribute('href') || '';
  if (!rawHref.startsWith('mailto:')) return false;

  try {
    const url = new URL(rawHref);
    const marker = `Origen: ${SOURCE_LABELS[source]}`;
    const currentBody = url.searchParams.get('body') || '';
    if (!currentBody.includes(marker)) {
      url.searchParams.set('body', `${currentBody}\n\n${marker}`.trim());
      anchor.href = url.toString();
    }
    anchor.dataset.ghcEcosystemSource = source;
    return true;
  } catch {
    return false;
  }
}

function carrySourceToInternalLink(anchor: HTMLAnchorElement, source: EcosystemSource) {
  const rawHref = anchor.getAttribute('href') || '';
  if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:')) return;

  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin) return;

    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', MEDIUM);
    url.searchParams.set('utm_campaign', CAMPAIGN);
    anchor.href = `${url.pathname}${url.search}${url.hash}`;
    anchor.dataset.ghcEcosystemSource = source;
  } catch {
    // Leave malformed or unsupported links untouched.
  }
}

function applyAttribution(source: EcosystemSource) {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
    if (appendOriginToWhatsApp(anchor, source)) return;
    if (appendOriginToEmail(anchor, source)) return;
    carrySourceToInternalLink(anchor, source);
  });
}

export default function GHCEcosystemAttribution() {
  useEffect(() => {
    const source = resolveSource();
    if (!source) return;

    applyAttribution(source);

    const observer = new MutationObserver(() => applyAttribution(source));
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FunnelAnalytics />
      <Analytics />
    </>
  );
}
