import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requiredTagGroupSchema, type RequiredTagGroup } from "./required-tag-group.js";

export type Category4 = {
  id: number;
  name: string;
  color: string;
  textColor: string;
  styleType?: string;
  emoji?: string | null;
  icon?: string | null;
  slug: string;
  topicCount: number;
  postCount: number;
  position: number;
  description?: string | null;
  descriptionText?: string | null;
  descriptionExcerpt?: string | null;
  topicUrl: string;
  readRestricted: boolean;
  permission: number | null;
  notificationLevel: number;
  topicTemplate: string | null;
  topicTitlePlaceholder: string | null;
  hasChildren: boolean;
  subcategoryCount: number | null;
  sortOrder: string | null;
  sortAscending: boolean | null;
  showSubcategoryList: boolean;
  numFeaturedTopics: number;
  defaultView: string | null;
  subcategoryListStyle: string;
  defaultTopPeriod: string;
  defaultListFilter: string;
  minimumRequiredTags: number;
  navigateToFirstPostAfterRead: boolean;
  allowedTags?: Record<string, unknown>[];
  allowedTagGroups?: Record<string, unknown>[];
  allowGlobalTags: boolean;
  requiredTagGroups: RequiredTagGroup[];
  readOnlyBanner: string | null;
  uploadedLogo: string | null;
  uploadedLogoDark: string | null;
  uploadedBackground: string | null;
  uploadedBackgroundDark: string | null;
  canEdit: boolean;
  customFields?: Record<string, unknown> | null;
  parentCategoryId?: number;
  formTemplateIds?: Record<string, unknown>[];
  categoryTypes?: Record<string, unknown>;
};

export const category4Schema: Schema<Category4> = s.object<Category4>({
  id: s.number(),
  name: s.string(),
  color: s.string(),
  textColor: s.string(),
  styleType: s.optional(s.string()),
  emoji: s.optionalNullable(s.string()),
  icon: s.optionalNullable(s.string()),
  slug: s.string(),
  topicCount: s.number(),
  postCount: s.number(),
  position: s.number(),
  description: s.optionalNullable(s.string()),
  descriptionText: s.optionalNullable(s.string()),
  descriptionExcerpt: s.optionalNullable(s.string()),
  topicUrl: s.string(),
  readRestricted: s.boolean(),
  permission: s.nullable(s.number()),
  notificationLevel: s.number(),
  topicTemplate: s.nullable(s.string()),
  topicTitlePlaceholder: s.nullable(s.string()),
  hasChildren: s.boolean(),
  subcategoryCount: s.nullable(s.number()),
  sortOrder: s.nullable(s.string()),
  sortAscending: s.nullable(s.boolean()),
  showSubcategoryList: s.boolean(),
  numFeaturedTopics: s.number(),
  defaultView: s.nullable(s.string()),
  subcategoryListStyle: s.string(),
  defaultTopPeriod: s.string(),
  defaultListFilter: s.string(),
  minimumRequiredTags: s.number(),
  navigateToFirstPostAfterRead: s.boolean(),
  allowedTags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  allowedTagGroups: s.optional(s.array(s.record(s.string(), s.unknown()))),
  allowGlobalTags: s.boolean(),
  requiredTagGroups: s.array(s.lazy(() => requiredTagGroupSchema)),
  readOnlyBanner: s.nullable(s.string()),
  uploadedLogo: s.nullable(s.string()),
  uploadedLogoDark: s.nullable(s.string()),
  uploadedBackground: s.nullable(s.string()),
  uploadedBackgroundDark: s.nullable(s.string()),
  canEdit: s.boolean(),
  customFields: s.optionalNullable(s.record(s.string(), s.unknown())),
  parentCategoryId: s.optional(s.number()),
  formTemplateIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
  categoryTypes: s.optional(s.record(s.string(), s.unknown())),
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
    topicTemplate: "topic_template",
    topicTitlePlaceholder: "topic_title_placeholder",
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
    allowedTags: "allowed_tags",
    allowedTagGroups: "allowed_tag_groups",
    allowGlobalTags: "allow_global_tags",
    requiredTagGroups: "required_tag_groups",
    readOnlyBanner: "read_only_banner",
    uploadedLogo: "uploaded_logo",
    uploadedLogoDark: "uploaded_logo_dark",
    uploadedBackground: "uploaded_background",
    uploadedBackgroundDark: "uploaded_background_dark",
    canEdit: "can_edit",
    customFields: "custom_fields",
    parentCategoryId: "parent_category_id",
    formTemplateIds: "form_template_ids",
    categoryTypes: "category_types",
  },
});
