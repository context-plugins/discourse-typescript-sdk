import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentTagSchema, type ParentTag } from "./parent-tag.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagGroup = {
  id: number;
  name: string;
  tags: Tag[];
  parentTag: ParentTag[];
  onePerTopic: boolean;
  permissions: Record<string, number>;
};

export const tagGroupSchema: Schema<TagGroup> = s.object<TagGroup>({
  id: s.number(),
  name: s.string(),
  tags: s.array(s.lazy(() => tagSchema)),
  parentTag: s.array(s.lazy(() => parentTagSchema)),
  onePerTopic: s.boolean(),
  permissions: s.record(s.string(), s.number()),
  _keysMap: {
    parentTag: "parent_tag",
    onePerTopic: "one_per_topic",
  },
});
