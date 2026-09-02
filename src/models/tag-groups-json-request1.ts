import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TagGroupsJsonRequest1 = {
  name?: string;
};

export const tagGroupsJsonRequest1Schema: Schema<TagGroupsJsonRequest1> = s.object<TagGroupsJsonRequest1>({
  name: s.optional(s.string()),
});
