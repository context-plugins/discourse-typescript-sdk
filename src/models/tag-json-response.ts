import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicList3Schema, type TopicList3 } from "./topic-list3.js";
import { user2Schema, type User2 } from "./user2.js";

export type TagJsonResponse = {
  users?: User2[];
  primaryGroups?: Record<string, unknown>[];
  topicList?: TopicList3;
};

export const tagJsonResponseSchema: Schema<TagJsonResponse> = s.object<TagJsonResponse>({
  users: s.optional(s.array(s.lazy(() => user2Schema))),
  primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  topicList: s.optional(s.lazy(() => topicList3Schema)),
  _keysMap: {
    primaryGroups: "primary_groups",
    topicList: "topic_list",
  },
});
