export function healthStatus(dbOk: boolean, redisOk: boolean): { status: "ok" | "degraded" | "down"; code: number } {
  if (dbOk && redisOk) return { status: "ok", code: 200 };
  if (dbOk || redisOk) return { status: "degraded", code: 200 };
  return { status: "down", code: 503 };
}
