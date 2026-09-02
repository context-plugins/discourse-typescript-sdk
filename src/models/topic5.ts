import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Topic5 = {
  title?: string;
  categoryId?: number;
};

export const topic5Schema: Schema<Topic5> = s.object<Topic5>({
  title: s.optional(s.string()),
  categoryId: s.optional(s.number()),
  _keysMap: {
    categoryId: "category_id",
  },
});
