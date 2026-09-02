import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order2 = {
  LikesReceived: "likes_received",
  LikesGiven: "likes_given",
  TopicCount: "topic_count",
  PostCount: "post_count",
  TopicsEntered: "topics_entered",
  PostsRead: "posts_read",
  DaysVisited: "days_visited",
} as const;
export type Order2 = (typeof Order2)[keyof typeof Order2] | (string & {});

export const order2Schema: EnumSchema<Order2> = s.enumOf<Order2>(Order2);
