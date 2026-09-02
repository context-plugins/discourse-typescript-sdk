import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Poster6 = {
  extras?: string | null;
  description?: string;
  userId?: number;
  primaryGroupId?: number | null;
};

export const poster6Schema: Schema<Poster6> = s.object<Poster6>({
  extras: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  userId: s.optional(s.number()),
  primaryGroupId: s.optionalNullable(s.number()),
  _keysMap: {
    userId: "user_id",
    primaryGroupId: "primary_group_id",
  },
});
