export function rateLimitKey(ip: string, route: string): string {
  return `rl:${ip}:${route}`;
}
export async function checkRateLimit(_key: string, _limit: number, _windowSec: number): Promise<{ allowed: boolean; remaining: number }> {
  // Redis-backed implementation in production.
  return { allowed: true, remaining: _limit };
}
