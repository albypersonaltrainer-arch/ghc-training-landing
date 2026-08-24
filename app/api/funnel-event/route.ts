import { NextResponse } from "next/server";

const ANALYTICS_ENDPOINT =
  "https://fqjtmpsdrocejlgiogss.supabase.co/functions/v1/ghc-training-funnel-event";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_V3BJykjVQ_et162tsMwV0A_OOCciXMR";
const HEALTH_SESSION_ID = "00000000-0000-4000-8000-000000000002";

export async function GET() {
  try {
    const response = await fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "content-type": "application/json",
        origin: "https://www.ghctraining.com",
      },
      body: JSON.stringify({
        sessionId: HEALTH_SESSION_ID,
        eventName: "quick_path_start",
        pagePath: "/__analytics_health",
        ecosystemSource: null,
        data: {},
      }),
      cache: "no-store",
    });

    const body = await response.json().catch(() => ({ ok: false }));

    return NextResponse.json(
      {
        ok: response.ok && body?.ok === true,
        storage: "supabase-edge",
        upstreamStatus: response.status,
      },
      { status: response.ok && body?.ok === true ? 200 : 502 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, storage: "supabase-edge", upstreamStatus: 0 },
      { status: 502 }
    );
  }
}
