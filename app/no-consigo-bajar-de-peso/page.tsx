import type { Metadata } from "next";
import { GhcSeoLandingPage } from "@/components/GhcSeoLandingPage";
import { absoluteUrl, getSeoPage, siteConfig } from "@/lib/seoPages";

const page = getSeoPage("no-consigo-bajar-de-peso")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/no-consigo-bajar-de-peso",
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: absoluteUrl("/no-consigo-bajar-de-peso"),
    siteName: siteConfig.name,
    images: ["/alby-ghc-training.png"],
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return <GhcSeoLandingPage page={page} />;
}
