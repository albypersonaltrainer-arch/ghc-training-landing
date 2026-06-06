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

export const metadata: Metadata = {
  title:
    "GHC Training | Entrenador personal en Madrid especializado en lesiones, patologías, pérdida de peso y recomposición corporal",
  description:
    "GHC Training de Alby Aguiar ofrece entrenamiento personal a domicilio en Madrid y online para España. Especialista en pérdida de grasa, ganancia muscular, lesiones, fibromialgia, lipedema, linfedema, salud activa y nutrición personalizada.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "GHC Training | Salud a través de la fuerza",
    description:
      "Entrenamiento personal, nutrición estratégica y salud activa con Alby Aguiar. Presencial privado en Madrid y online para España.",
    images: ["/alby-ghc-training.png"],
    type: "website",
  },
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
        <Suspense fallback={null}>
          <MetaPixel pixelId={metaPixelId} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
