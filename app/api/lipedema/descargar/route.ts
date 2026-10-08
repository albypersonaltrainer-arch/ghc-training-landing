import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get("session_id") || "";
  if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) {
    return NextResponse.json({ error: "Enlace no válido." }, { status: 400 });
  }

  const path = process.env.LIPEDEMA_SUPABASE_STORAGE_PATH;
  const bucket = process.env.LIPEDEMA_SUPABASE_STORAGE_BUCKET || "ghc-ebooks";
  if (!path || !process.env.STRIPE_SECRET_KEY || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "La descarga aún no está configurada." }, { status: 503 });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    if (session.metadata?.product !== "lipedema-ebook" || session.payment_status !== "paid") {
      return NextResponse.json({ error: "Pago no verificado." }, { status: 403 });
    }
    const { data, error } = await getSupabaseAdmin().storage.from(bucket).createSignedUrl(path, 180, {
      download: "GHC_Lipedema_Que_No_Decida_Por_Ti.pdf"
    });
    if (error || !data?.signedUrl) {
      console.error("Secure ebook delivery error", error);
      return NextResponse.json({ error: "No hemos podido generar la descarga. Contacta con info@ghctraining.com." }, { status: 503 });
    }
    return NextResponse.redirect(data.signedUrl, { status: 302, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Lipedema ebook verification error", error);
    return NextResponse.json({ error: "No se ha podido verificar el pago." }, { status: 500 });
  }
}
