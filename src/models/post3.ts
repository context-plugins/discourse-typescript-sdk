import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionsSummary6Schema, type ActionsSummary6 } from "./actions-summary6.js";

export type Post3 = {
  id?: number;
  name?: string | null;
  username?: string;
  avatarTemplate?: string;
  createdAt?: string;
  cooked?: string;
  postNumber?: number;
  postType?: number;
  updatedAt?: string;
  replyCount?: number;
  replyToPostNumber?: string | null;
  quoteCount?: number;
  incomingLinkCount?: number;
  reads?: number;
  readersCount?: number;
  score?: number;
  yours?: boolean;
  topicId?: number;
  topicSlug?: string;
  displayUsername?: string | null;
  primaryGroupName?: string | null;
  flairName?: string | null;
  flairUrl?: string | null;
  flairBgColor?: string | null;
  flairColor?: string | null;
  version?: number;
  canEdit?: boolean;
  canDelete?: boolean;
  canRecover?: boolean;
  canWiki?: boolean;
  read?: boolean;
  userTitle?: string | null;
  actionsSummary?: ActionsSummary6[];
  moderator?: boolean;
  admin?: boolean;
  staff?: boolean;
  userId?: number;
  hidden?: boolean;
  trustLevel?: number;
  deletedAt?: string | null;
  userDeleted?: boolean;
  editReason?: string | null;
  canViewEditHistory?: boolean;
  wiki?: boolean;
  reviewableId?: number;
  reviewableScoreCount?: number;
  reviewableScorePendingCount?: number;
};

export const post3Schema: Schema<Post3> = s.object<Post3>({
  id: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  username: s.optional(s.string()),
  avatarTemplate: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  cooked: s.optional(s.string()),
  postNumber: s.optional(s.number()),
  postType: s.optional(s.number()),
  updatedAt: s.optional(s.string()),
  replyCount: s.optional(s.number()),
  replyToPostNumber: s.optionalNullable(s.string()),
  quoteCount: s.optional(s.number()),
  incomingLinkCount: s.optional(s.number()),
  reads: s.optional(s.number()),
  readersCount: s.optional(s.number()),
  score: s.optional(s.number()),
  yours: s.optional(s.boolean()),
  topicId: s.optional(s.number()),
  topicSlug: s.optional(s.string()),
  displayUsername: s.optionalNullable(s.string()),
  primaryGroupName: s.optionalNullable(s.string()),
  flairName: s.optionalNullable(s.string()),
  flairUrl: s.optionalNullable(s.string()),
  flairBgColor: s.optionalNullable(s.string()),
  flairColor: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  canEdit: s.optional(s.boolean()),
  canDelete: s.optional(s.boolean()),
  canRecover: s.optional(s.boolean()),
  canWiki: s.optional(s.boolean()),
  read: s.optional(s.boolean()),
  userTitle: s.optionalNullable(s.string()),
  actionsSummary: s.optional(s.array(s.lazy(() => actionsSummary6Schema))),
  moderator: s.optional(s.boolean()),
  admin: s.optional(s.boolean()),
  staff: s.optional(s.boolean()),
  userId: s.optional(s.number()),
  hidden: s.optional(s.boolean()),
  trustLevel: s.optional(s.number()),
  deletedAt: s.optionalNullable(s.string()),
  userDeleted: s.optional(s.boolean()),
  editReason: s.optionalNullable(s.string()),
  canViewEditHistory: s.optional(s.boolean()),
  wiki: s.optional(s.boolean()),
  reviewableId: s.optional(s.number()),
  reviewableScoreCount: s.optional(s.number()),
  reviewableScorePendingCount: s.optional(s.number()),
  _keysMap: {
    avatarTemplate: "avatar_template",
    createdAt: "created_at",
    postNumber: "post_number",
    postType: "post_type",
    updatedAt: "updated_at",
    replyCount: "reply_count",
    replyToPostNumber: "reply_to_post_number",
    quoteCount: "quote_count",
    incomingLinkCount: "incoming_link_count",
    readersCount: "readers_count",
    topicId: "topic_id",
    topicSlug: "topic_slug",
    displayUsername: "display_username",
    primaryGroupName: "primary_group_name",
    flairName: "flair_name",
    flairUrl: "flair_url",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
    canEdit: "can_edit",
    canDelete: "can_delete",
    canRecover: "can_recover",
    canWiki: "can_wiki",
    userTitle: "user_title",
    actionsSummary: "actions_summary",
    userId: "user_id",
    trustLevel: "trust_level",
    deletedAt: "deleted_at",
    userDeleted: "user_deleted",
    editReason: "edit_reason",
    canViewEditHistory: "can_view_edit_history",
    reviewableId: "reviewable_id",
    reviewableScoreCount: "reviewable_score_count",
    reviewableScorePendingCount: "reviewable_score_pending_count",
  },
});
