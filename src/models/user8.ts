import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { featuredTopicSchema, type FeaturedTopic } from "./featured-topic.js";
import { groupUserSchema, type GroupUser } from "./group-user.js";
import { group7Schema, type Group7 } from "./group7.js";
import { userAuthTokenSchema, type UserAuthToken } from "./user-auth-token.js";
import {
  userNotificationScheduleSchema,
  type UserNotificationSchedule,
} from "./user-notification-schedule.js";
import { userOptionSchema, type UserOption } from "./user-option.js";

export type User8 = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
  lastPostedAt: string | null;
  lastSeenAt: string | null;
  createdAt: string;
  ignored: boolean;
  muted: boolean;
  canIgnoreUser: boolean;
  canIgnoreUsers?: boolean;
  canMuteUser: boolean;
  canMuteUsers?: boolean;
  canSendPrivateMessages: boolean;
  canSendPrivateMessageToUser: boolean;
  trustLevel: number;
  moderator: boolean;
  admin: boolean;
  title: string | null;
  badgeCount: number;
  secondFactorBackupEnabled?: boolean;
  userFields?: Record<string, string>;
  customFields: CustomFields;
  timeRead: number;
  recentTimeRead: number;
  primaryGroupId: number | null;
  primaryGroupName: string | null;
  flairGroupId: number | null;
  flairName: string | null;
  flairUrl: string | null;
  flairBgColor: string | null;
  flairColor: string | null;
  featuredTopic: FeaturedTopic;
  staged: boolean;
  canEdit: boolean;
  canEditUsername: boolean;
  canEditEmail: boolean;
  canEditName: boolean;
  uploadedAvatarId: number | null;
  hasTitleBadges: boolean;
  pendingCount: number;
  pendingPostsCount?: number;
  profileViewCount: number;
  secondFactorEnabled: boolean;
  canUploadProfileHeader: boolean;
  canUploadUserCardBackground: boolean;
  postCount: number;
  topicCount: number;
  canBeDeleted: boolean;
  canDeleteAllPosts: boolean;
  locale: string | null;
  mutedCategoryIds: Record<string, unknown>[];
  regularCategoryIds: Record<string, unknown>[];
  watchedTags: Record<string, unknown>[];
  watchingFirstPostTags: Record<string, unknown>[];
  trackedTags: Record<string, unknown>[];
  mutedTags: Record<string, unknown>[];
  trackedCategoryIds: Record<string, unknown>[];
  watchedCategoryIds: Record<string, unknown>[];
  watchedFirstPostCategoryIds: Record<string, unknown>[];
  systemAvatarUploadId: string | null;
  systemAvatarTemplate: string;
  mutedUsernames: Record<string, unknown>[];
  ignoredUsernames: Record<string, unknown>[];
  allowedPmUsernames: Record<string, unknown>[];
  mailingListPostsPerDay: number;
  canChangeBio: boolean;
  canChangeLocation: boolean;
  canChangeWebsite: boolean;
  canChangeTrackingPreferences: boolean;
  userApiKeys: string | null;
  userPasskeys?: Record<string, unknown>[];
  sidebarTags?: Record<string, unknown>[];
  sidebarCategoryIds?: Record<string, unknown>[];
  displaySidebarTags?: boolean;
  canPickThemeWithCustomHomepage?: boolean;
  userAuthTokens: UserAuthToken[];
  userNotificationSchedule: UserNotificationSchedule;
  useLogoSmallAsAvatar: boolean;
  featuredUserBadgeIds: Record<string, unknown>[];
  invitedBy: string | null;
  groups: Group7[];
  groupUsers: GroupUser[];
  userOption: UserOption;
};

