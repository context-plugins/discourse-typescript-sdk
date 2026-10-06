import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BadgeType = {
  id: number;
  name: string;
  sortOrder: number;
};

export const badgeTypeSchema: Schema<BadgeType> = s.object<BadgeType>({
  id: s.int(),
  name: s.string(),
  sortOrder: s.int(),
  _keysMap: {
    sortOrder: "sort_order",
  },
});
