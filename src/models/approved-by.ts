import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApprovedBy = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
};

export const approvedBySchema: Schema<ApprovedBy> = s.object<ApprovedBy>({
  id: s.number(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
