export function sleepTimerMs(minutes: number): number {
  return Math.max(0, minutes) * 60 * 1000;
}
export function episodeProgressPercent(positionSec: number, durationSec: number): number {
  if (durationSec <= 0) return 0;
  return Math.min(100, Math.round((positionSec / durationSec) * 100));
}
