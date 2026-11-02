import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ tier: z.enum(["premium", "family", "student"]) });

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  // Stripe test mode checkout session would be created here.
  return NextResponse.json({ url: "https://checkout.stripe.com/test", tier: parsed.data.tier });
}
