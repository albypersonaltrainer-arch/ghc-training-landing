import { NextResponse } from "next/server";

const ANALYTICS_ENDPOINT =
  "https://fqjtmpsdrocejlgiogss.supabase.co/functions/v1/ghc-training-funnel-event";

export async function GET() {
  try {
    const response = await fetch(ANALYTICS_ENDPOINT, {
      method: "OPTIONS",
      headers: {
        origin: "https://www.ghctraining.com",
        "access-control-request-method": "POST",
        "access-control-request-headers": "apikey,content-type",
      },
      cache: "no-store",
    });

    const allowOrigin = response.headers.get("access-control-allow-origin");
    const allowMethods = response.headers.get("access-control-allow-methods");
    const allowHeaders = response.headers.get("access-control-allow-headers");

    const ok =
      response.status === 204 &&
      allowOrigin === "https://www.ghctraining.com" &&
      Boolean(allowMethods?.includes("POST")) &&
      Boolean(allowHeaders?.includes("apikey")) &&
      Boolean(allowHeaders?.includes("content-type"));

    return NextResponse.json(
      {
        ok,
        upstreamStatus: response.status,
        allowOrigin,
        allowMethods,
        allowHeaders,
      },
      { status: ok ? 200 : 502 }
    );
  } catch {
    return NextResponse.json({ ok: false, upstreamStatus: 0 }, { status: 502 });
  }
}
