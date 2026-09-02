import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableCategoryTypeSchema, type AvailableCategoryType } from "./available-category-type.js";
import { categorySettingSchema, type CategorySetting } from "./category-setting.js";
import { groupPermissionSchema, type GroupPermission } from "./group-permission.js";
import { requiredTagGroupSchema, type RequiredTagGroup } from "./required-tag-group.js";

export type Category = {
  id: number;
  name: string;
  color: string;
  textColor: string;
  styleType: string;
  emoji: string | null;
  icon: string | null;
  slug: string;
  locale?: string | null;
  topicCount: number;
  postCount: number;
  position: number;
  description: string | null;
  descriptionText: string | null;
  descriptionExcerpt: string | null;
  topicUrl: string | null;
  readRestricted: boolean;
  permission: number | null;
  notificationLevel: number;
  canEdit: boolean;
  topicTemplate: string | null;
  topicTitlePlaceholder: string | null;
  formTemplateIds?: Record<string, unknown>[];
  hasChildren: boolean | null;
  subcategoryCount: number | null;
  sortOrder: string | null;
  sortAscending: string | null;
  showSubcategoryList: boolean;
  numFeaturedTopics: number;
  defaultView: string | null;
  subcategoryListStyle: string;
  defaultTopPeriod: string;
  defaultListFilter: string;
  minimumRequiredTags: number;
  navigateToFirstPostAfterRead: boolean;
  customFields: Record<string, unknown>;
  allowedTags?: Record<string, unknown>[];
  allowedTagGroups?: Record<string, unknown>[];
  allowGlobalTags?: boolean;
  requiredTagGroups: RequiredTagGroup[];
  categorySetting?: CategorySetting;
  categoryLocalizations?: Record<string, unknown>[];
  readOnlyBanner: string | null;
  availableGroups: Record<string, unknown>[];
  autoCloseHours: string | null;
  autoCloseBasedOnLastPost: boolean;
  allowUnlimitedOwnerEditsOnFirstPost: boolean;
  defaultSlowModeSeconds: string | null;
  groupPermissions: GroupPermission[];
  emailIn: string | null;
  emailInAllowStrangers: boolean;
  mailinglistMirror: boolean;
  allTopicsWiki: boolean;
  canDelete: boolean;
  allowBadges: boolean;
  topicFeaturedLinkAllowed: boolean;
  searchPriority: number;
  topicPostingReviewGroupIds: number[];
  replyPostingReviewGroupIds: number[];
  uploadedLogo: string | null;
  uploadedLogoDark: string | null;
  uploadedBackground: string | null;
  uploadedBackgroundDark: string | null;
  categoryTypes?: Record<string, unknown>;
  categoryTypeSettings?: Record<string, unknown>;
  availableCategoryTypes?: AvailableCategoryType[];
};

