import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { post4Schema, type Post4 } from "./post4.js";

export type PostStream1 = {
  posts: Post4[];
  stream: Record<string, unknown>[];
};

export const postStream1Schema: Schema<PostStream1> = s.object<PostStream1>({
  posts: s.array(s.lazy(() => post4Schema)),
  stream: s.array(s.record(s.string(), s.unknown())),
});
