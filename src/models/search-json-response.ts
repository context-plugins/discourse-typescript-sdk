import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupedSearchResultSchema, type GroupedSearchResult } from "./grouped-search-result.js";
import { tagSchema, type Tag } from "./tag.js";

export type SearchJsonResponse = {
  posts: Record<string, unknown>[];
  users: Record<string, unknown>[];
  categories: Record<string, unknown>[];
  tags: Tag[];
  groups: Record<string, unknown>[];
  groupedSearchResult: GroupedSearchResult;
};

export const searchJsonResponseSchema: Schema<SearchJsonResponse> = s.object<SearchJsonResponse>({
  posts: s.array(s.record(s.string(), s.unknown())),
  users: s.array(s.record(s.string(), s.unknown())),
  categories: s.array(s.record(s.string(), s.unknown())),
  tags: s.array(s.lazy(() => tagSchema)),
  groups: s.array(s.record(s.string(), s.unknown())),
  groupedSearchResult: groupedSearchResultSchema,
  _keysMap: {
    groupedSearchResult: "grouped_search_result",
  },
});
