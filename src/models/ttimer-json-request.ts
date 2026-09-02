import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TTimerJsonRequest = {
  time?: string;
  statusType?: string;
  basedOnLastPost?: boolean;
  categoryId?: number;
};

export const tTimerJsonRequestSchema: Schema<TTimerJsonRequest> = s.object<TTimerJsonRequest>({
  time: s.optional(s.string()),
  statusType: s.optional(s.string()),
  basedOnLastPost: s.optional(s.boolean()),
  categoryId: s.optional(s.number()),
  _keysMap: {
    statusType: "status_type",
    basedOnLastPost: "based_on_last_post",
    categoryId: "category_id",
  },
});
