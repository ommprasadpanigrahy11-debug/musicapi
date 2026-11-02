# Threat Model (STRIDE summary)

- Spoofing: Argon2id passwords, TOTP 2FA, rotating refresh tokens.
- Tampering: Zod validation, Prisma parameterized queries, CSP, CSRF tokens.
- Repudiation: AuditLog for auth/admin/entitlement events.
- Info disclosure: HttpOnly cookies, no secrets in repo, redacted logs, signed audio URLs.
- DoS: Redis rate limiting per IP/user/route.
- Elevation: deny-by-default RBAC + object-level checks.
