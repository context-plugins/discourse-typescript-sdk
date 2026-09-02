import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adminBadgesSchema, type AdminBadges } from "./admin-badges.js";
import { badgeGroupingSchema, type BadgeGrouping } from "./badge-grouping.js";
import { badgeTypeSchema, type BadgeType } from "./badge-type.js";
import { badgeSchema, type Badge } from "./badge.js";

export type AdminBadgesJsonResponse = {
  badges: Badge[];
  badgeTypes: BadgeType[];
  badgeGroupings: BadgeGrouping[];
  adminBadges: AdminBadges;
};

export const adminBadgesJsonResponseSchema: Schema<AdminBadgesJsonResponse> =
  s.object<AdminBadgesJsonResponse>({
    badges: s.array(s.lazy(() => badgeSchema)),
    badgeTypes: s.array(s.lazy(() => badgeTypeSchema)),
    badgeGroupings: s.array(s.lazy(() => badgeGroupingSchema)),
    adminBadges: adminBadgesSchema,
    _keysMap: {
      badgeTypes: "badge_types",
      badgeGroupings: "badge_groupings",
      adminBadges: "admin_badges",
    },
  });
