export interface CrossfadeConfig { durationSec: number; }
export function clampCrossfade(v: number): number {
  return Math.max(0, Math.min(12, v));
}
export function eqGainToDb(gain: number): number {
  return Math.max(-12, Math.min(12, gain));
}
