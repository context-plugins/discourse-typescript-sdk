import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Badge = {
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
  longDescription: string;
  slug: string;
  manuallyGrantable: boolean;
  query: string | null;
  trigger: number | null;
  targetPosts: boolean;
  autoRevoke: boolean;
  showPosts: boolean;
  i18NName?: string | null;
  imageUploadId: number | null;
  badgeTypeId: number;
  showInPostHeader: boolean;
};

export const badgeSchema: Schema<Badge> = s.object<Badge>({
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
  longDescription: s.string(),
  slug: s.string(),
  manuallyGrantable: s.boolean(),
  query: s.nullable(s.string()),
  trigger: s.nullable(s.number()),
  targetPosts: s.boolean(),
  autoRevoke: s.boolean(),
  showPosts: s.boolean(),
  i18NName: s.optionalNullable(s.string()),
  imageUploadId: s.nullable(s.number()),
  badgeTypeId: s.number(),
  showInPostHeader: s.boolean(),
  _keysMap: {
    grantCount: "grant_count",
    allowTitle: "allow_title",
    multipleGrant: "multiple_grant",
    imageUrl: "image_url",
    badgeGroupingId: "badge_grouping_id",
    longDescription: "long_description",
    manuallyGrantable: "manually_grantable",
    targetPosts: "target_posts",
    autoRevoke: "auto_revoke",
    showPosts: "show_posts",
    i18NName: "i18n_name",
    imageUploadId: "image_upload_id",
    badgeTypeId: "badge_type_id",
    showInPostHeader: "show_in_post_header",
  },
});
