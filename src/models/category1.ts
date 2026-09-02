import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category1 = {
  id: number;
  name: string;
  color: string;
  textColor: string;
  styleType: string;
  emoji: string | null;
  icon: string | null;
  slug: string;
  topicCount: number;
  postCount: number;
  position: number;
  description: string | null;
  descriptionText: string | null;
  descriptionExcerpt: string | null;
  topicUrl: string | null;
  readRestricted: boolean;
  permission: number;
  notificationLevel: number;
  canEdit: boolean;
  topicTemplate: string | null;
  topicTitlePlaceholder: string | null;
  hasChildren: boolean;
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
  topicsDay: number;
  topicsWeek: number;
  topicsMonth: number;
  topicsYear: number;
  topicsAllTime: number;
  isUncategorized?: boolean;
  subcategoryIds: Record<string, unknown>[];
  subcategoryList?: Record<string, unknown>[] | null;
  uploadedLogo: string | null;
  uploadedLogoDark: string | null;
  uploadedBackground: string | null;
  uploadedBackgroundDark: string | null;
};

export const category1Schema: Schema<Category1> = s.object<Category1>({
  id: s.number(),
  name: s.string(),
  color: s.string(),
  textColor: s.string(),
  styleType: s.string(),
  emoji: s.nullable(s.string()),
  icon: s.nullable(s.string()),
  slug: s.string(),
  topicCount: s.number(),
  postCount: s.number(),
  position: s.number(),
  description: s.nullable(s.string()),
  descriptionText: s.nullable(s.string()),
  descriptionExcerpt: s.nullable(s.string()),
  topicUrl: s.nullable(s.string()),
  readRestricted: s.boolean(),
  permission: s.number(),
  notificationLevel: s.number(),
  canEdit: s.boolean(),
  topicTemplate: s.nullable(s.string()),
  topicTitlePlaceholder: s.nullable(s.string()),
  hasChildren: s.boolean(),
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
  topicsDay: s.number(),
  topicsWeek: s.number(),
  topicsMonth: s.number(),
  topicsYear: s.number(),
  topicsAllTime: s.number(),
  isUncategorized: s.optional(s.boolean()),
  subcategoryIds: s.array(s.record(s.string(), s.unknown())),
  subcategoryList: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  uploadedLogo: s.nullable(s.string()),
  uploadedLogoDark: s.nullable(s.string()),
  uploadedBackground: s.nullable(s.string()),
  uploadedBackgroundDark: s.nullable(s.string()),
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
    topicsDay: "topics_day",
    topicsWeek: "topics_week",
    topicsMonth: "topics_month",
    topicsYear: "topics_year",
    topicsAllTime: "topics_all_time",
    isUncategorized: "is_uncategorized",
    subcategoryIds: "subcategory_ids",
    subcategoryList: "subcategory_list",
    uploadedLogo: "uploaded_logo",
    uploadedLogoDark: "uploaded_logo_dark",
    uploadedBackground: "uploaded_background",
    uploadedBackgroundDark: "uploaded_background_dark",
  },
});
