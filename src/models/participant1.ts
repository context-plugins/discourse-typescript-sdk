import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Participant1 = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
  postCount: number;
  primaryGroupName: string | null;
  flairName: string | null;
  flairUrl: string | null;
  flairColor: string | null;
  flairBgColor: string | null;
  flairGroupId?: number | null;
  admin: boolean;
  moderator: boolean;
  trustLevel: number;
};

export const participant1Schema: Schema<Participant1> = s.object<Participant1>({
  id: s.number(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  postCount: s.number(),
  primaryGroupName: s.nullable(s.string()),
  flairName: s.nullable(s.string()),
  flairUrl: s.nullable(s.string()),
  flairColor: s.nullable(s.string()),
  flairBgColor: s.nullable(s.string()),
  flairGroupId: s.optionalNullable(s.number()),
  admin: s.boolean(),
  moderator: s.boolean(),
  trustLevel: s.number(),
  _keysMap: {
    avatarTemplate: "avatar_template",
    postCount: "post_count",
    primaryGroupName: "primary_group_name",
    flairName: "flair_name",
    flairUrl: "flair_url",
    flairColor: "flair_color",
    flairBgColor: "flair_bg_color",
    flairGroupId: "flair_group_id",
    trustLevel: "trust_level",
  },
});
