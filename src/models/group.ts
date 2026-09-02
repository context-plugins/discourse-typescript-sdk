import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Group = {
  name: string;
  fullName?: string;
  bioRaw?: string;
  usernames?: string;
  ownerUsernames?: string;
  automaticMembershipEmailDomains?: string;
  visibilityLevel?: number;
  primaryGroup?: boolean;
  flairIcon?: string;
  flairUploadId?: number;
  flairBgColor?: string;
  publicAdmission?: boolean;
  publicExit?: boolean;
  defaultNotificationLevel?: number;
  mutedCategoryIds?: number[];
  regularCategoryIds?: number[];
  watchingCategoryIds?: number[];
  trackingCategoryIds?: number[];
  watchingFirstPostCategoryIds?: number[];
};

export const groupSchema: Schema<Group> = s.object<Group>({
  name: s.string(),
  fullName: s.optional(s.string()),
  bioRaw: s.optional(s.string()),
  usernames: s.optional(s.string()),
  ownerUsernames: s.optional(s.string()),
  automaticMembershipEmailDomains: s.optional(s.string()),
  visibilityLevel: s.optional(s.number()),
  primaryGroup: s.optional(s.boolean()),
  flairIcon: s.optional(s.string()),
  flairUploadId: s.optional(s.number()),
  flairBgColor: s.optional(s.string()),
  publicAdmission: s.optional(s.boolean()),
  publicExit: s.optional(s.boolean()),
  defaultNotificationLevel: s.optional(s.number()),
  mutedCategoryIds: s.optional(s.array(s.number())),
  regularCategoryIds: s.optional(s.array(s.number())),
  watchingCategoryIds: s.optional(s.array(s.number())),
  trackingCategoryIds: s.optional(s.array(s.number())),
  watchingFirstPostCategoryIds: s.optional(s.array(s.number())),
  _keysMap: {
    fullName: "full_name",
    bioRaw: "bio_raw",
    ownerUsernames: "owner_usernames",
    automaticMembershipEmailDomains: "automatic_membership_email_domains",
    visibilityLevel: "visibility_level",
    primaryGroup: "primary_group",
    flairIcon: "flair_icon",
    flairUploadId: "flair_upload_id",
    flairBgColor: "flair_bg_color",
    publicAdmission: "public_admission",
    publicExit: "public_exit",
    defaultNotificationLevel: "default_notification_level",
    mutedCategoryIds: "muted_category_ids",
    regularCategoryIds: "regular_category_ids",
    watchingCategoryIds: "watching_category_ids",
    trackingCategoryIds: "tracking_category_ids",
    watchingFirstPostCategoryIds: "watching_first_post_category_ids",
  },
});
