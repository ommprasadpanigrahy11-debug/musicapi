"use client";
import { usePlayer } from "./store";

export function PlayerBar() {
  const { current, isPlaying, pause, resume, next, prev, volume, setVolume } = usePlayer();
  if (!current) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background p-3 flex items-center gap-3">
      <button onClick={prev} aria-label="Previous">⏮</button>
      <button onClick={isPlaying ? pause : resume} aria-label={isPlaying ? "Pause" : "Play"}>{isPlaying ? "⏸" : "▶"}</button>
      <button onClick={next} aria-label="Next">⏭</button>
      <span className="truncate">{current.title} — {current.artist}</span>
      <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => setVolume(Number(e.target.value))} aria-label="Volume" />
    </div>
  );
}