export const user8Schema: Schema<User8> = s.object<User8>({
  id: s.number(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  lastPostedAt: s.nullable(s.string()),
  lastSeenAt: s.nullable(s.string()),
  createdAt: s.string(),
  ignored: s.boolean(),
  muted: s.boolean(),
  canIgnoreUser: s.boolean(),
  canIgnoreUsers: s.optional(s.boolean()),
  canMuteUser: s.boolean(),
  canMuteUsers: s.optional(s.boolean()),
  canSendPrivateMessages: s.boolean(),
  canSendPrivateMessageToUser: s.boolean(),
  trustLevel: s.number(),
  moderator: s.boolean(),
  admin: s.boolean(),
  title: s.nullable(s.string()),
  badgeCount: s.number(),
  secondFactorBackupEnabled: s.optional(s.boolean()),
  userFields: s.optional(s.record(s.string(), s.string())),
  customFields: customFieldsSchema,
  timeRead: s.number(),
  recentTimeRead: s.number(),
  primaryGroupId: s.nullable(s.number()),
  primaryGroupName: s.nullable(s.string()),
  flairGroupId: s.nullable(s.number()),
  flairName: s.nullable(s.string()),
  flairUrl: s.nullable(s.string()),
  flairBgColor: s.nullable(s.string()),
  flairColor: s.nullable(s.string()),
  featuredTopic: featuredTopicSchema,
  staged: s.boolean(),
  canEdit: s.boolean(),
  canEditUsername: s.boolean(),
  canEditEmail: s.boolean(),
  canEditName: s.boolean(),
  uploadedAvatarId: s.nullable(s.number()),
  hasTitleBadges: s.boolean(),
  pendingCount: s.number(),
  pendingPostsCount: s.optional(s.number()),
  profileViewCount: s.number(),
  secondFactorEnabled: s.boolean(),
  canUploadProfileHeader: s.boolean(),
  canUploadUserCardBackground: s.boolean(),
  postCount: s.number(),
  topicCount: s.number(),
  canBeDeleted: s.boolean(),
  canDeleteAllPosts: s.boolean(),
  locale: s.nullable(s.string()),
  mutedCategoryIds: s.array(s.record(s.string(), s.unknown())),
  regularCategoryIds: s.array(s.record(s.string(), s.unknown())),
  watchedTags: s.array(s.record(s.string(), s.unknown())),
  watchingFirstPostTags: s.array(s.record(s.string(), s.unknown())),
  trackedTags: s.array(s.record(s.string(), s.unknown())),
  mutedTags: s.array(s.record(s.string(), s.unknown())),
  trackedCategoryIds: s.array(s.record(s.string(), s.unknown())),
  watchedCategoryIds: s.array(s.record(s.string(), s.unknown())),
  watchedFirstPostCategoryIds: s.array(s.record(s.string(), s.unknown())),
  systemAvatarUploadId: s.nullable(s.string()),
  systemAvatarTemplate: s.string(),
  mutedUsernames: s.array(s.record(s.string(), s.unknown())),
  ignoredUsernames: s.array(s.record(s.string(), s.unknown())),
  allowedPmUsernames: s.array(s.record(s.string(), s.unknown())),
  mailingListPostsPerDay: s.number(),
  canChangeBio: s.boolean(),
  canChangeLocation: s.boolean(),
  canChangeWebsite: s.boolean(),
  canChangeTrackingPreferences: s.boolean(),
  userApiKeys: s.nullable(s.string()),
  userPasskeys: s.optional(s.array(s.record(s.string(), s.unknown()))),
  sidebarTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  sidebarCategoryIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
  displaySidebarTags: s.optional(s.boolean()),
  canPickThemeWithCustomHomepage: s.optional(s.boolean()),
  userAuthTokens: s.array(s.lazy(() => userAuthTokenSchema)),
  userNotificationSchedule: userNotificationScheduleSchema,
  useLogoSmallAsAvatar: s.boolean(),
  featuredUserBadgeIds: s.array(s.record(s.string(), s.unknown())),
  invitedBy: s.nullable(s.string()),
  groups: s.array(s.lazy(() => group7Schema)),
  groupUsers: s.array(s.lazy(() => groupUserSchema)),
  userOption: userOptionSchema,
  _keysMap: {
    avatarTemplate: "avatar_template",
    lastPostedAt: "last_posted_at",
    lastSeenAt: "last_seen_at",
    createdAt: "created_at",
    canIgnoreUser: "can_ignore_user",
    canIgnoreUsers: "can_ignore_users",
    canMuteUser: "can_mute_user",
    canMuteUsers: "can_mute_users",
    canSendPrivateMessages: "can_send_private_messages",
    canSendPrivateMessageToUser: "can_send_private_message_to_user",
    trustLevel: "trust_level",
    badgeCount: "badge_count",
    secondFactorBackupEnabled: "second_factor_backup_enabled",
    userFields: "user_fields",
    customFields: "custom_fields",
    timeRead: "time_read",
    recentTimeRead: "recent_time_read",
    primaryGroupId: "primary_group_id",
    primaryGroupName: "primary_group_name",
    flairGroupId: "flair_group_id",
    flairName: "flair_name",
    flairUrl: "flair_url",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
    featuredTopic: "featured_topic",
    canEdit: "can_edit",
    canEditUsername: "can_edit_username",
    canEditEmail: "can_edit_email",
    canEditName: "can_edit_name",
    uploadedAvatarId: "uploaded_avatar_id",
    hasTitleBadges: "has_title_badges",
    pendingCount: "pending_count",
    pendingPostsCount: "pending_posts_count",
    profileViewCount: "profile_view_count",
    secondFactorEnabled: "second_factor_enabled",
    canUploadProfileHeader: "can_upload_profile_header",
    canUploadUserCardBackground: "can_upload_user_card_background",
    postCount: "post_count",
    topicCount: "topic_count",
    canBeDeleted: "can_be_deleted",
    canDeleteAllPosts: "can_delete_all_posts",
    mutedCategoryIds: "muted_category_ids",
    regularCategoryIds: "regular_category_ids",
    watchedTags: "watched_tags",
    watchingFirstPostTags: "watching_first_post_tags",
    trackedTags: "tracked_tags",
    mutedTags: "muted_tags",
    trackedCategoryIds: "tracked_category_ids",
    watchedCategoryIds: "watched_category_ids",
    watchedFirstPostCategoryIds: "watched_first_post_category_ids",
    systemAvatarUploadId: "system_avatar_upload_id",
    systemAvatarTemplate: "system_avatar_template",
    mutedUsernames: "muted_usernames",
    ignoredUsernames: "ignored_usernames",
    allowedPmUsernames: "allowed_pm_usernames",
    mailingListPostsPerDay: "mailing_list_posts_per_day",
    canChangeBio: "can_change_bio",
    canChangeLocation: "can_change_location",
    canChangeWebsite: "can_change_website",
    canChangeTrackingPreferences: "can_change_tracking_preferences",
    userApiKeys: "user_api_keys",
    userPasskeys: "user_passkeys",
    sidebarTags: "sidebar_tags",
    sidebarCategoryIds: "sidebar_category_ids",
    displaySidebarTags: "display_sidebar_tags",
    canPickThemeWithCustomHomepage: "can_pick_theme_with_custom_homepage",
    userAuthTokens: "user_auth_tokens",
    userNotificationSchedule: "user_notification_schedule",
    useLogoSmallAsAvatar: "use_logo_small_as_avatar",
    featuredUserBadgeIds: "featured_user_badge_ids",
    invitedBy: "invited_by",
    groupUsers: "group_users",
    userOption: "user_option",
  },
});
