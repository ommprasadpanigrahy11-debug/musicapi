import { NextResponse } from "next/server";
import { z } from "zod";

const paramsSchema = z.object({ id: z.string().min(1).max(64) });

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const parsed = paramsSchema.safeParse({ id });
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  return NextResponse.json({ trackId: parsed.data.id, lines: [] as { time: number; text: string }[] });
}
