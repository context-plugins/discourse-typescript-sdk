import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Poster1 = {
  extras?: string;
  description?: string;
  userId?: number;
  primaryGroupId?: number | null;
};

export const poster1Schema: Schema<Poster1> = s.object<Poster1>({
  extras: s.optional(s.string()),
  description: s.optional(s.string()),
  userId: s.optional(s.number()),
  primaryGroupId: s.optionalNullable(s.number()),
  _keysMap: {
    userId: "user_id",
    primaryGroupId: "primary_group_id",
  },
});
