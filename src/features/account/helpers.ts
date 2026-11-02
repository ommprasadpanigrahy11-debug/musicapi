export function exportUserDataJson(user: { id: string; email: string; displayName: string }) {
  return JSON.stringify({ exportedAt: new Date().toISOString(), user }, null, 2);
}
export function anonymizeForDeletion(userId: string) {
  return { id: userId, email: `deleted-${userId}@example.invalid`, displayName: "Deleted User", deletedAt: new Date().toISOString() };
}
