import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryLocalizationSchema, type CategoryLocalization } from "./category-localization.js";
import { permissionsSchema, type Permissions } from "./permissions.js";

export type CategoriesJsonRequest = {
  name: string;
  color?: string;
  textColor?: string;
  styleType?: string;
  emoji?: string;
  icon?: string;
  parentCategoryId?: number;
  allowBadges?: boolean;
  slug?: string;
  topicFeaturedLinksAllowed?: boolean;
  permissions?: Permissions;
  searchPriority?: number;
  formTemplateIds?: Record<string, unknown>[];
  categoryLocalizations?: CategoryLocalization[];
};

export const categoriesJsonRequestSchema: Schema<CategoriesJsonRequest> = s.object<CategoriesJsonRequest>({
  name: s.string(),
  color: s.optional(s.string()),
  textColor: s.optional(s.string()),
  styleType: s.optional(s.string()),
  emoji: s.optional(s.string()),
  icon: s.optional(s.string()),
  parentCategoryId: s.optional(s.number()),
  allowBadges: s.optional(s.boolean()),
  slug: s.optional(s.string()),
  topicFeaturedLinksAllowed: s.optional(s.boolean()),
  permissions: s.optional(s.lazy(() => permissionsSchema)),
  searchPriority: s.optional(s.number()),
  formTemplateIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
  categoryLocalizations: s.optional(s.array(s.lazy(() => categoryLocalizationSchema))),
  _keysMap: {
    textColor: "text_color",
    styleType: "style_type",
    parentCategoryId: "parent_category_id",
    allowBadges: "allow_badges",
    topicFeaturedLinksAllowed: "topic_featured_links_allowed",
    searchPriority: "search_priority",
    formTemplateIds: "form_template_ids",
    categoryLocalizations: "category_localizations",
  },
});
