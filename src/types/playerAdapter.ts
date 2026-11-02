import type { Track } from "@/types/track";

export interface PlayerAdapter {
  load(track: Track): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  seek(ms: number): Promise<void>;
  setVolume(v: number): void;
  on(event: "ready" | "playing" | "paused" | "ended" | "timeupdate" | "error", cb: (data?: unknown) => void): void;
  destroy(): void;
}
