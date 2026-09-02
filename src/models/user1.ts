import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User1 = {
  id?: number;
  username?: string;
  name?: string;
  avatarTemplate?: string;
};

export const user1Schema: Schema<User1> = s.object<User1>({
  id: s.optional(s.number()),
  username: s.optional(s.string()),
  name: s.optional(s.string()),
  avatarTemplate: s.optional(s.string()),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
