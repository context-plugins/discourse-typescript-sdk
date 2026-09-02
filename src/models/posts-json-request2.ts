import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostsJsonRequest2 = {
  forceDestroy?: boolean;
};

export const postsJsonRequest2Schema: Schema<PostsJsonRequest2> = s.object<PostsJsonRequest2>({
  forceDestroy: s.optional(s.boolean()),
  _keysMap: {
    forceDestroy: "force_destroy",
  },
});
