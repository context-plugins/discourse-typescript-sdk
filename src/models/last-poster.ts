import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastPoster = {
  id: number;
  username: string;
  name: string;
  avatarTemplate: string;
};

export const lastPosterSchema: Schema<LastPoster> = s.object<LastPoster>({
  id: s.number(),
  username: s.string(),
  name: s.string(),
  avatarTemplate: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
