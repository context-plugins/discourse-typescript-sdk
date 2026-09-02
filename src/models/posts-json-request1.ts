import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { post1Schema, type Post1 } from "./post1.js";

export type PostsJsonRequest1 = {
  post?: Post1;
  bypassBump?: boolean;
};

export const postsJsonRequest1Schema: Schema<PostsJsonRequest1> = s.object<PostsJsonRequest1>({
  post: s.optional(s.lazy(() => post1Schema)),
  bypassBump: s.optional(s.boolean()),
  _keysMap: {
    bypassBump: "bypass_bump",
  },
});
