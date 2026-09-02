import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extras3Schema, type Extras3 } from "./extras3.js";
import { tag3Schema, type Tag3 } from "./tag3.js";

export type TagsJsonResponse = {
  tags?: Tag3[];
  extras?: Extras3;
};

export const tagsJsonResponseSchema: Schema<TagsJsonResponse> = s.object<TagsJsonResponse>({
  tags: s.optional(s.array(s.lazy(() => tag3Schema))),
  extras: s.optional(s.lazy(() => extras3Schema)),
});
