import type { MusicProvider, Track } from "@/types/track";

export const youtubeProvider: MusicProvider = {
  id: "youtube",
  async search(query, opts) {
    // YouTube Data API v3 search.list; server-side only. Stub returns [].
    if (query.trim().length < 2) return [];
    const results: Track[] = [];
    return results.slice(0, opts.limit);
  },
};
