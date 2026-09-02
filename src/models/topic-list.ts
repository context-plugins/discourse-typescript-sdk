import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topTagSchema, type TopTag } from "./top-tag.js";
import { topic1Schema, type Topic1 } from "./topic1.js";

export type TopicList = {
  canCreateTopic: boolean;
  perPage: number;
  topTags?: TopTag[];
  topics: Topic1[];
};

export const topicListSchema: Schema<TopicList> = s.object<TopicList>({
  canCreateTopic: s.boolean(),
  perPage: s.number(),
  topTags: s.optional(s.array(s.lazy(() => topTagSchema))),
  topics: s.array(s.lazy(() => topic1Schema)),
  _keysMap: {
    canCreateTopic: "can_create_topic",
    perPage: "per_page",
    topTags: "top_tags",
  },
});
