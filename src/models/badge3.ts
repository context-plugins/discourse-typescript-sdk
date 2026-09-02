import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Badge3 = {
  id: number;
  name: string;
  description: string;
  grantCount: number;
  allowTitle: boolean;
  multipleGrant: boolean;
  icon: string;
  imageUrl: string | null;
  listable: boolean;
  enabled: boolean;
  badgeGroupingId: number;
  system: boolean;
  slug: string;
  manuallyGrantable: boolean;
  badgeTypeId: number;
};

export const badge3Schema: Schema<Badge3> = s.object<Badge3>({
  id: s.number(),
  name: s.string(),
  description: s.string(),
  grantCount: s.number(),
  allowTitle: s.boolean(),
  multipleGrant: s.boolean(),
  icon: s.string(),
  imageUrl: s.nullable(s.string()),
  listable: s.boolean(),
  enabled: s.boolean(),
  badgeGroupingId: s.number(),
  system: s.boolean(),
  slug: s.string(),
  manuallyGrantable: s.boolean(),
  badgeTypeId: s.number(),
  _keysMap: {
    grantCount: "grant_count",
    allowTitle: "allow_title",
    multipleGrant: "multiple_grant",
    imageUrl: "image_url",
    badgeGroupingId: "badge_grouping_id",
    manuallyGrantable: "manually_grantable",
    badgeTypeId: "badge_type_id",
  },
});
