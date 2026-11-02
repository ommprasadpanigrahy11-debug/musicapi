export function generateCsrfToken(): string {
  return crypto.randomUUID();
}
export function verifyCsrfToken(submitted: string, cookie: string): boolean {
  return submitted.length > 0 && submitted === cookie;
}
