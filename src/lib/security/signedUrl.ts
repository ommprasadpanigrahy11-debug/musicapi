export function signedAudioUrl(trackId: string, userId: string, ttlSec = 900): string {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  return `/api/audio/${trackId}?u=${encodeURIComponent(userId)}&exp=${exp}&sig=placeholder`;
}
export function isUrlExpired(exp: number): boolean {
  return Math.floor(Date.now() / 1000) > exp;
}
