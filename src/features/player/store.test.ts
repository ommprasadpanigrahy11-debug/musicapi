import { describe, it, expect, beforeEach } from "vitest";
import { usePlayer } from "./store";

describe("player store", () => {
  beforeEach(() => usePlayer.setState({ current: null, queue: [], isPlaying: false, position: 0, repeat: "off", shuffle: false }));
  it("plays and pauses", () => {
    const t = { id: "1", title: "T", artist: "A", audioUrl: "u", durationSec: 10 };
    usePlayer.getState().play(t);
    expect(usePlayer.getState().isPlaying).toBe(true);
    usePlayer.getState().pause();
    expect(usePlayer.getState().isPlaying).toBe(false);
  });
  it("reorder queue", () => {
    const a = { id: "a", title: "A", artist: "x", audioUrl: "u", durationSec: 1 };
    const b = { id: "b", title: "B", artist: "x", audioUrl: "u", durationSec: 1 };
    usePlayer.getState().addToQueue(a);
    usePlayer.getState().addToQueue(b);
    usePlayer.getState().reorder(0, 1);
    expect(usePlayer.getState().queue.map((t) => t.id)).toEqual(["b", "a"]);
  });
});
