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
  id: s.number(),
  likesReceived: s.number(),
  likesGiven: s.number(),
  topicsEntered: s.number(),
  topicCount: s.number(),
  postCount: s.number(),
  postsRead: s.number(),
  daysVisited: s.number(),
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
