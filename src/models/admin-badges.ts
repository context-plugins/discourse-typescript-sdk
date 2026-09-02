import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggersSchema, type Triggers } from "./triggers.js";

export type AdminBadges = {
  protectedSystemFields: Record<string, unknown>[];
  triggers: Triggers;
  badgeIds: Record<string, unknown>[];
  badgeGroupingIds: Record<string, unknown>[];
  badgeTypeIds: Record<string, unknown>[];
};

export const adminBadgesSchema: Schema<AdminBadges> = s.object<AdminBadges>({
  protectedSystemFields: s.array(s.record(s.string(), s.unknown())),
  triggers: triggersSchema,
  badgeIds: s.array(s.record(s.string(), s.unknown())),
  badgeGroupingIds: s.array(s.record(s.string(), s.unknown())),
  badgeTypeIds: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    protectedSystemFields: "protected_system_fields",
    badgeIds: "badge_ids",
    badgeGroupingIds: "badge_grouping_ids",
    badgeTypeIds: "badge_type_ids",
  },
});
