import type { MetadataRoute } from "next";

const siteUrl = "https://ghctraining.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/entrenador-personal-madrid`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/entrenador-personal-online`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/metodo-ghc`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
