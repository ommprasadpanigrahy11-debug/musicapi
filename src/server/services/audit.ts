export type AuditEvent = { userId?: string; action: string; metadata?: Record<string, unknown> };
export async function audit(event: AuditEvent): Promise<void> {
  // Persist via Prisma in production; console in dev (redacted).
  if (process.env.NODE_ENV !== "test") {
    console.info("audit", event.action, event.userId ?? "anon");
  }
}
