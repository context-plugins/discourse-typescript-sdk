import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicListSchema, type TopicList } from "./topic-list.js";
import { userSchema, type User } from "./user.js";

export type CJsonResponse = {
  users?: User[];
  primaryGroups?: Record<string, unknown>[];
  topicList: TopicList;
};

export const cJsonResponseSchema: Schema<CJsonResponse> = s.object<CJsonResponse>({
  users: s.optional(s.array(s.lazy(() => userSchema))),
  primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  topicList: topicListSchema,
  _keysMap: {
    primaryGroups: "primary_groups",
    topicList: "topic_list",
  },
});
