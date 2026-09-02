import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User2 = {
  id?: number;
  username?: string;
  name?: string | null;
  avatarTemplate?: string;
};

export const user2Schema: Schema<User2> = s.object<User2>({
  id: s.optional(s.number()),
  username: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  avatarTemplate: s.optional(s.string()),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
