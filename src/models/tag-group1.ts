import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentTagSchema, type ParentTag } from "./parent-tag.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagGroup1 = {
  id: number;
  name: string;
  tags: Tag[];
  parentTag: ParentTag[];
  onePerTopic: boolean;
  permissions: Record<string, unknown>;
};

export const tagGroup1Schema: Schema<TagGroup1> = s.object<TagGroup1>({
  id: s.number(),
  name: s.string(),
  tags: s.array(s.lazy(() => tagSchema)),
  parentTag: s.array(s.lazy(() => parentTagSchema)),
  onePerTopic: s.boolean(),
  permissions: s.record(s.string(), s.unknown()),
  _keysMap: {
    parentTag: "parent_tag",
    onePerTopic: "one_per_topic",
  },
});
