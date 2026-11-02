export function canAccessResource(ownerId: string, requesterId: string, role: "USER" | "PREMIUM" | "ADMIN"): boolean {
  if (role === "ADMIN") return true;
  return ownerId === requesterId;
}
export function requirePremium(role: "USER" | "PREMIUM" | "ADMIN"): boolean {
  return role === "PREMIUM" || role === "ADMIN";
}
