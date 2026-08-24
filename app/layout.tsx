import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { Suspense } from "react";
import MetaPixel from "@/components/MetaPixel";
import GHCEcosystemLinks from "@/components/GHCEcosystemLinks";
import GHCEcosystemAttribution from "@/components/GHCEcosystemAttribution";
import { ghcTraining } from "@/config/ghcTraining";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const siteUrl = ghcTraining.identity.domain;
const contactEmail = ghcTraining.contact.email;
const contactPhone = `+${ghcTraining.contact.phoneE164}`;

const madridServiceAreas = ghcTraining.serviceAreas.map((name) => ({
  "@type": "City",
  name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Comunidad de Madrid",
  },
}));

const coreOffers = ghcTraining.services.flatMap((service) => [
  {
    name: service.online.schemaName,
    price: String(service.online.price),
    description: service.description,
  },
  {
    name: service.madrid.schemaName,
    price: String(service.madrid.price),
    description: service.description,
  },
]);

const specialistServices = ghcTraining.specialties.map((specialty) => specialty.schemaName);
const knowsAbout = ghcTraining.knowledgeAreas;

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
    siteName: ghcTraining.identity.name,
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
      name: ghcTraining.identity.name,
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
      name: ghcTraining.identity.name,
      alternateName: `${ghcTraining.identity.name} · ${ghcTraining.identity.slogan}`,
      url: siteUrl,
      logo: `${siteUrl}/alby-ghc-training.png`,
      image: `${siteUrl}/alby-ghc-training.png`,
      description:
        "Servicio de entrenamiento personal, valoración integral, planificación, fuerza, movilidad, nutrición estratégica y seguimiento profesional en Madrid y online.",
      slogan: ghcTraining.identity.slogan,
      foundingDate: ghcTraining.identity.founded,
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
      knowsAbout,
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
      name: ghcTraining.identity.founder,
      url: `${siteUrl}/sobre-ghc-training`,
      mainEntityOfPage: `${siteUrl}/sobre-ghc-training`,
      image: `${siteUrl}/alby-ghc-training.png`,
      jobTitle: "Entrenador personal y director de GHC Training",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Entrenador personal y director de GHC Training con más de 30 años de experiencia en entrenamiento, nutrición estratégica, fuerza, movilidad y salud activa.",
      knowsAbout: knowsAbout.filter(
        (item) =>
          item !== "Valoración de la condición física" &&
          item !== "Composición corporal" &&
          item !== "Nutrición estratégica"
      ),
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
        <GHCEcosystemAttribution />
        {children}
        <GHCEcosystemLinks />
      </body>
    </html>
  );
}
