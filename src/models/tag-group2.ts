import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissions2Schema, type Permissions2 } from "./permissions2.js";

export type TagGroup2 = {
  id?: number;
  name?: string;
  tagNames?: Record<string, unknown>[];
  parentTagName?: Record<string, unknown>[];
  onePerTopic?: boolean;
  permissions?: Permissions2;
};

export const tagGroup2Schema: Schema<TagGroup2> = s.object<TagGroup2>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  tagNames: s.optional(s.array(s.record(s.string(), s.unknown()))),
  parentTagName: s.optional(s.array(s.record(s.string(), s.unknown()))),
  onePerTopic: s.optional(s.boolean()),
  permissions: s.optional(s.lazy(() => permissions2Schema)),
  _keysMap: {
    tagNames: "tag_names",
    parentTagName: "parent_tag_name",
    onePerTopic: "one_per_topic",
  },
});
