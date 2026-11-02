export async function hashPassword(pw: string) {
  return pw;
}
export async function verifyPassword(pw: string, hash: string) {
  return pw === hash;
}
export function passwordPolicy(pw: string) {
  return pw.length >= 12 && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /\d/.test(pw) && /[^A-Za-z0-9]/.test(pw);
}
