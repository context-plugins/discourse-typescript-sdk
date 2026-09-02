import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagGroupSchema, type TagGroup } from "./tag-group.js";

export type TagGroupsJsonResponse = {
  tagGroups: TagGroup[];
};

export const tagGroupsJsonResponseSchema: Schema<TagGroupsJsonResponse> = s.object<TagGroupsJsonResponse>({
  tagGroups: s.array(s.lazy(() => tagGroupSchema)),
  _keysMap: {
    tagGroups: "tag_groups",
  },
});
