import { NextResponse } from "next/server";
import { z } from "zod";
import { youtubeProvider } from "@/server/providers/youtube";
import { spotifyProvider } from "@/server/providers/spotify";
import { jamendoProvider } from "@/server/providers/jamendo";
import type { ProviderId } from "@/types/track";

const querySchema = z.object({
  q: z.string().trim().min(2).max(100),
  providers: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(25).default(10),
});

const providersMap = { youtube: youtubeProvider, spotify: spotifyProvider, jamendo: jamendoProvider };

export async function GET(req: Request) {
  const url = new URL(req.url);
  const parsed = querySchema.safeParse({
    q: url.searchParams.get("q"),
    providers: url.searchParams.get("providers") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  });
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const requested = (parsed.data.providers?.split(",") ?? Object.keys(providersMap)) as ProviderId[];
  const valid = requested.filter((p): p is ProviderId => p in providersMap);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  const settled = await Promise.allSettled(
    valid.map(async (p) => {
      const res = await providersMap[p].search(parsed.data.q, { limit: parsed.data.limit, signal: controller.signal });
      return { provider: p, results: res };
    })
  );
  clearTimeout(timeout);

  const results = settled.flatMap((s) => (s.status === "fulfilled" ? s.value.results : []));
  const errors = settled
    .map((s, i) => (s.status === "rejected" ? { provider: valid[i], code: "unavailable" } : null))
    .filter(Boolean);

  return NextResponse.json({ results, errors });
}
