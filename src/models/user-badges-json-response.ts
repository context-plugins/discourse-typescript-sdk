import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { badgeTypeSchema, type BadgeType } from "./badge-type.js";
import { badge3Schema, type Badge3 } from "./badge3.js";
import { grantedBySchema, type GrantedBy } from "./granted-by.js";
import { userBadgeSchema, type UserBadge } from "./user-badge.js";

export type UserBadgesJsonResponse = {
  badges?: Badge3[];
  badgeTypes?: BadgeType[];
  grantedBies?: GrantedBy[];
  userBadges: UserBadge[];
};

export const userBadgesJsonResponseSchema: Schema<UserBadgesJsonResponse> = s.object<UserBadgesJsonResponse>({
  badges: s.optional(s.array(s.lazy(() => badge3Schema))),
  badgeTypes: s.optional(s.array(s.lazy(() => badgeTypeSchema))),
  grantedBies: s.optional(s.array(s.lazy(() => grantedBySchema))),
  userBadges: s.array(s.lazy(() => userBadgeSchema)),
  _keysMap: {
    badgeTypes: "badge_types",
    grantedBies: "granted_bies",
    userBadges: "user_badges",
  },
});
