export async function listAuditLogs(_adminId: string) {
  // RBAC enforced by caller: admin only.
  return [] as { id: string; action: string; createdAt: string }[];
}
export async function moderateContent(_adminId: string, _targetId: string, _action: "hide" | "delete") {
  return { ok: true };
}
export async function exportUserData(userId: string) {
  return { userId, exportedAt: new Date().toISOString(), data: {} };
}
export async function deleteAccount(userId: string) {
  return { userId, deleted: true };
}
