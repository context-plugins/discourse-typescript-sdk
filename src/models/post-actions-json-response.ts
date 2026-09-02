import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionsSummary5Schema, type ActionsSummary5 } from "./actions-summary5.js";

export type PostActionsJsonResponse = {
  id: number;
  name: string;
  username: string;
  avatarTemplate: string;
  createdAt: string;
  cooked: string;
  postNumber: number;
  postType: number;
  postsCount: number;
  updatedAt: string;
  replyCount: number;
  replyToPostNumber: string | null;
  quoteCount: number;
  incomingLinkCount: number;
  reads: number;
  readersCount: number;
  score: number;
  yours: boolean;
  topicId: number;
  topicSlug: string;
  displayUsername: string;
  primaryGroupName: string | null;
  flairName: string | null;
  flairUrl: string | null;
  flairBgColor: string | null;
  flairColor: string | null;
  flairGroupId: number | null;
  badgesGranted: Record<string, unknown>[];
  version: number;
  canEdit: boolean;
  canDelete: boolean;
  canRecover: boolean;
  canSeeHiddenPost: boolean;
  canWiki: boolean;
  userTitle: string | null;
  bookmarked: boolean;
  actionsSummary: ActionsSummary5[];
  moderator: boolean;
  admin: boolean;
  staff: boolean;
  userId: number;
  hidden: boolean;
  trustLevel: number;
  deletedAt: string | null;
  userDeleted: boolean;
  editReason: string | null;
  canViewEditHistory: boolean;
  wiki: boolean;
  reviewableId: number | null;
  reviewableScoreCount: number;
  reviewableScorePendingCount: number;
  postUrl: string;
};

export const postActionsJsonResponseSchema: Schema<PostActionsJsonResponse> =
  s.object<PostActionsJsonResponse>({
    id: s.number(),
    name: s.string(),
    username: s.string(),
    avatarTemplate: s.string(),
    createdAt: s.string(),
    cooked: s.string(),
    postNumber: s.number(),
    postType: s.number(),
    postsCount: s.number(),
    updatedAt: s.string(),
    replyCount: s.number(),
    replyToPostNumber: s.nullable(s.string()),
    quoteCount: s.number(),
    incomingLinkCount: s.number(),
    reads: s.number(),
    readersCount: s.number(),
    score: s.number(),
    yours: s.boolean(),
    topicId: s.number(),
    topicSlug: s.string(),
    displayUsername: s.string(),
    primaryGroupName: s.nullable(s.string()),
    flairName: s.nullable(s.string()),
    flairUrl: s.nullable(s.string()),
    flairBgColor: s.nullable(s.string()),
    flairColor: s.nullable(s.string()),
    flairGroupId: s.nullable(s.number()),
    badgesGranted: s.array(s.record(s.string(), s.unknown())),
    version: s.number(),
    canEdit: s.boolean(),
    canDelete: s.boolean(),
    canRecover: s.boolean(),
    canSeeHiddenPost: s.boolean(),
    canWiki: s.boolean(),
    userTitle: s.nullable(s.string()),
    bookmarked: s.boolean(),
    actionsSummary: s.array(s.lazy(() => actionsSummary5Schema)),
    moderator: s.boolean(),
    admin: s.boolean(),
    staff: s.boolean(),
    userId: s.number(),
    hidden: s.boolean(),
    trustLevel: s.number(),
    deletedAt: s.nullable(s.string()),
    userDeleted: s.boolean(),
    editReason: s.nullable(s.string()),
    canViewEditHistory: s.boolean(),
    wiki: s.boolean(),
    reviewableId: s.nullable(s.number()),
    reviewableScoreCount: s.number(),
    reviewableScorePendingCount: s.number(),
    postUrl: s.string(),
    _keysMap: {
      avatarTemplate: "avatar_template",
      createdAt: "created_at",
      postNumber: "post_number",
      postType: "post_type",
      postsCount: "posts_count",
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
      flairGroupId: "flair_group_id",
      badgesGranted: "badges_granted",
      canEdit: "can_edit",
      canDelete: "can_delete",
      canRecover: "can_recover",
      canSeeHiddenPost: "can_see_hidden_post",
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
      postUrl: "post_url",
    },
  });
