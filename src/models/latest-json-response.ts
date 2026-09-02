import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topicList4Schema, type TopicList4 } from "./topic-list4.js";
import { user2Schema, type User2 } from "./user2.js";

export type LatestJsonResponse = {
  users?: User2[];
  primaryGroups?: Record<string, unknown>[];
  topicList?: TopicList4;
};

export const latestJsonResponseSchema: Schema<LatestJsonResponse> = s.object<LatestJsonResponse>({
  users: s.optional(s.array(s.lazy(() => user2Schema))),
  primaryGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  topicList: s.optional(s.lazy(() => topicList4Schema)),
  _keysMap: {
    primaryGroups: "primary_groups",
    topicList: "topic_list",
  },
});
