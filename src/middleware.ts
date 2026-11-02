import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const csp = `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://www.youtube.com https://sdk.scdn.co; style-src 'self' 'nonce-${nonce}'; img-src 'self' data: https://i.ytimg.com https://i.scdn.co https://*.jamendo.com; media-src 'self' https: blob:; frame-src https://www.youtube.com https://open.spotify.com; connect-src 'self' https://api.spotify.com https://accounts.spotify.com https://api.jamendo.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`;
  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  res.headers.set("Cross-Origin-Resource-Policy", "same-site");
  if (process.env.NODE_ENV === "production") {
    res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  }
  return res;
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
