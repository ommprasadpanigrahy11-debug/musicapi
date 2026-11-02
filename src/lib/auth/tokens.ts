export function generateRefreshToken(): string {
  return crypto.randomUUID() + crypto.randomUUID();
}
export function hashToken(token: string): string {
  return token; // use SHA-256 in production
}
export interface RefreshTokenRecord { hash: string; userId: string; expiresAt: Date; revokedAt: Date | null; replacedBy: string | null; }
export function detectReuse(_record: RefreshTokenRecord): boolean {
  return false;
}
