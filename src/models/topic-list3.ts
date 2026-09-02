import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tag4Schema, type Tag4 } from "./tag4.js";
import { topic4Schema, type Topic4 } from "./topic4.js";

export type TopicList3 = {
  canCreateTopic?: boolean;
  draft?: string | null;
  draftKey?: string;
  draftSequence?: number;
  perPage?: number;
  tags?: Tag4[];
  topics?: Topic4[];
};

export const topicList3Schema: Schema<TopicList3> = s.object<TopicList3>({
  canCreateTopic: s.optional(s.boolean()),
  draft: s.optionalNullable(s.string()),
  draftKey: s.optional(s.string()),
  draftSequence: s.optional(s.number()),
  perPage: s.optional(s.number()),
  tags: s.optional(s.array(s.lazy(() => tag4Schema))),
  topics: s.optional(s.array(s.lazy(() => topic4Schema))),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    perPage: "per_page",
  },
});
