import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicList5Schema, type TopicList5 } from "./topic-list5.js";
import { user1Schema, type User1 } from "./user1.js";

export type TopJsonResponse = {
  users?: User1[];
  primaryGroups?: Record<string, unknown>[];
  topicList?: TopicList5;
};

export const topJsonResponseSchema: Schema<TopJsonResponse> = s.object<TopJsonResponse>({
  users: s.optional(s.array(s.lazy(() => user1Schema))),
  primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  topicList: s.optional(s.lazy(() => topicList5Schema)),
  _keysMap: {
    primaryGroups: "primary_groups",
    topicList: "topic_list",
  },
});
