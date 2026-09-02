import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Creator = {
  id: number;
  username: string;
  name?: string | null;
  avatarTemplate: string;
};

export const creatorSchema: Schema<Creator> = s.object<Creator>({
  id: s.number(),
  username: s.string(),
  name: s.optionalNullable(s.string()),
  avatarTemplate: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
