import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { Suspense } from "react";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const siteUrl = "https://ghctraining.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GHC Training | Entrenamiento personal en Madrid y online",
    template: "%s | GHC Training",
  },
  description:
    "Entrenamiento personal, nutrición estratégica y salud activa con Alby Aguiar. Valoración inicial, programas online y presencial privado en Madrid para fuerza, recomposición corporal, lesiones y patologías.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "GHC Training | Entrenamiento personal en Madrid y online",
    description:
      "Entrenamiento personal, nutrición estratégica y salud activa con Alby Aguiar. Presencial privado en Madrid y online para España y América Latina.",
    url: "/",
    siteName: "GHC Training",
    images: [
      {
        url: "/alby-ghc-training.png",
        width: 1200,
        height: 630,
        alt: "Alby Aguiar, entrenador personal de GHC Training",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHC Training | Entrenamiento personal en Madrid y online",
    description:
      "Entrenamiento personal, nutrición estratégica y salud activa con Alby Aguiar. Valoración inicial, fuerza, recomposición corporal y salud activa.",
    images: ["/alby-ghc-training.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "GHC Training",
      inLanguage: "es-ES",
      description:
        "Entrenamiento personal, nutrición estratégica y salud activa presencial en Madrid y online.",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "GHC Training",
      url: siteUrl,
      logo: `${siteUrl}/alby-ghc-training.png`,
      image: `${siteUrl}/alby-ghc-training.png`,
      slogan: "Health Through Strength",
      founder: {
        "@id": `${siteUrl}/#alby-aguiar`,
      },
      areaServed: [
        { "@type": "Place", name: "Madrid" },
        { "@type": "Country", name: "España" },
        { "@type": "Place", name: "América Latina" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#alby-aguiar`,
      name: "Alby Aguiar",
      url: siteUrl,
      image: `${siteUrl}/alby-ghc-training.png`,
      jobTitle: "Entrenador personal",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Entrenador personal de GHC Training con más de 30 años de experiencia en entrenamiento, nutrición estratégica, fuerza, movilidad y salud activa.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Entrenamiento personal, nutrición estratégica y salud activa",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      serviceType: "Entrenamiento personal",
      areaServed: ["Madrid", "España", "América Latina"],
      offers: [
        {
          "@type": "Offer",
          name: "Valoración GHC online",
          price: "75",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Valoración GHC presencial Madrid",
          price: "120",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Plan GHC online 4 semanas",
          price: "220",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Programa GHC online 12 semanas",
          price: "580",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="es" className={`${manrope.variable} ${notoSerif.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>
          <MetaPixel pixelId={metaPixelId} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
