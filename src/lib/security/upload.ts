const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp"]);
export function validateUpload(mime: string, sizeBytes: number, maxBytes = 5 * 1024 * 1024): { ok: boolean; reason?: string } {
  if (!ALLOWED_MIME.has(mime)) return { ok: false, reason: "mime not allowed" };
  if (sizeBytes > maxBytes) return { ok: false, reason: "file too large" };
  return { ok: true };
}
export function randomFilename(ext: string): string {
  return `${crypto.randomUUID()}.${ext.replace(/^\./, "")}`;
}
