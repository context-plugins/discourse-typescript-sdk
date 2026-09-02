import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TTimerJsonResponse = {
  success?: string;
  executeAt?: string;
  duration?: string | null;
  basedOnLastPost?: boolean;
  closed?: boolean;
  categoryId?: number | null;
};

export const tTimerJsonResponseSchema: Schema<TTimerJsonResponse> = s.object<TTimerJsonResponse>({
  success: s.optional(s.string()),
  executeAt: s.optional(s.string()),
  duration: s.optionalNullable(s.string()),
  basedOnLastPost: s.optional(s.boolean()),
  closed: s.optional(s.boolean()),
  categoryId: s.optionalNullable(s.number()),
  _keysMap: {
    executeAt: "execute_at",
    basedOnLastPost: "based_on_last_post",
    categoryId: "category_id",
  },
});
