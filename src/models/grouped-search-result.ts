import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./extra.js";

export type GroupedSearchResult = {
  morePosts: string | null;
  moreUsers: string | null;
  moreCategories: string | null;
  term: string;
  searchLogId: number;
  moreFullPageResults: string | null;
  canCreateTopic: boolean;
  error: string | null;
  extra?: Extra;
  postIds: Record<string, unknown>[];
  userIds: Record<string, unknown>[];
  categoryIds: Record<string, unknown>[];
  tagIds: Record<string, unknown>[];
  groupIds: Record<string, unknown>[];
};

export const groupedSearchResultSchema: Schema<GroupedSearchResult> = s.object<GroupedSearchResult>({
  morePosts: s.nullable(s.string()),
  moreUsers: s.nullable(s.string()),
  moreCategories: s.nullable(s.string()),
  term: s.string(),
  searchLogId: s.number(),
  moreFullPageResults: s.nullable(s.string()),
  canCreateTopic: s.boolean(),
  error: s.nullable(s.string()),
  extra: s.optional(s.lazy(() => extraSchema)),
  postIds: s.array(s.record(s.string(), s.unknown())),
  userIds: s.array(s.record(s.string(), s.unknown())),
  categoryIds: s.array(s.record(s.string(), s.unknown())),
  tagIds: s.array(s.record(s.string(), s.unknown())),
  groupIds: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    morePosts: "more_posts",
    moreUsers: "more_users",
    moreCategories: "more_categories",
    searchLogId: "search_log_id",
    moreFullPageResults: "more_full_page_results",
    canCreateTopic: "can_create_topic",
    postIds: "post_ids",
    userIds: "user_ids",
    categoryIds: "category_ids",
    tagIds: "tag_ids",
    groupIds: "group_ids",
  },
});
