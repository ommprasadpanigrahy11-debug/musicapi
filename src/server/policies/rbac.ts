export type Role = "USER" | "PREMIUM" | "ADMIN";
const rank: Record<Role, number> = { USER: 0, PREMIUM: 1, ADMIN: 2 };
export function hasRole(userRole: Role, required: Role): boolean {
  return rank[userRole] >= rank[required];
}
export function isPremium(role: Role): boolean {
  return role === "PREMIUM" || role === "ADMIN";
}
export function isAdmin(role: Role): boolean {
  return role === "ADMIN";
}
