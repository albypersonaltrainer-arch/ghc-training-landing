import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Tu ebook | GHC Academy",
  robots: { index: false, follow: false }
};

export default async function Gracias({ searchParams }: { searchParams: { session_id?: string } }) {
  let paid = false;
  const sessionId = searchParams?.session_id;
  if (sessionId && /^cs_(test|live)_/.test(sessionId) && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      paid = session.payment_status === "paid" && session.metadata?.product === "lipedema-ebook";
    } catch (error) {
      console.error("Lipedema payment verification failed", error);
    }
  }
  return (
    <main style={{ minHeight: "100vh", background: "#f7f2ed", color: "#222124", padding: "10vh 20px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ margin: "auto", maxWidth: 650, padding: "58px 37px", background: "#fffaf9", borderTop: "6px solid #c96b83" }}>
        <span style={{ fontSize: 12, letterSpacing: 3, fontWeight: 900, color: "#a94c65" }}>GHC ACADEMY · LIPEDEMA</span>
        {paid ? <>
          <h1 style={{ fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.1, marginTop: 25 }}>Tu compra está confirmada.</h1>
          <p>Gracias por confiar en GHC Academy. Ya puedes acceder a tu ebook «Lipedema: que no decida por ti».</p>
          <a href={`/api/lipedema/descargar?session_id=${encodeURIComponent(sessionId || "")}`}
            style={{ display: "inline-block", background: "#222124", color: "white", padding: "18px 25px", fontWeight: 800, marginTop: 15 }}>DESCARGAR MI EBOOK ↗</a>
          <p style={{ fontSize: 12, color: "#756b6c", marginTop: 25 }}>Conserva el enlace de confirmación de Stripe. Si tienes problemas de acceso, contacta con info@ghctraining.com.</p>
        </> : <>
          <h1 style={{ fontSize: "clamp(32px,5vw,48px)", marginTop: 25 }}>Todavía no podemos confirmar tu pago.</h1>
          <p>Si acabas de pagar, espera unos momentos y recarga esta página. Si el problema continúa, escríbenos a info@ghctraining.com.</p>
          <Link href="/lipedema" style={{ textDecoration: "underline", fontWeight: 800 }}>Volver al ebook</Link>
        </>}
      </section>
    </main>
  );
}
