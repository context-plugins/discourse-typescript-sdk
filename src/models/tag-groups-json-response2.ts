import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagGroup2Schema, type TagGroup2 } from "./tag-group2.js";

export type TagGroupsJsonResponse2 = {
  tagGroup?: TagGroup2;
};

export const tagGroupsJsonResponse2Schema: Schema<TagGroupsJsonResponse2> = s.object<TagGroupsJsonResponse2>({
  tagGroup: s.optional(s.lazy(() => tagGroup2Schema)),
  _keysMap: {
    tagGroup: "tag_group",
  },
});
