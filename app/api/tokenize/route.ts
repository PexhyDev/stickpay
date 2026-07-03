import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type TokenizeBody = {
  number?: string;
  expMonth?: string;
  expYear?: string;
  cvv?: string;
  holderName?: string;
};

const securityHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "X-RateLimit-Limit": "60",
};

export function OPTIONS() {
  return NextResponse.json({}, { headers: securityHeaders });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as TokenizeBody;

  if (!body.number || !body.expMonth || !body.expYear || !body.cvv) {
    return NextResponse.json({ error: "card_data_required" }, { status: 400, headers: securityHeaders });
  }

  const last4 = body.number.slice(-4);
  const token = `tok_${crypto.randomUUID().replaceAll("-", "")}`;

  return NextResponse.json(
    {
      token,
      brand: body.number.startsWith("4") ? "visa" : "unknown",
      last4,
      holderName: body.holderName ?? null,
      expiresAt: new Date(Date.now() + 1000 * 60 * 15).toISOString(),
    },
    { status: 201, headers: securityHeaders },
  );
}
