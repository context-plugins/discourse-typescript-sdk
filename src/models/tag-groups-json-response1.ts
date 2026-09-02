import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagGroup1Schema, type TagGroup1 } from "./tag-group1.js";

export type TagGroupsJsonResponse1 = {
  tagGroup: TagGroup1;
};

export const tagGroupsJsonResponse1Schema: Schema<TagGroupsJsonResponse1> = s.object<TagGroupsJsonResponse1>({
  tagGroup: tagGroup1Schema,
  _keysMap: {
    tagGroup: "tag_group",
  },
});
