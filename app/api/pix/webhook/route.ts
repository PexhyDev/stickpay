import { normalizePaymentWebhook } from "@/src/lib/paymentProvider";
import type { PaymentWebhookPayload } from "@/src/lib/paymentProvider";
import { NextRequest, NextResponse } from "next/server";

const securityHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-StickPay-Signature",
};

export function OPTIONS() {
  return NextResponse.json({}, { headers: securityHeaders });
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as PaymentWebhookPayload;
  const normalized = normalizePaymentWebhook(payload);

  console.log("[StickPay payment webhook]", normalized);

  return NextResponse.json({ received: true, normalized }, { headers: securityHeaders });
}
