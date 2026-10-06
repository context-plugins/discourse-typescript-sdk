import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Triggers = {
  userChange: number;
  none: number;
  postRevision: number;
  trustLevelChange: number;
  postAction: number;
};

export const triggersSchema: Schema<Triggers> = s.object<Triggers>({
  userChange: s.int(),
  none: s.int(),
  postRevision: s.int(),
  trustLevelChange: s.int(),
  postAction: s.int(),
  _keysMap: {
    userChange: "user_change",
    postRevision: "post_revision",
    trustLevelChange: "trust_level_change",
    postAction: "post_action",
  },
});
