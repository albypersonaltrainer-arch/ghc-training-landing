import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

const ecosystemSource = z.enum(["ghcacademy", "ghcnutrition"]).nullable().optional();
const sessionId = z.string().uuid();
const pagePath = z.string().min(1).max(200).refine((value) => value.startsWith("/"));

const funnelStartSource = z.enum(["header", "hero", "madrid", "online", "footer", "landing"]);
const contactSource = z.enum(["quick_path", "programs", "final_cta", "landing"]);
const plan = z.enum(["Valoración GHC", "Plan GHC", "Programa GHC"]);
const modality = z.enum(["Online", "Madrid"]);
const checkoutValue = z.union([
  z.literal(75),
  z.literal(120),
  z.literal(220),
  z.literal(360),
  z.literal(580),
  z.literal(960),
]);

const common = {
  sessionId,
  pagePath,
  ecosystemSource,
};

const eventSchema = z.discriminatedUnion("eventName", [
  z.object({
    ...common,
    eventName: z.literal("funnel_start"),
    data: z.object({ source: funnelStartSource }).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("quick_path_start"),
    data: z.object({}).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("quick_path_step"),
    data: z.object({ step: z.number().int().min(1).max(3) }).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("quick_path_complete"),
    data: z.object({ steps: z.literal(3) }).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("whatsapp_click"),
    data: z.object({ source: contactSource }).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("email_click"),
    data: z.object({ source: contactSource }).strict(),
  }).strict(),
  z.object({
    ...common,
    eventName: z.literal("checkout_click"),
    data: z.object({
      source: z.literal("programs"),
      plan,
      modality,
      currency: z.literal("EUR"),
      value: checkoutValue,
    }).strict(),
  }).strict(),
]);

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const hostname = new URL(origin).hostname;
    return (
      hostname === "ghctraining.com" ||
      hostname === "www.ghctraining.com" ||
      hostname === "ghc-training-landing.vercel.app" ||
      (hostname.startsWith("ghc-training-landing-") && hostname.endsWith(".vercel.app")) ||
      hostname === "localhost"
    );
  } catch {
    return false;
  }
}

export async function GET() {
  const healthSession = "00000000-0000-4000-8000-000000000001";

  try {
    const supabase = getSupabaseAdmin();
    const { error: insertError } = await supabase.from("ghc_training_funnel_events").insert({
      session_id: healthSession,
      event_name: "funnel_start",
      page_path: "/__analytics_health",
      ecosystem_source: null,
      event_source: "healthcheck",
      properties: { temporary: true },
    });

    if (insertError) {
      return NextResponse.json({ ok: false, stage: "insert" }, { status: 500 });
    }

    const { error: deleteError } = await supabase
      .from("ghc_training_funnel_events")
      .delete()
      .eq("session_id", healthSession)
      .eq("page_path", "/__analytics_health");

    if (deleteError) {
      return NextResponse.json({ ok: false, stage: "cleanup" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, storage: "supabase" });
  } catch {
    return NextResponse.json({ ok: false, stage: "connection" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 4096) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  try {
    const event = eventSchema.parse(await request.json());
    const { source, ...properties } = "source" in event.data ? event.data : { ...event.data, source: undefined };

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("ghc_training_funnel_events").insert({
      session_id: event.sessionId,
      event_name: event.eventName,
      page_path: event.pagePath,
      ecosystem_source: event.ecosystemSource ?? null,
      event_source: source ?? null,
      properties,
    });

    if (error) {
      console.error("GHC funnel analytics insert error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 202 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    console.error("GHC funnel analytics request error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
