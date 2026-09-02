import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { badgeTypeSchema, type BadgeType } from "./badge-type.js";
import { badge1Schema, type Badge1 } from "./badge1.js";

export type AdminBadgesJsonResponse2 = {
  badgeTypes: BadgeType[];
  badge: Badge1;
};

export const adminBadgesJsonResponse2Schema: Schema<AdminBadgesJsonResponse2> =
  s.object<AdminBadgesJsonResponse2>({
    badgeTypes: s.array(s.lazy(() => badgeTypeSchema)),
    badge: badge1Schema,
    _keysMap: {
      badgeTypes: "badge_types",
    },
  });
