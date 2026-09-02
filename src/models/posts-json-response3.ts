import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { post2Schema, type Post2 } from "./post2.js";

export type PostsJsonResponse3 = {
  post: Post2;
};

export const postsJsonResponse3Schema: Schema<PostsJsonResponse3> = s.object<PostsJsonResponse3>({
  post: post2Schema,
});
