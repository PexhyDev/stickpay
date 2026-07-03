import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type LoginBody = {
  email?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as LoginBody;

  if (!body.email || !body.email.includes("@")) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 400 });
  }

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set("stickpay_session", `demo_${crypto.randomUUID()}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
