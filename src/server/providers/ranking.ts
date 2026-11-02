import type { Track } from "@/types/track";

function norm(s: string): string { return s.toLowerCase().replace(/[^a-z0-9]/g, ""); }

export function dedupeTracks(tracks: Track[]): Track[] {
  const seen = new Map<string, Track>();
  const pref: Record<Track["provider"], number> = { spotify: 0, jamendo: 1, youtube: 2 };
  for (const t of tracks) {
    const key = `${norm(t.title)}|${norm(t.artists.join(","))}|${t.durationMs ?? 0}`;
    const existing = seen.get(key);
    if (!existing || pref[t.provider] < pref[existing.provider]) seen.set(key, t);
  }
  return [...seen.values()];
}

export function rankTracks(tracks: Track[], query: string): Track[] {
  const nq = norm(query);
  return [...tracks].sort((a, b) => {
    const aExact = norm(a.title) === nq || norm(a.artists.join("")) === nq ? 0 : 1;
    const bExact = norm(b.title) === nq || norm(b.artists.join("")) === nq ? 0 : 1;
    if (aExact !== bExact) return aExact - bExact;
    return 0;
  });
}
