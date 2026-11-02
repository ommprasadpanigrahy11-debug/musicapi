import type { MusicProvider, Track } from "@/types/track";

export const jamendoProvider: MusicProvider = {
  id: "jamendo",
  async search(query, opts) {
    if (query.trim().length < 2) return [];
    const results: Track[] = [];
    return results.slice(0, opts.limit);
  },
};
