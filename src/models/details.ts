import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { lastPosterSchema, type LastPoster } from "./last-poster.js";
import { participant1Schema, type Participant1 } from "./participant1.js";

export type Details = {
  canEdit: boolean;
  notificationLevel: number;
  canMovePosts: boolean;
  canDelete: boolean;
  canRemoveAllowedUsers: boolean;
  canCreatePost: boolean;
  canReplyAsNewTopic: boolean;
  canInviteTo?: boolean;
  canInviteViaEmail?: boolean;
  canFlagTopic?: boolean;
  canConvertTopic: boolean;
  canReviewTopic: boolean;
  canCloseTopic: boolean;
  canArchiveTopic: boolean;
  canSplitMergeTopic: boolean;
  canEditStaffNotes: boolean;
  canToggleTopicVisibility: boolean;
  canPinUnpinTopic: boolean;
  canBannerTopic?: boolean;
  canModerateCategory: boolean;
  canRemoveSelfId: number;
  participants?: Participant1[];
  createdBy: CreatedBy;
  lastPoster: LastPoster;
};

export const detailsSchema: Schema<Details> = s.object<Details>({
  canEdit: s.boolean(),
  notificationLevel: s.number(),
  canMovePosts: s.boolean(),
  canDelete: s.boolean(),
  canRemoveAllowedUsers: s.boolean(),
  canCreatePost: s.boolean(),
  canReplyAsNewTopic: s.boolean(),
  canInviteTo: s.optional(s.boolean()),
  canInviteViaEmail: s.optional(s.boolean()),
  canFlagTopic: s.optional(s.boolean()),
  canConvertTopic: s.boolean(),
  canReviewTopic: s.boolean(),
  canCloseTopic: s.boolean(),
  canArchiveTopic: s.boolean(),
  canSplitMergeTopic: s.boolean(),
  canEditStaffNotes: s.boolean(),
  canToggleTopicVisibility: s.boolean(),
  canPinUnpinTopic: s.boolean(),
  canBannerTopic: s.optional(s.boolean()),
  canModerateCategory: s.boolean(),
  canRemoveSelfId: s.number(),
  participants: s.optional(s.array(s.lazy(() => participant1Schema))),
  createdBy: createdBySchema,
  lastPoster: lastPosterSchema,
  _keysMap: {
    canEdit: "can_edit",
    notificationLevel: "notification_level",
    canMovePosts: "can_move_posts",
    canDelete: "can_delete",
    canRemoveAllowedUsers: "can_remove_allowed_users",
    canCreatePost: "can_create_post",
    canReplyAsNewTopic: "can_reply_as_new_topic",
    canInviteTo: "can_invite_to",
    canInviteViaEmail: "can_invite_via_email",
    canFlagTopic: "can_flag_topic",
    canConvertTopic: "can_convert_topic",
    canReviewTopic: "can_review_topic",
    canCloseTopic: "can_close_topic",
    canArchiveTopic: "can_archive_topic",
    canSplitMergeTopic: "can_split_merge_topic",
    canEditStaffNotes: "can_edit_staff_notes",
    canToggleTopicVisibility: "can_toggle_topic_visibility",
    canPinUnpinTopic: "can_pin_unpin_topic",
    canBannerTopic: "can_banner_topic",
    canModerateCategory: "can_moderate_category",
    canRemoveSelfId: "can_remove_self_id",
    createdBy: "created_by",
    lastPoster: "last_poster",
  },
});
