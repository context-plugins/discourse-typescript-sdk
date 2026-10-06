import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary2 = {
  /** `2`: like, `3`, `4`, `6`, `7`, `8`: flag */
  id: number;
  count?: number;
  acted?: boolean;
  canUndo?: boolean;
  canAct?: boolean;
};

export const actionsSummary2Schema: Schema<ActionsSummary2> = s.object<ActionsSummary2>({
  id: s.int(),
  count: s.optional(s.int()),
  acted: s.optional(s.boolean()),
  canUndo: s.optional(s.boolean()),
  canAct: s.optional(s.boolean()),
  _keysMap: {
    canUndo: "can_undo",
    canAct: "can_act",
  },
});
