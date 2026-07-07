import type { Metadata } from "next";
import { GhcSeoLandingPage } from "@/components/GhcSeoLandingPage";
import { absoluteUrl, getSeoPage, siteConfig } from "@/lib/seoPages";

const page = getSeoPage("entrenamiento-lipedema")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/entrenamiento-lipedema",
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: absoluteUrl("/entrenamiento-lipedema"),
    siteName: siteConfig.name,
    images: ["/alby-ghc-training.png"],
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return <GhcSeoLandingPage page={page} />;
}
