import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserBadge = {
  id: number;
  grantedAt: string;
  groupingPosition: number;
  isFavorite: string | null;
  canFavorite: boolean;
  badgeId: number;
  grantedById: number;
};

export const userBadgeSchema: Schema<UserBadge> = s.object<UserBadge>({
  id: s.number(),
  grantedAt: s.string(),
  groupingPosition: s.number(),
  isFavorite: s.nullable(s.string()),
  canFavorite: s.boolean(),
  badgeId: s.number(),
  grantedById: s.number(),
  _keysMap: {
    grantedAt: "granted_at",
    groupingPosition: "grouping_position",
    isFavorite: "is_favorite",
    canFavorite: "can_favorite",
    badgeId: "badge_id",
    grantedById: "granted_by_id",
  },
});
