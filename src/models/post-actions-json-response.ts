import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionsSummary5Schema, type ActionsSummary5 } from "./actions-summary5.js";

export type PostActionsJsonResponse = {
  /** The ID of the post */
  id: number;
  /** The name of the post author */
  name: string;
  /** The username of the post author */
  username: string;
  /** Template for the author's avatar URL */
  avatarTemplate: string;
  /** When the post was created */
  createdAt: string;
  /** The HTML content of the post */
  cooked: string;
  /** The post number within the topic */
  postNumber: number;
  /** The type of post */
  postType: number;
  /** Total posts count for the user */
  postsCount: number;
  /** When the post was last updated */
  updatedAt: string;
  /** Number of replies to this post */
  replyCount: number;
  /** Post number this post is replying to */
  replyToPostNumber: string | null;
  /** Number of times this post has been quoted */
  quoteCount: number;
  /** Number of incoming links to this post */
  incomingLinkCount: number;
  /** Number of reads */
  reads: number;
  /** Number of readers */
  readersCount: number;
  /** Post score */
  score: number;
  /** Whether this post belongs to the current user */
  yours: boolean;
  /** ID of the topic this post belongs to */
  topicId: number;
  /** Slug of the topic this post belongs to */
  topicSlug: string;
  /** Display username of the post author */
  displayUsername: string;
  /** Primary group name of the author */
  primaryGroupName: string | null;
  /** Flair name of the author */
  flairName: string | null;
  /** Flair URL of the author */
  flairUrl: string | null;
  /** Flair background color of the author */
  flairBgColor: string | null;
  /** Flair color of the author */
  flairColor: string | null;
  /** Flair group ID of the author */
  flairGroupId: number | null;
  /** Badges granted to the user */
  badgesGranted: Record<string, unknown>[];
  /** Version number of the post */
  version: number;
  /** Whether the current user can edit this post */
  canEdit: boolean;
  /** Whether the current user can delete this post */
  canDelete: boolean;
  /** Whether the current user can recover this post */
  canRecover: boolean;
  /** Whether the current user can see hidden posts */
  canSeeHiddenPost: boolean;
  /** Whether the current user can wiki this post */
  canWiki: boolean;
  /** Title of the post author */
  userTitle: string | null;
  /** Whether the post is bookmarked by the current user */
  bookmarked: boolean;
  /** Summary of actions performed on this post */
  actionsSummary: ActionsSummary5[];
  /** Whether the post author is a moderator */
  moderator: boolean;
  /** Whether the post author is an admin */
  admin: boolean;
  /** Whether the post author is staff */
  staff: boolean;
  /** ID of the post author */
  userId: number;
  /** Whether the post is hidden */
  hidden: boolean;
  /** Trust level of the post author */
  trustLevel: number;
  /** When the post was deleted */
  deletedAt: string | null;
  /** Whether the post was deleted by the user */
  userDeleted: boolean;
  /** Reason for the last edit */
  editReason: string | null;
  /** Whether the current user can view edit history */
  canViewEditHistory: boolean;
  /** Whether this is a wiki post */
  wiki: boolean;
  /** ID of the reviewable if this post is under review */
  reviewableId: number | null;
  /** Number of reviewable scores */
  reviewableScoreCount: number;
  /** Number of pending reviewable scores */
  reviewableScorePendingCount: number;
  /** URL of the post */
  postUrl: string;
};

export const postActionsJsonResponseSchema: Schema<PostActionsJsonResponse> =
  s.object<PostActionsJsonResponse>({
    id: s.int(),
    name: s.string(),
    username: s.string(),
    avatarTemplate: s.string(),
    createdAt: s.string(),
    cooked: s.string(),
    postNumber: s.int(),
    postType: s.int(),
    postsCount: s.int(),
    updatedAt: s.string(),
    replyCount: s.int(),
    replyToPostNumber: s.nullable(s.string()),
    quoteCount: s.int(),
    incomingLinkCount: s.int(),
    reads: s.int(),
    readersCount: s.int(),
    score: s.float64(),
    yours: s.boolean(),
    topicId: s.int(),
    topicSlug: s.string(),
    displayUsername: s.string(),
    primaryGroupName: s.nullable(s.string()),
    flairName: s.nullable(s.string()),
    flairUrl: s.nullable(s.string()),
    flairBgColor: s.nullable(s.string()),
    flairColor: s.nullable(s.string()),
    flairGroupId: s.nullable(s.int()),
    badgesGranted: s.array(s.record(s.string(), s.unknown())),
    version: s.int(),
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
    userId: s.int(),
    hidden: s.boolean(),
    trustLevel: s.int(),
    deletedAt: s.nullable(s.string()),
    userDeleted: s.boolean(),
    editReason: s.nullable(s.string()),
    canViewEditHistory: s.boolean(),
    wiki: s.boolean(),
    reviewableId: s.nullable(s.int()),
    reviewableScoreCount: s.int(),
    reviewableScorePendingCount: s.int(),
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
