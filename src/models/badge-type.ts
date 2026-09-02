import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BadgeType = {
  id: number;
  name: string;
  sortOrder: number;
};

export const badgeTypeSchema: Schema<BadgeType> = s.object<BadgeType>({
  id: s.number(),
  name: s.string(),
  sortOrder: s.number(),
  _keysMap: {
    sortOrder: "sort_order",
  },
});
