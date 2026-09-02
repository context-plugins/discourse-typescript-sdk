import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order3 = {
  Created: "created",
  LastEmailed: "last_emailed",
  Seen: "seen",
  Username: "username",
  Email: "email",
  TrustLevel: "trust_level",
  DaysVisited: "days_visited",
  PostsRead: "posts_read",
  TopicsViewed: "topics_viewed",
  Posts: "posts",
  ReadTime: "read_time",
} as const;
export type Order3 = (typeof Order3)[keyof typeof Order3] | (string & {});

export const order3Schema: EnumSchema<Order3> = s.enumOf<Order3>(Order3);
