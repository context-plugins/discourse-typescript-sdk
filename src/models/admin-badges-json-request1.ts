import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBadgesJsonRequest1 = {
  name: string;
  badgeTypeId: number;
};

export const adminBadgesJsonRequest1Schema: Schema<AdminBadgesJsonRequest1> =
  s.object<AdminBadgesJsonRequest1>({
    name: s.string(),
    badgeTypeId: s.number(),
    _keysMap: {
      badgeTypeId: "badge_type_id",
    },
  });
