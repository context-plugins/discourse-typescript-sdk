import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Poster = {
  extras: string;
  description: string;
  userId: number;
  primaryGroupId: number | null;
};

export const posterSchema: Schema<Poster> = s.object<Poster>({
  extras: s.string(),
  description: s.string(),
  userId: s.number(),
  primaryGroupId: s.nullable(s.number()),
  _keysMap: {
    userId: "user_id",
    primaryGroupId: "primary_group_id",
  },
});
