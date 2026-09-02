import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SuspendedBy = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
};

export const suspendedBySchema: Schema<SuspendedBy> = s.object<SuspendedBy>({
  id: s.number(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
