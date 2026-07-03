import { normalizeMisticPayWebhook } from "@/src/lib/misticpay";
import type { MisticPayWebhookPayload } from "@/src/lib/misticpay";
import { NextRequest, NextResponse } from "next/server";

const securityHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-MisticPay-Signature",
};

export function OPTIONS() {
  return NextResponse.json({}, { headers: securityHeaders });
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as MisticPayWebhookPayload;
  const normalized = normalizeMisticPayWebhook(payload);

  console.log("[StickPay MisticPay webhook]", normalized);

  return NextResponse.json({ received: true, normalized }, { headers: securityHeaders });
}
