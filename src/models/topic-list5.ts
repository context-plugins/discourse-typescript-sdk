import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topic7Schema, type Topic7 } from "./topic7.js";

export type TopicList5 = {
  canCreateTopic?: boolean;
  draft?: string | null;
  draftKey?: string;
  draftSequence?: number;
  forPeriod?: string;
  perPage?: number;
  topics?: Topic7[];
};

export const topicList5Schema: Schema<TopicList5> = s.object<TopicList5>({
  canCreateTopic: s.optional(s.boolean()),
  draft: s.optionalNullable(s.string()),
  draftKey: s.optional(s.string()),
  draftSequence: s.optional(s.number()),
  forPeriod: s.optional(s.string()),
  perPage: s.optional(s.number()),
  topics: s.optional(s.array(s.lazy(() => topic7Schema))),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    forPeriod: "for_period",
    perPage: "per_page",
  },
});
