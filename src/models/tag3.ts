import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tag3 = {
  id?: number;
  text?: string;
  name?: string;
  count?: number;
  pmCount?: number;
  targetTag?: string | null;
};

export const tag3Schema: Schema<Tag3> = s.object<Tag3>({
  id: s.optional(s.number()),
  text: s.optional(s.string()),
  name: s.optional(s.string()),
  count: s.optional(s.number()),
  pmCount: s.optional(s.number()),
  targetTag: s.optionalNullable(s.string()),
  _keysMap: {
    pmCount: "pm_count",
    targetTag: "target_tag",
  },
});
