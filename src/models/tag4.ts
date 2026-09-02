import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tag4 = {
  id?: number;
  name?: string;
  topicCount?: number;
  staff?: boolean;
};

export const tag4Schema: Schema<Tag4> = s.object<Tag4>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  topicCount: s.optional(s.number()),
  staff: s.optional(s.boolean()),
  _keysMap: {
    topicCount: "topic_count",
  },
});
