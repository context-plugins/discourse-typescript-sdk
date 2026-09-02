import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary = {
  id: number;
  canAct: boolean;
};

export const actionsSummarySchema: Schema<ActionsSummary> = s.object<ActionsSummary>({
  id: s.number(),
  canAct: s.boolean(),
  _keysMap: {
    canAct: "can_act",
  },
});
