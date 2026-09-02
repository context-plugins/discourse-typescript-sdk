import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagGroup2Schema, type TagGroup2 } from "./tag-group2.js";

export type TagGroupsJsonResponse3 = {
  success?: string;
  tagGroup?: TagGroup2;
};

export const tagGroupsJsonResponse3Schema: Schema<TagGroupsJsonResponse3> = s.object<TagGroupsJsonResponse3>({
  success: s.optional(s.string()),
  tagGroup: s.optional(s.lazy(() => tagGroup2Schema)),
  _keysMap: {
    tagGroup: "tag_group",
  },
});
