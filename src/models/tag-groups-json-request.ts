import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TagGroupsJsonRequest = {
  name: string;
};

export const tagGroupsJsonRequestSchema: Schema<TagGroupsJsonRequest> = s.object<TagGroupsJsonRequest>({
  name: s.string(),
});
