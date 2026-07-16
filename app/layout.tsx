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

const siteUrl = "https://www.ghctraining.com";
const contactEmail = "info@ghctraining.com";
const contactPhone = "+34628798859";

const madridServiceAreas = [
  "Madrid",
  "Getafe",
  "Leganés",
  "Alcorcón",
  "Móstoles",
  "Alcobendas",
  "Majadahonda",
  "Boadilla del Monte",
  "Las Rozas de Madrid",
  "Pozuelo de Alarcón",
].map((name) => ({
  "@type": "City",
  name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Comunidad de Madrid",
  },
}));

const coreOffers = [
  {
    name: "Valoración GHC online",
    price: "75",
    description:
      "Sesión online de aproximadamente 60 minutos para conocer objetivos, historial, hábitos, experiencia, lesiones o limitaciones y establecer prioridades antes de diseñar el programa.",
  },
  {
    name: "Valoración GHC presencial en Madrid",
    price: "120",
    description:
      "Valoración presencial en Madrid, en una ubicación acordada previamente, para analizar objetivos, historial, movilidad, fuerza, condición física y necesidades.",
  },
  {
    name: "Plan GHC online de 4 semanas",
    price: "220",
    description:
      "Programa online personalizado de cuatro semanas con valoración inicial, planificación, orientación nutricional, seguimiento y ajustes.",
  },
  {
    name: "Plan GHC presencial Madrid de 4 semanas",
    price: "360",
    description:
      "Programa personalizado de cuatro semanas con valoración presencial en Madrid, planificación, orientación nutricional, seguimiento y revisión de movimientos concretos.",
  },
  {
    name: "Programa GHC online de 12 semanas",
    price: "580",
    description:
      "Proceso online personalizado de doce semanas con valoración inicial, tres bloques progresivos, seguimiento semanal y revisiones en las semanas 4, 8 y 12.",
  },
  {
    name: "Programa GHC presencial Madrid de 12 semanas",
    price: "960",
    description:
      "Programa personalizado de doce semanas con valoración y revisiones presenciales en Madrid, planificación progresiva, seguimiento semanal y ajustes.",
  },
];

const specialistServices = [
  "Entrenamiento para pérdida de grasa",
  "Entrenamiento adaptado para fibromialgia",
  "Entrenamiento adaptado para lipedema",
  "Entrenamiento para fuerza y masa muscular",
  "Movilidad y recuperación de la condición física",
  "Entrenamiento adaptado para dolor crónico",
  "Entrenamiento para envejecimiento activo y autonomía",
  "Entrenamiento online personalizado",
  "Entrenamiento personal en Madrid",
  "Entrenamiento adaptado para linfedema",
  "Valoración integral de la condición física",
];

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
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "GHC Training",
      alternateName: "GHC Training · Health Through Strength",
      url: siteUrl,
      logo: `${siteUrl}/alby-ghc-training.png`,
      image: `${siteUrl}/alby-ghc-training.png`,
      description:
        "Servicio de entrenamiento personal, valoración integral, planificación, fuerza, movilidad, nutrición estratégica y seguimiento profesional en Madrid y online.",
      slogan: "Health Through Strength",
      foundingDate: "2016",
      email: contactEmail,
      telephone: contactPhone,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: contactPhone,
        email: contactEmail,
        availableLanguage: ["es"],
        areaServed: [
          ...madridServiceAreas,
          { "@type": "Country", name: "España" },
          { "@type": "Place", name: "América Latina" },
        ],
      },
      founder: {
        "@id": `${siteUrl}/#alby-aguiar`,
      },
      areaServed: [
        ...madridServiceAreas,
        { "@type": "Country", name: "España" },
        { "@type": "Place", name: "América Latina" },
      ],
      knowsAbout: [
        "Entrenamiento personal",
        "Valoración de la condición física",
        "Entrenamiento de fuerza",
        "Movilidad",
        "Pérdida de grasa",
        "Composición corporal",
        "Fibromialgia",
        "Lipedema",
        "Linfedema",
        "Dolor crónico",
        "Envejecimiento activo",
        "Nutrición estratégica",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de GHC Training",
        itemListElement: [
          ...coreOffers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            price: offer.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: siteUrl,
            itemOffered: {
              "@type": "Service",
              name: offer.name,
              description: offer.description,
              provider: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          })),
          ...specialistServices.map((name) => ({
            "@type": "Offer",
            name,
            url: siteUrl,
            itemOffered: {
              "@type": "Service",
              name,
              provider: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          })),
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#alby-aguiar`,
      name: "Alby Aguiar",
      url: `${siteUrl}/sobre-ghc-training`,
      mainEntityOfPage: `${siteUrl}/sobre-ghc-training`,
      image: `${siteUrl}/alby-ghc-training.png`,
      jobTitle: "Entrenador personal y director de GHC Training",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Entrenador personal y director de GHC Training con más de 30 años de experiencia en entrenamiento, nutrición estratégica, fuerza, movilidad y salud activa.",
      knowsAbout: [
        "Entrenamiento personal",
        "Entrenamiento de fuerza",
        "Movilidad",
        "Pérdida de grasa",
        "Fibromialgia",
        "Lipedema",
        "Linfedema",
        "Dolor crónico",
        "Envejecimiento activo",
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Entrenamiento personal, nutrición estratégica y salud activa",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      serviceType: "Entrenamiento personal",
      areaServed: [
        ...madridServiceAreas,
        { "@type": "Country", name: "España" },
        { "@type": "Place", name: "América Latina" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: siteUrl,
        servicePhone: {
          "@type": "ContactPoint",
          telephone: contactPhone,
          email: contactEmail,
          availableLanguage: ["es"],
        },
      },
      offers: coreOffers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: siteUrl,
      })),
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
