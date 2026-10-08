import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const schema = z.object({
  attribution: z.record(z.string().max(200)).optional()
});

const ALLOWED = ["perfil", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

export async function POST(request: Request) {
  const priceId = process.env.STRIPE_LIPEDEMA_PRICE_ID;
  const ebookPath = process.env.LIPEDEMA_SUPABASE_STORAGE_PATH;

  // Never accept money until the actual price and secured ebook delivery are both configured.
  if (!priceId || !ebookPath || !process.env.STRIPE_SECRET_KEY || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "La compra todavía no está disponible." }, { status: 503 });
  }

  let parsed;
  try {
    parsed = schema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ghctraining.com";
  const attribution: Record<string, string> = {};
  for (const key of ALLOWED) {
    const value = parsed.attribution?.[key];
    if (value) attribution[key] = value;
  }

  try {
    const stripe = getStripe();
    const price = await stripe.prices.retrieve(priceId);
    if (!price.active || price.currency.toLowerCase() !== "eur" || price.unit_amount !== 3300 || price.recurring) {
      console.error("Lipedema price configuration mismatch");
      return NextResponse.json({ error: "Precio no configurado correctamente." }, { status: 503 });
    }
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/lipedema/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/lipedema?compra=cancelada`,
      client_reference_id: "ghc-academy-lipedema-ebook",
      metadata: { product: "lipedema-ebook", ...attribution },
      billing_address_collection: "auto",
      allow_promotion_codes: false
    });
    if (!session.url) throw new Error("Missing hosted checkout URL");
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Lipedema checkout failed", error);
    return NextResponse.json({ error: "No podemos iniciar el pago ahora mismo." }, { status: 500 });
  }
}
