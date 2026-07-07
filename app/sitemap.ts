import type { MetadataRoute } from "next";
import { absoluteUrl, seoPages, siteConfig } from "@/lib/seoPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoPages.map((page) => ({
      url: absoluteUrl(page.slug),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.slug === "valoracion-inicial" ? 0.95 : 0.8,
    })),
  ];
}
