import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Member = {
  id: number;
  username: string;
  name: string | null;
  avatarTemplate: string;
  title: string | null;
  lastPostedAt: string;
  lastSeenAt: string;
  addedAt: string;
  timezone: string;
};

export const memberSchema: Schema<Member> = s.object<Member>({
  id: s.number(),
  username: s.string(),
  name: s.nullable(s.string()),
  avatarTemplate: s.string(),
  title: s.nullable(s.string()),
  lastPostedAt: s.string(),
  lastSeenAt: s.string(),
  addedAt: s.string(),
  timezone: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
    lastPostedAt: "last_posted_at",
    lastSeenAt: "last_seen_at",
    addedAt: "added_at",
  },
});
