import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBadgesJsonRequest = {
  /** The name for the new badge. */
  name: string;
  /** The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze. */
  badgeTypeId: number;
};

export const adminBadgesJsonRequestSchema: Schema<AdminBadgesJsonRequest> = s.object<AdminBadgesJsonRequest>({
  name: s.string(),
  badgeTypeId: s.int(),
  _keysMap: {
    badgeTypeId: "badge_type_id",
  },
});