export const categorySchema: Schema<Category> = s.object<Category>({
  id: s.number(),
  name: s.string(),
  color: s.string(),
  textColor: s.string(),
  styleType: s.string(),
  emoji: s.nullable(s.string()),
  icon: s.nullable(s.string()),
  slug: s.string(),
  locale: s.optionalNullable(s.string()),
  topicCount: s.number(),
  postCount: s.number(),
  position: s.number(),
  description: s.nullable(s.string()),
  descriptionText: s.nullable(s.string()),
  descriptionExcerpt: s.nullable(s.string()),
  topicUrl: s.nullable(s.string()),
  readRestricted: s.boolean(),
  permission: s.nullable(s.number()),
  notificationLevel: s.number(),
  canEdit: s.boolean(),
  topicTemplate: s.nullable(s.string()),
  topicTitlePlaceholder: s.nullable(s.string()),
  formTemplateIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
  hasChildren: s.nullable(s.boolean()),
  subcategoryCount: s.nullable(s.number()),
  sortOrder: s.nullable(s.string()),
  sortAscending: s.nullable(s.string()),
  showSubcategoryList: s.boolean(),
  numFeaturedTopics: s.number(),
  defaultView: s.nullable(s.string()),
  subcategoryListStyle: s.string(),
  defaultTopPeriod: s.string(),
  defaultListFilter: s.string(),
  minimumRequiredTags: s.number(),
  navigateToFirstPostAfterRead: s.boolean(),
  customFields: s.record(s.string(), s.unknown()),
  allowedTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  allowedTagGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  allowGlobalTags: s.optional(s.boolean()),
  requiredTagGroups: s.array(s.lazy(() => requiredTagGroupSchema)),
  categorySetting: s.optional(s.lazy(() => categorySettingSchema)),
  categoryLocalizations: s.optional(s.array(s.record(s.string(), s.unknown()))),
  readOnlyBanner: s.nullable(s.string()),
  availableGroups: s.array(s.record(s.string(), s.unknown())),
  autoCloseHours: s.nullable(s.string()),
  autoCloseBasedOnLastPost: s.boolean(),
  allowUnlimitedOwnerEditsOnFirstPost: s.boolean(),
  defaultSlowModeSeconds: s.nullable(s.string()),
  groupPermissions: s.array(s.lazy(() => groupPermissionSchema)),
  emailIn: s.nullable(s.string()),
  emailInAllowStrangers: s.boolean(),
  mailinglistMirror: s.boolean(),
  allTopicsWiki: s.boolean(),
  canDelete: s.boolean(),
  allowBadges: s.boolean(),
  topicFeaturedLinkAllowed: s.boolean(),
  searchPriority: s.number(),
  topicPostingReviewGroupIds: s.array(s.number()),
  replyPostingReviewGroupIds: s.array(s.number()),
  uploadedLogo: s.nullable(s.string()),
  uploadedLogoDark: s.nullable(s.string()),
  uploadedBackground: s.nullable(s.string()),
  uploadedBackgroundDark: s.nullable(s.string()),
  categoryTypes: s.optional(s.record(s.string(), s.unknown())),
  categoryTypeSettings: s.optional(s.record(s.string(), s.unknown())),
  availableCategoryTypes: s.optional(s.array(s.lazy(() => availableCategoryTypeSchema))),
  _keysMap: {
    textColor: "text_color",
    styleType: "style_type",
    topicCount: "topic_count",
    postCount: "post_count",
    descriptionText: "description_text",
    descriptionExcerpt: "description_excerpt",
    topicUrl: "topic_url",
    readRestricted: "read_restricted",
    notificationLevel: "notification_level",
    canEdit: "can_edit",
    topicTemplate: "topic_template",
    topicTitlePlaceholder: "topic_title_placeholder",
    formTemplateIds: "form_template_ids",
    hasChildren: "has_children",
    subcategoryCount: "subcategory_count",
    sortOrder: "sort_order",
    sortAscending: "sort_ascending",
    showSubcategoryList: "show_subcategory_list",
    numFeaturedTopics: "num_featured_topics",
    defaultView: "default_view",
    subcategoryListStyle: "subcategory_list_style",
    defaultTopPeriod: "default_top_period",
    defaultListFilter: "default_list_filter",
    minimumRequiredTags: "minimum_required_tags",
    navigateToFirstPostAfterRead: "navigate_to_first_post_after_read",
    customFields: "custom_fields",
    allowedTags: "allowed_tags",
    allowedTagGroups: "allowed_tag_groups",
    allowGlobalTags: "allow_global_tags",
    requiredTagGroups: "required_tag_groups",
    categorySetting: "category_setting",
    categoryLocalizations: "category_localizations",
    readOnlyBanner: "read_only_banner",
    availableGroups: "available_groups",
    autoCloseHours: "auto_close_hours",
    autoCloseBasedOnLastPost: "auto_close_based_on_last_post",
    allowUnlimitedOwnerEditsOnFirstPost: "allow_unlimited_owner_edits_on_first_post",
    defaultSlowModeSeconds: "default_slow_mode_seconds",
    groupPermissions: "group_permissions",
    emailIn: "email_in",
    emailInAllowStrangers: "email_in_allow_strangers",
    mailinglistMirror: "mailinglist_mirror",
    allTopicsWiki: "all_topics_wiki",
    canDelete: "can_delete",
    allowBadges: "allow_badges",
    topicFeaturedLinkAllowed: "topic_featured_link_allowed",
    searchPriority: "search_priority",
    topicPostingReviewGroupIds: "topic_posting_review_group_ids",
    replyPostingReviewGroupIds: "reply_posting_review_group_ids",
    uploadedLogo: "uploaded_logo",
    uploadedLogoDark: "uploaded_logo_dark",
    uploadedBackground: "uploaded_background",
    uploadedBackgroundDark: "uploaded_background_dark",
    categoryTypes: "category_types",
    categoryTypeSettings: "category_type_settings",
    availableCategoryTypes: "available_category_types",
  },
});
