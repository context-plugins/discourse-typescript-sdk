import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicList1Schema, type TopicList1 } from "./topic-list1.js";
import { user1Schema, type User1 } from "./user1.js";

export type TopicsPrivateMessagesJsonResponse = {
  users?: User1[];
  primaryGroups?: Record<string, unknown>[];
  topicList?: TopicList1;
};

export const topicsPrivateMessagesJsonResponseSchema: Schema<TopicsPrivateMessagesJsonResponse> =
  s.object<TopicsPrivateMessagesJsonResponse>({
    users: s.optional(s.array(s.lazy(() => user1Schema))),
    primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
    topicList: s.optional(s.lazy(() => topicList1Schema)),
    _keysMap: {
      primaryGroups: "primary_groups",
      topicList: "topic_list",
    },
  });
