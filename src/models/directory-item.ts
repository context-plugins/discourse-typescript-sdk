import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user11Schema, type User11 } from "./user11.js";

export type DirectoryItem = {
  id: number;
  likesReceived: number;
  likesGiven: number;
  topicsEntered: number;
  topicCount: number;
  postCount: number;
  postsRead: number;
  daysVisited: number;
  user: User11;
};

export const directoryItemSchema: Schema<DirectoryItem> = s.object<DirectoryItem>({
  id: s.int(),
  likesReceived: s.int(),
  likesGiven: s.int(),
  topicsEntered: s.int(),
  topicCount: s.int(),
  postCount: s.int(),
  postsRead: s.int(),
  daysVisited: s.int(),
  user: user11Schema,
  _keysMap: {
    likesReceived: "likes_received",
    likesGiven: "likes_given",
    topicsEntered: "topics_entered",
    topicCount: "topic_count",
    postCount: "post_count",
    postsRead: "posts_read",
    daysVisited: "days_visited",
  },
});
