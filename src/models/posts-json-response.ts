import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latestPostSchema, type LatestPost } from "./latest-post.js";

export type PostsJsonResponse = {
  latestPosts: LatestPost[];
};

export const postsJsonResponseSchema: Schema<PostsJsonResponse> = s.object<PostsJsonResponse>({
  latestPosts: s.array(s.lazy(() => latestPostSchema)),
  _keysMap: {
    latestPosts: "latest_posts",
  },
});
