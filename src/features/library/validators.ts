import { z } from "zod";
export const createPlaylistSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().default(false),
  isCollaborative: z.boolean().default(false),
});
export const addTrackSchema = z.object({ trackId: z.string().min(1) });
