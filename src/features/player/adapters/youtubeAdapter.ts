import type { PlayerAdapter } from "@/types/playerAdapter";
import type { Track } from "@/types/track";

export const youtubeAdapter: PlayerAdapter = {
  async load(_track: Track) {},
  async play() {},
  async pause() {},
  async seek(_ms: number) {},
  setVolume(_v: number) {},
  on() {},
  destroy() {},
};

export const spotifyAdapter: PlayerAdapter = {
  async load(_track: Track) {},
  async play() {},
  async pause() {},
  async seek(_ms: number) {},
  setVolume(_v: number) {},
  on() {},
  destroy() {},
};
