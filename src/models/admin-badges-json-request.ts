import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBadgesJsonRequest = {
  name: string;
  badgeTypeId: number;
};

export const adminBadgesJsonRequestSchema: Schema<AdminBadgesJsonRequest> = s.object<AdminBadgesJsonRequest>({
  name: s.string(),
  badgeTypeId: s.number(),
  _keysMap: {
    badgeTypeId: "badge_type_id",
  },
});
