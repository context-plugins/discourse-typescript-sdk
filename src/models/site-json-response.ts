import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessControlSchema, type AccessControl } from "./access-control.js";
import { archetypeSchema, type Archetype } from "./archetype.js";
import { categoryTypeSchema, type CategoryType } from "./category-type.js";
import { category4Schema, type Category4 } from "./category4.js";
import { group5Schema, type Group5 } from "./group5.js";
import { notificationTypesSchema, type NotificationTypes } from "./notification-types.js";
import { postActionTypeSchema, type PostActionType } from "./post-action-type.js";
import { postTypesSchema, type PostTypes } from "./post-types.js";
import { topTagSchema, type TopTag } from "./top-tag.js";
import { topicFlagTypeSchema, type TopicFlagType } from "./topic-flag-type.js";
import { trustLevelsSchema, type TrustLevels } from "./trust-levels.js";
import { userColorSchemeSchema, type UserColorScheme } from "./user-color-scheme.js";
import { userThemeSchema, type UserTheme } from "./user-theme.js";
import { userTipsSchema, type UserTips } from "./user-tips.js";

export type SiteJsonResponse = {
  defaultArchetype: string;
  notificationTypes: NotificationTypes;
  postTypes: PostTypes;
  trustLevels: TrustLevels;
  userTips?: UserTips;
  groups: Group5[];
  filters: Record<string, unknown>[];
  homepageChoices: Record<string, unknown>[];
  periods: Record<string, unknown>[];
  topMenuItems: Record<string, unknown>[];
  anonymousTopMenuItems: Record<string, unknown>[];
  uncategorizedCategoryId: number;
  userFieldMaxLength: number;
  postActionTypes: PostActionType[];
  topicFlagTypes: TopicFlagType[];
  canCreateTag: boolean;
  canTagTopics: boolean;
  canTagPms: boolean;
  tagsFilterRegexp: string;
  topTags: TopTag[];
  wizardRequired?: boolean;
  canAssociateGroups?: boolean;
  emailConfigured: boolean;
  upcomingChangesWithCss?: string[];
  topicFeaturedLinkAllowedCategoryIds: Record<string, unknown>[];
  userThemes: UserTheme[];
  userColorSchemes: UserColorScheme[];
  defaultLightColorScheme: Record<string, unknown> | null;
  defaultDarkColorScheme: Record<string, unknown> | null;
  censoredRegexp: Record<string, unknown>[];
  customEmojiTranslation: Record<string, unknown>;
  watchedWordsReplace: Record<string, unknown> | null;
  watchedWordsLink: Record<string, unknown> | null;
  markdownAdditionalOptions?: Record<string, unknown>;
  hashtagConfigurations?: Record<string, unknown>;
  hashtagIcons?: Record<string, unknown>;
  displayedAboutPluginStatGroups?: Record<string, unknown>[];
  categories: Category4[];
  archetypes: Archetype[];
  userFields: Record<string, unknown>[];
  authProviders: Record<string, unknown>[];
  whispersAllowedGroupsNames?: Record<string, unknown>[];
  deniedEmojis?: Record<string, unknown>[];
  validFlagAppliesToTypes?: Record<string, unknown>[];
  navigationMenuSiteTopTags?: Record<string, unknown>[];
  fullNameRequiredForSignup: boolean;
  fullNameVisibleInSignup: boolean;
  adminConfigLoginRoutes?: Record<string, unknown>[];
  accessControl?: AccessControl;
  permanentUpcomingChangeNames?: string[];
  categoryTypes?: CategoryType[];
};

