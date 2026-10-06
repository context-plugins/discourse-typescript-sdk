import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostsLockedJsonRequest = {
  /** Whether to lock the post (true/false) */
  locked: string;
};

export const postsLockedJsonRequestSchema: Schema<PostsLockedJsonRequest> = s.object<PostsLockedJsonRequest>({
  locked: s.string(),
});
