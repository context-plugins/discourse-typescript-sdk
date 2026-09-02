import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicList2Schema, type TopicList2 } from "./topic-list2.js";
import { user2Schema, type User2 } from "./user2.js";

export type TopicsPrivateMessagesSentJsonResponse = {
  users?: User2[];
  primaryGroups?: Record<string, unknown>[];
  topicList?: TopicList2;
};

export const topicsPrivateMessagesSentJsonResponseSchema: Schema<TopicsPrivateMessagesSentJsonResponse> =
  s.object<TopicsPrivateMessagesSentJsonResponse>({
    users: s.optional(s.array(s.lazy(() => user2Schema))),
    primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
    topicList: s.optional(s.lazy(() => topicList2Schema)),
    _keysMap: {
      primaryGroups: "primary_groups",
      topicList: "topic_list",
    },
  });
