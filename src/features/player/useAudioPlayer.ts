"use client";
import { useEffect } from "react";
import { usePlayer } from "./store";

export function useAudioPlayer() {
  const { current, isPlaying, volume, muted, seek, position } = usePlayer();
  useEffect(() => {
    if (!current) return;
    const audio = new Audio(current.audioUrl);
    audio.volume = muted ? 0 : volume;
    if (isPlaying) void audio.play();
    const onTime = () => seek(audio.currentTime);
    audio.addEventListener("timeupdate", onTime);
    return () => { audio.pause(); audio.removeEventListener("timeupdate", onTime); };
  }, [current, isPlaying, volume, muted, seek]);
  useEffect(() => {
    if ("mediaSession" in navigator && current) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: current.title, artist: current.artist });
    }
  }, [current]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const { pause, resume, next, prev } = usePlayer.getState();
      if (e.code === "Space") { e.preventDefault(); isPlaying ? pause() : resume(); }
      if (e.code === "ArrowRight") next();
      if (e.code === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPlaying]);
  return { position };
}
