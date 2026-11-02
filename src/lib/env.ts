import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  S3_ENDPOINT: z.string().url(),
  S3_REGION: z.string().min(1),
  S3_BUCKET: z.string().min(1),
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  AUTH_SECRET: z.string().min(32),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  YOUTUBE_API_KEY: z.string().optional(),
  SPOTIFY_CLIENT_ID: z.string().optional(),
  SPOTIFY_REDIRECT_URI: z.string().url().optional(),
  JAMENDO_CLIENT_ID: z.string().optional(),
  TOKEN_ENCRYPTION_KEY: z.string().optional(),
  SEARCH_CACHE_TTL_SECONDS: z.coerce.number().int().positive().default(600),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;
export function getEnv(): Env {
  if (cached) return cached;
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    throw new Error(`Invalid environment: ${parsed.error.message}`);
  }
  cached = parsed.data;
  return cached;
}
