import { NextRequest, NextResponse } from "next/server";

type WebhookBody = {
  event?: string;
  transactionId?: string;
  status?: string;
  occurredAt?: string;
};

const securityHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-StickPay-Signature",
};

export function OPTIONS() {
  return NextResponse.json({}, { headers: securityHeaders });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as WebhookBody;
  console.log("[StickPay webhook mock]", {
    event: body.event,
    transactionId: body.transactionId,
    status: body.status,
    occurredAt: body.occurredAt,
  });

  return NextResponse.json({ received: true }, { headers: securityHeaders });
}
