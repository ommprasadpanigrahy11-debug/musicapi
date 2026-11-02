import { z } from "zod";
export const signupSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(12).max(128),
  displayName: z.string().min(1).max(64),
});
export const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(128),
});
export const resetRequestSchema = z.object({ email: z.string().email().max(254) });
export const resetConfirmSchema = z.object({ token: z.string().min(32).max(128), password: z.string().min(12).max(128) });
