import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topic3Schema, type Topic3 } from "./topic3.js";

export type TopicList2 = {
  canCreateTopic?: boolean;
  draft?: string | null;
  draftKey?: string;
  draftSequence?: number;
  perPage?: number;
  topics?: Topic3[];
};

export const topicList2Schema: Schema<TopicList2> = s.object<TopicList2>({
  canCreateTopic: s.optional(s.boolean()),
  draft: s.optionalNullable(s.string()),
  draftKey: s.optional(s.string()),
  draftSequence: s.optional(s.number()),
  perPage: s.optional(s.number()),
  topics: s.optional(s.array(s.lazy(() => topic3Schema))),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    perPage: "per_page",
  },
});
