import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersListJsonResponse = {
  id: number;
  username: string;
  name: string | null;
  avatarTemplate: string;
  email?: string;
  secondaryEmails?: Record<string, unknown>[];
  active: boolean;
  admin: boolean;
  moderator: boolean;
  lastSeenAt: string | null;
  lastEmailedAt: string | null;
  createdAt: string;
  lastSeenAge: number | null;
  lastEmailedAge: number | null;
  createdAtAge: number | null;
  trustLevel: number;
  manualLockedTrustLevel: string | null;
  title: string | null;
  timeRead: number;
  staged: boolean;
  daysVisited: number;
  postsReadCount: number;
  topicsEntered: number;
  postCount: number;
};

export const adminUsersListJsonResponseSchema: Schema<AdminUsersListJsonResponse> =
  s.object<AdminUsersListJsonResponse>({
    id: s.number(),
    username: s.string(),
    name: s.nullable(s.string()),
    avatarTemplate: s.string(),
    email: s.optional(s.string()),
    secondaryEmails: s.optional(s.array(s.record(s.string(), s.unknown()))),
    active: s.boolean(),
    admin: s.boolean(),
    moderator: s.boolean(),
    lastSeenAt: s.nullable(s.string()),
    lastEmailedAt: s.nullable(s.string()),
    createdAt: s.string(),
    lastSeenAge: s.nullable(s.number()),
    lastEmailedAge: s.nullable(s.number()),
    createdAtAge: s.nullable(s.number()),
    trustLevel: s.number(),
    manualLockedTrustLevel: s.nullable(s.string()),
    title: s.nullable(s.string()),
    timeRead: s.number(),
    staged: s.boolean(),
    daysVisited: s.number(),
    postsReadCount: s.number(),
    topicsEntered: s.number(),
    postCount: s.number(),
    _keysMap: {
      avatarTemplate: "avatar_template",
      secondaryEmails: "secondary_emails",
      lastSeenAt: "last_seen_at",
      lastEmailedAt: "last_emailed_at",
      createdAt: "created_at",
      lastSeenAge: "last_seen_age",
      lastEmailedAge: "last_emailed_age",
      createdAtAge: "created_at_age",
      trustLevel: "trust_level",
      manualLockedTrustLevel: "manual_locked_trust_level",
      timeRead: "time_read",
      daysVisited: "days_visited",
      postsReadCount: "posts_read_count",
      topicsEntered: "topics_entered",
      postCount: "post_count",
    },
  });
