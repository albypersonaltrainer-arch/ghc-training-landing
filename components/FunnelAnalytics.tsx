"use client";

import { useEffect } from "react";
import { trackFunnelEvent } from "@/lib/funnelAnalytics";

function textOf(element: Element | null | undefined) {
  return element?.textContent?.replace(/\s+/g, " ").trim() || "";
}

function startSource(anchor: HTMLAnchorElement) {
  if (anchor.closest(".ghc26-header")) return "header";
  if (anchor.closest(".ghc26-hero")) return "hero";
  if (anchor.closest(".ghc26-modality-madrid")) return "madrid";
  if (anchor.closest(".ghc26-modality-online")) return "online";
  if (anchor.closest(".ghc26-footer")) return "footer";
  return "landing";
}

function contactSource(anchor: HTMLAnchorElement) {
  if (anchor.closest(".ghc-path-actions")) return "quick_path";
  if (anchor.closest(".ghc26-program-note")) return "programs";
  if (anchor.closest(".ghc26-final-actions")) return "final_cta";
  return "landing";
}

export default function FunnelAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") || "";

      if (href === "#empezar") {
        trackFunnelEvent("funnel_start", {
          source: startSource(anchor),
        });
        return;
      }

      if (href.startsWith("https://wa.me/")) {
        trackFunnelEvent(
          "whatsapp_click",
          { source: contactSource(anchor) },
          "Contact"
        );
        return;
      }

      if (href.startsWith("mailto:")) {
        trackFunnelEvent(
          "email_click",
          { source: contactSource(anchor) },
          "Contact"
        );
        return;
      }

      if (href.startsWith("https://pay.sumup.com/")) {
        const card = anchor.closest(".ghc26-program-grid article");
        const plan = textOf(card?.querySelector("h3"));
        const modality = textOf(anchor.querySelector("small"));
        const priceText = textOf(anchor.querySelector("strong"));
        const price = Number(priceText.replace(/[^0-9.,]/g, "").replace(",", "."));

        const data: Record<string, string | number> = {
          source: "programs",
          plan: plan || "unknown",
          modality: modality || "unknown",
          currency: "EUR",
        };

        if (Number.isFinite(price)) {
          data.value = price;
        }

        trackFunnelEvent("checkout_click", data, "InitiateCheckout");
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
