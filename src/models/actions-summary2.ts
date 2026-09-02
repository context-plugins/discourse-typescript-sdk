import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary2 = {
  id: number;
  count?: number;
  acted?: boolean;
  canUndo?: boolean;
  canAct?: boolean;
};

export const actionsSummary2Schema: Schema<ActionsSummary2> = s.object<ActionsSummary2>({
  id: s.number(),
  count: s.optional(s.number()),
  acted: s.optional(s.boolean()),
  canUndo: s.optional(s.boolean()),
  canAct: s.optional(s.boolean()),
  _keysMap: {
    canUndo: "can_undo",
    canAct: "can_act",
  },
});
