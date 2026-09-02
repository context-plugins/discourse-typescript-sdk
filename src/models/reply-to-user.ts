import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReplyToUser = {
  id?: number;
  username: string;
  name?: string;
  avatarTemplate: string;
};

export const replyToUserSchema: Schema<ReplyToUser> = s.object<ReplyToUser>({
  id: s.optional(s.number()),
  username: s.string(),
  name: s.optional(s.string()),
  avatarTemplate: s.string(),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
