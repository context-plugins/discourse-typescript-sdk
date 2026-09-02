import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topic2Schema, type Topic2 } from "./topic2.js";

export type TopicList1 = {
  canCreateTopic?: boolean;
  draft?: string | null;
  draftKey?: string;
  draftSequence?: number;
  perPage?: number;
  topics?: Topic2[];
};

export const topicList1Schema: Schema<TopicList1> = s.object<TopicList1>({
  canCreateTopic: s.optional(s.boolean()),
  draft: s.optionalNullable(s.string()),
  draftKey: s.optional(s.string()),
  draftSequence: s.optional(s.number()),
  perPage: s.optional(s.number()),
  topics: s.optional(s.array(s.lazy(() => topic2Schema))),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    perPage: "per_page",
  },
});
