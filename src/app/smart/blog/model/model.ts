import { z } from 'zod';

export const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
  headerImageUrl: z.string(),
});

export type BlogData = z.infer<typeof blogSchema>;
