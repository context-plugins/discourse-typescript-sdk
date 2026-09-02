import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Badge1 = {
  id: number;
  name: string;
  description: string;
  grantCount: number;
  allowTitle: boolean;
  multipleGrant: boolean;
  icon: string;
  imageUrl: string | null;
  imageUploadId: number | null;
  listable: boolean;
  enabled: boolean;
  badgeGroupingId: number;
  system: boolean;
  longDescription: string;
  slug: string;
  manuallyGrantable: boolean;
  query: string | null;
  trigger: string | null;
  targetPosts: boolean;
  autoRevoke: boolean;
  showPosts: boolean;
  badgeTypeId: number;
  showInPostHeader: boolean;
};

export const badge1Schema: Schema<Badge1> = s.object<Badge1>({
  id: s.number(),
  name: s.string(),
  description: s.string(),
  grantCount: s.number(),
  allowTitle: s.boolean(),
  multipleGrant: s.boolean(),
  icon: s.string(),
  imageUrl: s.nullable(s.string()),
  imageUploadId: s.nullable(s.number()),
  listable: s.boolean(),
  enabled: s.boolean(),
  badgeGroupingId: s.number(),
  system: s.boolean(),
  longDescription: s.string(),
  slug: s.string(),
  manuallyGrantable: s.boolean(),
  query: s.nullable(s.string()),
  trigger: s.nullable(s.string()),
  targetPosts: s.boolean(),
  autoRevoke: s.boolean(),
  showPosts: s.boolean(),
  badgeTypeId: s.number(),
  showInPostHeader: s.boolean(),
  _keysMap: {
    grantCount: "grant_count",
    allowTitle: "allow_title",
    multipleGrant: "multiple_grant",
    imageUrl: "image_url",
    imageUploadId: "image_upload_id",
    badgeGroupingId: "badge_grouping_id",
    longDescription: "long_description",
    manuallyGrantable: "manually_grantable",
    targetPosts: "target_posts",
    autoRevoke: "auto_revoke",
    showPosts: "show_posts",
    badgeTypeId: "badge_type_id",
    showInPostHeader: "show_in_post_header",
  },
});
