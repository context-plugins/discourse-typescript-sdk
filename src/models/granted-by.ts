import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantedBy = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
  flairName: string | null;
  admin: boolean;
  moderator: boolean;
  trustLevel: number;
};

export const grantedBySchema: Schema<GrantedBy> = s.object<GrantedBy>({
  id: s.int(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  flairName: s.nullable(s.string()),
  admin: s.boolean(),
  moderator: s.boolean(),
  trustLevel: s.int(),
  _keysMap: {
    avatarTemplate: "avatar_template",
    flairName: "flair_name",
    trustLevel: "trust_level",
  },
});
