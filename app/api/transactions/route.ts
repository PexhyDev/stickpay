import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type TransactionBody = {
  amount?: number;
  currency?: string;
  paymentToken?: string;
  customer?: {
    email?: string;
  };
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
  const body = (await request.json()) as TransactionBody;

  if (!body.amount || !body.currency || !body.paymentToken) {
    return NextResponse.json({ error: "transaction_data_required" }, { status: 400, headers: securityHeaders });
  }

  const status = body.amount > 500_000 ? "review" : "approved";

  return NextResponse.json(
    {
      id: `txn_${crypto.randomUUID().replaceAll("-", "")}`,
      amount: body.amount,
      currency: body.currency,
      status,
      authorizationCode: status === "approved" ? crypto.randomInt(100000, 999999).toString() : null,
      customer: body.customer ?? null,
      createdAt: new Date().toISOString(),
    },
    { status: 201, headers: securityHeaders },
  );
}
