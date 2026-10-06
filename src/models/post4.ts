import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionsSummarySchema, type ActionsSummary } from "./actions-summary.js";
import { linkCountSchema, type LinkCount } from "./link-count.js";

export type Post4 = {
  id: number;
  name: string;
  username: string;
  avatarTemplate: string;
  createdAt: string;
  cooked: string;
  postNumber: number;
  postType: number;
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
  version: number;
  canEdit: boolean;
  canDelete: boolean;
  canRecover: boolean;
  canSeeHiddenPost?: boolean;
  canWiki: boolean;
  linkCounts: LinkCount[];
  read: boolean;
  userTitle: string | null;
  bookmarked: boolean;
  actionsSummary: ActionsSummary[];
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
  reviewableId: number;
  reviewableScoreCount: number;
  reviewableScorePendingCount: number;
};

export const post4Schema: Schema<Post4> = s.object<Post4>({
  id: s.int(),
  name: s.string(),
  username: s.string(),
  avatarTemplate: s.string(),
  createdAt: s.string(),
  cooked: s.string(),
  postNumber: s.int(),
  postType: s.int(),
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
  version: s.int(),
  canEdit: s.boolean(),
  canDelete: s.boolean(),
  canRecover: s.boolean(),
  canSeeHiddenPost: s.optional(s.boolean()),
  canWiki: s.boolean(),
  linkCounts: s.array(s.lazy(() => linkCountSchema)),
  read: s.boolean(),
  userTitle: s.nullable(s.string()),
  bookmarked: s.boolean(),
  actionsSummary: s.array(s.lazy(() => actionsSummarySchema)),
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
  reviewableId: s.int(),
  reviewableScoreCount: s.int(),
  reviewableScorePendingCount: s.int(),
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
    canSeeHiddenPost: "can_see_hidden_post",
    canWiki: "can_wiki",
    linkCounts: "link_counts",
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
