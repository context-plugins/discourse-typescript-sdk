import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAction = {
  excerpt: string;
  actionType: number;
  createdAt: string;
  avatarTemplate: string;
  actingAvatarTemplate: string;
  slug: string;
  topicId: number;
  targetUserId: number;
  targetName: string | null;
  targetUsername: string;
  postNumber: number;
  postId: string | null;
  username: string;
  name: string | null;
  userId: number;
  actingUsername: string;
  actingName: string | null;
  actingUserId: number;
  title: string;
  deleted: boolean;
  hidden: string | null;
  postType: string | null;
  actionCode: string | null;
  categoryId: number;
  closed: boolean;
  archived: boolean;
};

export const userActionSchema: Schema<UserAction> = s.object<UserAction>({
  excerpt: s.string(),
  actionType: s.number(),
  createdAt: s.string(),
  avatarTemplate: s.string(),
  actingAvatarTemplate: s.string(),
  slug: s.string(),
  topicId: s.number(),
  targetUserId: s.number(),
  targetName: s.nullable(s.string()),
  targetUsername: s.string(),
  postNumber: s.number(),
  postId: s.nullable(s.string()),
  username: s.string(),
  name: s.nullable(s.string()),
  userId: s.number(),
  actingUsername: s.string(),
  actingName: s.nullable(s.string()),
  actingUserId: s.number(),
  title: s.string(),
  deleted: s.boolean(),
  hidden: s.nullable(s.string()),
  postType: s.nullable(s.string()),
  actionCode: s.nullable(s.string()),
  categoryId: s.number(),
  closed: s.boolean(),
  archived: s.boolean(),
  _keysMap: {
    actionType: "action_type",
    createdAt: "created_at",
    avatarTemplate: "avatar_template",
    actingAvatarTemplate: "acting_avatar_template",
    topicId: "topic_id",
    targetUserId: "target_user_id",
    targetName: "target_name",
    targetUsername: "target_username",
    postNumber: "post_number",
    postId: "post_id",
    userId: "user_id",
    actingUsername: "acting_username",
    actingName: "acting_name",
    actingUserId: "acting_user_id",
    postType: "post_type",
    actionCode: "action_code",
    categoryId: "category_id",
  },
});
