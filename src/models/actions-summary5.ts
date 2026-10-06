import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary5 = {
  /** ID of the action type (e.g., 2 for like) */
  id?: number;
  /** Number of times this action has been performed */
  count?: number;
  /** Whether the current user has performed this action */
  acted?: boolean;
  /** Whether the current user can undo this action */
  canUndo?: boolean;
  /** Whether the current user can perform this action */
  canAct?: boolean;
};

export const actionsSummary5Schema: Schema<ActionsSummary5> = s.object<ActionsSummary5>({
  id: s.optional(s.int()),
  count: s.optional(s.int()),
  acted: s.optional(s.boolean()),
  canUndo: s.optional(s.boolean()),
  canAct: s.optional(s.boolean()),
  _keysMap: {
    canUndo: "can_undo",
    canAct: "can_act",
  },
});
