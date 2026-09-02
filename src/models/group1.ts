import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Group1 = {
  id: number;
  automatic: boolean;
  name: string;
  userCount?: number;
  mentionableLevel: number;
  messageableLevel: number;
  visibilityLevel: number;
  primaryGroup: boolean;
  title: string | null;
  grantTrustLevel: string | null;
  incomingEmail: string | null;
  hasMessages: boolean;
  flairUrl: string | null;
  flairBgColor: string | null;
  flairColor: string | null;
  bioRaw: string | null;
  bioCooked: string | null;
  bioExcerpt: string | null;
  publicAdmission: boolean;
  publicExit: boolean;
  allowMembershipRequests: boolean;
  fullName: string | null;
  defaultNotificationLevel: number;
  membershipRequestTemplate: string | null;
  isGroupUser: boolean;
  membersVisibilityLevel: number;
  canSeeMembers: boolean;
  canAdminGroup: boolean;
  canEditGroup?: boolean;
  publishReadState: boolean;
  isGroupOwnerDisplay: boolean;
  mentionable: boolean;
  messageable: boolean;
  automaticMembershipEmailDomains: string | null;
  smtpUpdatedAt?: string | null;
  smtpUpdatedBy?: Record<string, unknown> | null;
  smtpEnabled?: boolean;
  smtpServer: string | null;
  smtpPort: string | null;
  smtpSslMode: number | null;
  emailUsername: string | null;
  emailFromAlias?: string | null;
  emailPassword: string | null;
  messageCount: number;
  allowUnknownSenderTopicReplies: boolean;
  associatedGroupIds?: Record<string, unknown>[];
  watchingCategoryIds: Record<string, unknown>[];
  trackingCategoryIds: Record<string, unknown>[];
  watchingFirstPostCategoryIds: Record<string, unknown>[];
  regularCategoryIds: Record<string, unknown>[];
  mutedCategoryIds: Record<string, unknown>[];
  watchingTags?: Record<string, unknown>[];
  watchingFirstPostTags?: Record<string, unknown>[];
  trackingTags?: Record<string, unknown>[];
  regularTags?: Record<string, unknown>[];
  mutedTags?: Record<string, unknown>[];
};

export const group1Schema: Schema<Group1> = s.object<Group1>({
  id: s.number(),
  automatic: s.boolean(),
  name: s.string(),
  userCount: s.optional(s.number()),
  mentionableLevel: s.number(),
  messageableLevel: s.number(),
  visibilityLevel: s.number(),
  primaryGroup: s.boolean(),
  title: s.nullable(s.string()),
  grantTrustLevel: s.nullable(s.string()),
  incomingEmail: s.nullable(s.string()),
  hasMessages: s.boolean(),
  flairUrl: s.nullable(s.string()),
  flairBgColor: s.nullable(s.string()),
  flairColor: s.nullable(s.string()),
  bioRaw: s.nullable(s.string()),
  bioCooked: s.nullable(s.string()),
  bioExcerpt: s.nullable(s.string()),
  publicAdmission: s.boolean(),
  publicExit: s.boolean(),
  allowMembershipRequests: s.boolean(),
  fullName: s.nullable(s.string()),
  defaultNotificationLevel: s.number(),
  membershipRequestTemplate: s.nullable(s.string()),
  isGroupUser: s.boolean(),
  membersVisibilityLevel: s.number(),
  canSeeMembers: s.boolean(),
  canAdminGroup: s.boolean(),
  canEditGroup: s.optional(s.boolean()),
  publishReadState: s.boolean(),
  isGroupOwnerDisplay: s.boolean(),
  mentionable: s.boolean(),
  messageable: s.boolean(),
  automaticMembershipEmailDomains: s.nullable(s.string()),
  smtpUpdatedAt: s.optionalNullable(s.string()),
  smtpUpdatedBy: s.optionalNullable(s.record(s.string(), s.unknown())),
  smtpEnabled: s.optional(s.boolean()),
  smtpServer: s.nullable(s.string()),
  smtpPort: s.nullable(s.string()),
  smtpSslMode: s.nullable(s.number()),
  emailUsername: s.nullable(s.string()),
  emailFromAlias: s.optionalNullable(s.string()),
  emailPassword: s.nullable(s.string()),
  messageCount: s.number(),
  allowUnknownSenderTopicReplies: s.boolean(),
  associatedGroupIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
  watchingCategoryIds: s.array(s.record(s.string(), s.unknown())),
  trackingCategoryIds: s.array(s.record(s.string(), s.unknown())),
  watchingFirstPostCategoryIds: s.array(s.record(s.string(), s.unknown())),
  regularCategoryIds: s.array(s.record(s.string(), s.unknown())),
  mutedCategoryIds: s.array(s.record(s.string(), s.unknown())),
  watchingTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  watchingFirstPostTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  trackingTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  regularTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  mutedTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    userCount: "user_count",
    mentionableLevel: "mentionable_level",
    messageableLevel: "messageable_level",
    visibilityLevel: "visibility_level",
    primaryGroup: "primary_group",
    grantTrustLevel: "grant_trust_level",
    incomingEmail: "incoming_email",
    hasMessages: "has_messages",
    flairUrl: "flair_url",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
    bioRaw: "bio_raw",
    bioCooked: "bio_cooked",
    bioExcerpt: "bio_excerpt",
    publicAdmission: "public_admission",
    publicExit: "public_exit",
    allowMembershipRequests: "allow_membership_requests",
    fullName: "full_name",
    defaultNotificationLevel: "default_notification_level",
    membershipRequestTemplate: "membership_request_template",
    isGroupUser: "is_group_user",
    membersVisibilityLevel: "members_visibility_level",
    canSeeMembers: "can_see_members",
    canAdminGroup: "can_admin_group",
    canEditGroup: "can_edit_group",
    publishReadState: "publish_read_state",
    isGroupOwnerDisplay: "is_group_owner_display",
    automaticMembershipEmailDomains: "automatic_membership_email_domains",
    smtpUpdatedAt: "smtp_updated_at",
    smtpUpdatedBy: "smtp_updated_by",
    smtpEnabled: "smtp_enabled",
    smtpServer: "smtp_server",
    smtpPort: "smtp_port",
    smtpSslMode: "smtp_ssl_mode",
    emailUsername: "email_username",
    emailFromAlias: "email_from_alias",
    emailPassword: "email_password",
    messageCount: "message_count",
    allowUnknownSenderTopicReplies: "allow_unknown_sender_topic_replies",
    associatedGroupIds: "associated_group_ids",
    watchingCategoryIds: "watching_category_ids",
    trackingCategoryIds: "tracking_category_ids",
    watchingFirstPostCategoryIds: "watching_first_post_category_ids",
    regularCategoryIds: "regular_category_ids",
    mutedCategoryIds: "muted_category_ids",
    watchingTags: "watching_tags",
    watchingFirstPostTags: "watching_first_post_tags",
    trackingTags: "tracking_tags",
    regularTags: "regular_tags",
    mutedTags: "muted_tags",
  },
});
