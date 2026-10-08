import type { Metadata } from "next";
import LipedemaClient from "./LipedemaClient";

export const metadata: Metadata = {
  title: { absolute: "Lipedema: que no decida por ti | Ebook GHC Academy" },
  description: "Una guía práctica para entender cómo el entrenamiento, el movimiento y la alimentación pueden formar parte de tu cuidado con lipedema.",
  alternates: { canonical: "https://www.ghctraining.com/lipedema" },
  openGraph: {
    title: "Lipedema: que no decida por ti | GHC Academy",
    description: "Aprende a moverte, entrenar y alimentarte con más criterio. Guía práctica de GHC Academy.",
    url: "https://www.ghctraining.com/lipedema",
    siteName: "GHC Academy",
    locale: "es_ES",
    type: "website"
  },
  robots: { index: false, follow: false }
};

export default function LipedemaLandingPage() {
  const checkoutReady = Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_LIPEDEMA_PRICE_ID && process.env.LIPEDEMA_SUPABASE_STORAGE_PATH && process.env.SUPABASE_SERVICE_ROLE_KEY);
  return (
    <LipedemaClient
      checkoutReady={checkoutReady}
      priceLabel={"33 €"}
      introductionVideoUrl={process.env.NEXT_PUBLIC_LIPEDEMA_PRESENTACION_VIDEO_URL || ""}
    />
  );
}
