import { createPixCharge } from "@/src/lib/paymentProvider";
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type PixChargeBody = {
  amount?: number;
  payerName?: string;
  payerDocument?: string;
  externalId?: string;
  description?: string;
};

const securityHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-StickPay-Key",
  "X-RateLimit-Limit": "60",
};

export function OPTIONS() {
  return NextResponse.json({}, { headers: securityHeaders });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as PixChargeBody;

  if (!body.amount || body.amount <= 0 || !body.payerName || !body.payerDocument) {
    return NextResponse.json({ error: "pix_charge_data_required" }, { status: 400, headers: securityHeaders });
  }

  const charge = await createPixCharge({
    amount: body.amount,
    payerName: body.payerName,
    payerDocument: body.payerDocument,
    transactionId: body.externalId ?? `sp_${crypto.randomUUID()}`,
    description: body.description ?? "Cobrança Pix StickPay",
  });

  return NextResponse.json(charge, { status: 201, headers: securityHeaders });
}
