import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionsSummary8 = {
  id: number;
  count: number;
  hidden: boolean;
  canAct: boolean;
};

export const actionsSummary8Schema: Schema<ActionsSummary8> = s.object<ActionsSummary8>({
  id: s.int(),
  count: s.int(),
  hidden: s.boolean(),
  canAct: s.boolean(),
  _keysMap: {
    canAct: "can_act",
  },
});
