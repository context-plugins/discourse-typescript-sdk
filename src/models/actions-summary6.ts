import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary6 = {
  id?: number;
  canAct?: boolean;
};

export const actionsSummary6Schema: Schema<ActionsSummary6> = s.object<ActionsSummary6>({
  id: s.optional(s.number()),
  canAct: s.optional(s.boolean()),
  _keysMap: {
    canAct: "can_act",
  },
});
