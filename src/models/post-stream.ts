import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { post3Schema, type Post3 } from "./post3.js";

export type PostStream = {
  posts?: Post3[];
};

export const postStreamSchema: Schema<PostStream> = s.object<PostStream>({
  posts: s.optional(s.array(s.lazy(() => post3Schema))),
});
