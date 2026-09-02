import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicSchema, type Topic } from "./topic.js";

export type Post = {
  id: number;
  postNumber: number;
  url: string;
  categorySlug: string;
  topic: Topic;
};

export const postSchema: Schema<Post> = s.object<Post>({
  id: s.number(),
  postNumber: s.number(),
  url: s.string(),
  categorySlug: s.string(),
  topic: topicSchema,
  _keysMap: {
    postNumber: "post_number",
    categorySlug: "category_slug",
  },
});
