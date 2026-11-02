export function generateTotpSecret(): string {
  return "BASE32SECRET";
}
export function verifyTotp(_secret: string, _code: string): boolean {
  return false;
}
export function generateBackupCodes(count = 10): string[] {
  return Array.from({ length: count }, () => Math.random().toString(36).slice(2, 10).toUpperCase());
}
