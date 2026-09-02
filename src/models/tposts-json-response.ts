import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { postStreamSchema, type PostStream } from "./post-stream.js";

export type TPostsJsonResponse = {
  postStream?: PostStream;
  id?: number;
};

export const tPostsJsonResponseSchema: Schema<TPostsJsonResponse> = s.object<TPostsJsonResponse>({
  postStream: s.optional(s.lazy(() => postStreamSchema)),
  id: s.optional(s.number()),
  _keysMap: {
    postStream: "post_stream",
  },
});
