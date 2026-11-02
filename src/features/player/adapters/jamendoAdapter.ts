import type { PlayerAdapter } from "@/types/playerAdapter";
import type { Track } from "@/types/track";

export const jamendoAdapter: PlayerAdapter = {
  async load(track: Track) { /* HTML5 audio */ },
  async play() {},
  async pause() {},
  async seek(ms: number) {},
  setVolume(v: number) {},
  on() {},
  destroy() {},
};
