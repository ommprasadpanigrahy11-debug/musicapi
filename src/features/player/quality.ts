export type Quality = "low" | "normal" | "high" | "veryhigh";
export const bitrateMap: Record<Quality, number> = { low: 96, normal: 160, high: 256, veryhigh: 320 };
export function qualityLabel(q: Quality): string {
  return q.charAt(0).toUpperCase() + q.slice(1);
}
