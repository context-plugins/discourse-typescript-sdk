import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data = {
  badgeId?: number;
  badgeName?: string;
  badgeSlug?: string;
  badgeTitle?: boolean;
  username?: string;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  badgeId: s.optional(s.number()),
  badgeName: s.optional(s.string()),
  badgeSlug: s.optional(s.string()),
  badgeTitle: s.optional(s.boolean()),
  username: s.optional(s.string()),
  _keysMap: {
    badgeId: "badge_id",
    badgeName: "badge_name",
    badgeSlug: "badge_slug",
    badgeTitle: "badge_title",
  },
});
