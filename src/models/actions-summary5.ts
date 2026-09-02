import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary5 = {
  id?: number;
  count?: number;
  acted?: boolean;
  canUndo?: boolean;
  canAct?: boolean;
};

export const actionsSummary5Schema: Schema<ActionsSummary5> = s.object<ActionsSummary5>({
  id: s.optional(s.number()),
  count: s.optional(s.number()),
  acted: s.optional(s.boolean()),
  canUndo: s.optional(s.boolean()),
  canAct: s.optional(s.boolean()),
  _keysMap: {
    canUndo: "can_undo",
    canAct: "can_act",
  },
});
