import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topic6Schema, type Topic6 } from "./topic6.js";

export type TopicList4 = {
  canCreateTopic?: boolean;
  draft?: string | null;
  draftKey?: string;
  draftSequence?: number;
  perPage?: number;
  topics?: Topic6[];
};

export const topicList4Schema: Schema<TopicList4> = s.object<TopicList4>({
  canCreateTopic: s.optional(s.boolean()),
  draft: s.optionalNullable(s.string()),
  draftKey: s.optional(s.string()),
  draftSequence: s.optional(s.number()),
  perPage: s.optional(s.number()),
  topics: s.optional(s.array(s.lazy(() => topic6Schema))),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    perPage: "per_page",
  },
});
