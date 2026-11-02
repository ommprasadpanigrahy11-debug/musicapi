import { create } from "zustand";

export type Track = { id: string; title: string; artist: string; audioUrl: string; durationSec: number };

type PlayerState = {
  current: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  muted: boolean;
  shuffle: boolean;
  repeat: "off" | "all" | "one";
  position: number;
  play: (t: Track) => void;
  pause: () => void;
  resume: () => void;
  next: () => void;
  prev: () => void;
  seek: (s: number) => void;
  setVolume: (v: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  addToQueue: (t: Track) => void;
  playNext: (t: Track) => void;
  clearQueue: () => void;
  reorder: (from: number, to: number) => void;
};

export const usePlayer = create<PlayerState>((set, get) => ({
  current: null,
  queue: [],
  isPlaying: false,
  volume: 1,
  muted: false,
  shuffle: false,
  repeat: "off",
  position: 0,
  play: (t) => set({ current: t, isPlaying: true, position: 0 }),
  pause: () => set({ isPlaying: false }),
  resume: () => set({ isPlaying: true }),
  next: () => {
    const { queue, current, repeat } = get();
    if (!current) return;
    if (repeat === "one") { set({ position: 0, isPlaying: true }); return; }
    const idx = queue.findIndex((x) => x.id === current.id);
    const next = queue[idx + 1];
    if (next) set({ current: next, isPlaying: true, position: 0 });
    else if (repeat === "all" && queue.length) set({ current: queue[0], isPlaying: true, position: 0 });
    else set({ isPlaying: false });
  },
  prev: () => {
    const { queue, current } = get();
    if (!current) return;
    const idx = queue.findIndex((x) => x.id === current.id);
    const prev = queue[idx - 1];
    if (prev) set({ current: prev, isPlaying: true, position: 0 });
  },
  seek: (s) => set({ position: s }),
  setVolume: (v) => set({ volume: Math.max(0, Math.min(1, v)) }),
  toggleMute: () => set((s) => ({ muted: !s.muted })),
  toggleShuffle: () => set((s) => ({ shuffle: !s.shuffle })),
  cycleRepeat: () => set((s) => ({ repeat: s.repeat === "off" ? "all" : s.repeat === "all" ? "one" : "off" })),
  addToQueue: (t) => set((s) => ({ queue: [...s.queue, t] })),
  playNext: (t) => set((s) => {
    const idx = s.current ? s.queue.findIndex((x) => x.id === s.current!.id) : -1;
    const q = [...s.queue];
    q.splice(idx + 1, 0, t);
    return { queue: q };
  }),
  clearQueue: () => set({ queue: [], current: null, isPlaying: false }),
  reorder: (from, to) => set((s) => {
    const q = [...s.queue];
    const [m] = q.splice(from, 1);
    q.splice(to, 0, m!);
    return { queue: q };
  }),
}));
