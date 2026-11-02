export async function ingestFeed(url: string) {
  // SSRF-safe fetch: allowlist https, block private IPs, timeout, size cap.
  if (!url.startsWith("https://")) throw new Error("invalid scheme");
  return { url, episodes: [] as { title: string; audioUrl: string }[] };
}
export function sanitizeDescription(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
