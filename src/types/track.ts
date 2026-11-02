export type ProviderId = "youtube" | "spotify" | "jamendo";

export type Playable = "full" | "preview" | "login_required" | "unavailable";

export interface Track {
  id: string;
  provider: ProviderId;
  providerTrackId: string;
  title: string;
  artists: string[];
  album?: string;
  durationMs?: number;
  artworkUrl?: string;
  sourceUrl: string;
  license?: string;
  playable: Playable;
}

export interface MusicProvider {
  id: ProviderId;
  search(query: string, opts: { limit: number; signal: AbortSignal }): Promise<Track[]>;
}
