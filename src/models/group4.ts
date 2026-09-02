import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Group4 = {
  id: number;
  automatic: boolean;
  name: string;
  displayName: string;
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
  isGroupUser?: boolean;
  isGroupOwner?: boolean;
  membersVisibilityLevel: number;
  canSeeMembers: boolean;
  canAdminGroup: boolean;
  canEditGroup?: boolean;
  publishReadState: boolean;
};

export const group4Schema: Schema<Group4> = s.object<Group4>({
  id: s.number(),
  automatic: s.boolean(),
  name: s.string(),
  displayName: s.string(),
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
  isGroupUser: s.optional(s.boolean()),
  isGroupOwner: s.optional(s.boolean()),
  membersVisibilityLevel: s.number(),
  canSeeMembers: s.boolean(),
  canAdminGroup: s.boolean(),
  canEditGroup: s.optional(s.boolean()),
  publishReadState: s.boolean(),
  _keysMap: {
    displayName: "display_name",
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
    isGroupOwner: "is_group_owner",
    membersVisibilityLevel: "members_visibility_level",
    canSeeMembers: "can_see_members",
    canAdminGroup: "can_admin_group",
    canEditGroup: "can_edit_group",
    publishReadState: "publish_read_state",
  },
});
