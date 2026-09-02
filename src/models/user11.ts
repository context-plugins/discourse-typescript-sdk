import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User11 = {
  id: number;
  username: string;
  name: string | null;
  avatarTemplate: string;
  title: string | null;
};

export const user11Schema: Schema<User11> = s.object<User11>({
  id: s.number(),
  username: s.string(),
  name: s.nullable(s.string()),
  avatarTemplate: s.string(),
  title: s.nullable(s.string()),
  _keysMap: {
    avatarTemplate: "avatar_template",
  },
});
