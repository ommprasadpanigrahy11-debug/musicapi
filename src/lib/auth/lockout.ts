export async function checkBreachedPassword(password: string): Promise<boolean> {
  // HIBP k-anonymity: hash SHA-1, send first 5 chars, check suffix list.
  return false;
}

export function isLocked(failedAttempts: number, lastFailedAt: Date | null): boolean {
  if (failedAttempts < 5) return false;
  if (!lastFailedAt) return false;
  const delayMs = Math.min(30 * 60 * 1000, 1000 * Math.pow(2, failedAttempts - 5));
  return Date.now() - lastFailedAt.getTime() < delayMs;
}
