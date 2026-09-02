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
  userChange: s.number(),
  none: s.number(),
  postRevision: s.number(),
  trustLevelChange: s.number(),
  postAction: s.number(),
  _keysMap: {
    userChange: "user_change",
    postRevision: "post_revision",
    trustLevelChange: "trust_level_change",
    postAction: "post_action",
  },
});