export const siteJsonResponseSchema: Schema<SiteJsonResponse> = s.object<SiteJsonResponse>({
  defaultArchetype: s.string(),
  notificationTypes: notificationTypesSchema,
  postTypes: postTypesSchema,
  trustLevels: trustLevelsSchema,
  userTips: s.optional(s.lazy(() => userTipsSchema)),
  groups: s.array(s.lazy(() => group5Schema)),
  filters: s.array(s.record(s.string(), s.unknown())),
  homepageChoices: s.array(s.record(s.string(), s.unknown())),
  periods: s.array(s.record(s.string(), s.unknown())),
  topMenuItems: s.array(s.record(s.string(), s.unknown())),
  anonymousTopMenuItems: s.array(s.record(s.string(), s.unknown())),
  uncategorizedCategoryId: s.number(),
  userFieldMaxLength: s.number(),
  postActionTypes: s.array(s.lazy(() => postActionTypeSchema)),
  topicFlagTypes: s.array(s.lazy(() => topicFlagTypeSchema)),
  canCreateTag: s.boolean(),
  canTagTopics: s.boolean(),
  canTagPms: s.boolean(),
  tagsFilterRegexp: s.string(),
  topTags: s.array(s.lazy(() => topTagSchema)),
  wizardRequired: s.optional(s.boolean()),
  canAssociateGroups: s.optional(s.boolean()),
  emailConfigured: s.boolean(),
  upcomingChangesWithCss: s.optional(s.array(s.string())),
  topicFeaturedLinkAllowedCategoryIds: s.array(s.record(s.string(), s.unknown())),
  userThemes: s.array(s.lazy(() => userThemeSchema)),
  userColorSchemes: s.array(s.lazy(() => userColorSchemeSchema)),
  defaultLightColorScheme: s.nullable(s.record(s.string(), s.unknown())),
  defaultDarkColorScheme: s.nullable(s.record(s.string(), s.unknown())),
  censoredRegexp: s.array(s.record(s.string(), s.unknown())),
  customEmojiTranslation: s.record(s.string(), s.unknown()),
  watchedWordsReplace: s.nullable(s.record(s.string(), s.unknown())),
  watchedWordsLink: s.nullable(s.record(s.string(), s.unknown())),
  markdownAdditionalOptions: s.optional(s.record(s.string(), s.unknown())),
  hashtagConfigurations: s.optional(s.record(s.string(), s.unknown())),
  hashtagIcons: s.optional(s.record(s.string(), s.unknown())),
  displayedAboutPluginStatGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  categories: s.array(s.lazy(() => category4Schema)),
  archetypes: s.array(s.lazy(() => archetypeSchema)),
  userFields: s.array(s.record(s.string(), s.unknown())),
  authProviders: s.array(s.record(s.string(), s.unknown())),
  whispersAllowedGroupsNames: s.optional(s.array(s.record(s.string(), s.unknown()))),
  deniedEmojis: s.optional(s.array(s.record(s.string(), s.unknown()))),
  validFlagAppliesToTypes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  navigationMenuSiteTopTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  fullNameRequiredForSignup: s.boolean(),
  fullNameVisibleInSignup: s.boolean(),
  adminConfigLoginRoutes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  accessControl: s.optional(s.lazy(() => accessControlSchema)),
  permanentUpcomingChangeNames: s.optional(s.array(s.string())),
  categoryTypes: s.optional(s.array(s.lazy(() => categoryTypeSchema))),
  _keysMap: {
    defaultArchetype: "default_archetype",
    notificationTypes: "notification_types",
    postTypes: "post_types",
    trustLevels: "trust_levels",
    userTips: "user_tips",
    homepageChoices: "homepage_choices",
    topMenuItems: "top_menu_items",
    anonymousTopMenuItems: "anonymous_top_menu_items",
    uncategorizedCategoryId: "uncategorized_category_id",
    userFieldMaxLength: "user_field_max_length",
    postActionTypes: "post_action_types",
    topicFlagTypes: "topic_flag_types",
    canCreateTag: "can_create_tag",
    canTagTopics: "can_tag_topics",
    canTagPms: "can_tag_pms",
    tagsFilterRegexp: "tags_filter_regexp",
    topTags: "top_tags",
    wizardRequired: "wizard_required",
    canAssociateGroups: "can_associate_groups",
    emailConfigured: "email_configured",
    upcomingChangesWithCss: "upcoming_changes_with_css",
    topicFeaturedLinkAllowedCategoryIds: "topic_featured_link_allowed_category_ids",
    userThemes: "user_themes",
    userColorSchemes: "user_color_schemes",
    defaultLightColorScheme: "default_light_color_scheme",
    defaultDarkColorScheme: "default_dark_color_scheme",
    censoredRegexp: "censored_regexp",
    customEmojiTranslation: "custom_emoji_translation",
    watchedWordsReplace: "watched_words_replace",
    watchedWordsLink: "watched_words_link",
    markdownAdditionalOptions: "markdown_additional_options",
    hashtagConfigurations: "hashtag_configurations",
    hashtagIcons: "hashtag_icons",
    displayedAboutPluginStatGroups: "displayed_about_plugin_stat_groups",
    userFields: "user_fields",
    authProviders: "auth_providers",
    whispersAllowedGroupsNames: "whispers_allowed_groups_names",
    deniedEmojis: "denied_emojis",
    validFlagAppliesToTypes: "valid_flag_applies_to_types",
    navigationMenuSiteTopTags: "navigation_menu_site_top_tags",
    fullNameRequiredForSignup: "full_name_required_for_signup",
    fullNameVisibleInSignup: "full_name_visible_in_signup",
    adminConfigLoginRoutes: "admin_config_login_routes",
    accessControl: "access_control",
    permanentUpcomingChangeNames: "permanent_upcoming_change_names",
    categoryTypes: "category_types",
  },
});
