import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Post1 = {
  raw: string;
  editReason?: string;
};

export const post1Schema: Schema<Post1> = s.object<Post1>({
  raw: s.string(),
  editReason: s.optional(s.string()),
  _keysMap: {
    editReason: "edit_reason",
  },
});
