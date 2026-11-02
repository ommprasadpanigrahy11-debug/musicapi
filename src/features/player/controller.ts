import { youtubeAdapter } from "./adapters/youtubeAdapter";
import { spotifyAdapter } from "./adapters/spotifyAdapter";
import { jamendoAdapter } from "./adapters/jamendoAdapter";
import type { PlayerAdapter } from "@/types/playerAdapter";
import type { Track } from "@/types/track";

const adapters: Record<Track["provider"], PlayerAdapter> = {
  youtube: youtubeAdapter,
  spotify: spotifyAdapter,
  jamendo: jamendoAdapter,
};

let current: PlayerAdapter | null = null;

export async function loadTrack(track: Track) {
  if (current) current.destroy();
  current = adapters[track.provider];
  await current.load(track);
}

export function getCurrentAdapter() {
  return current;
}
