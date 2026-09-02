import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PenaltyCounts1 = {
  silenced: number;
  suspended: number;
  total: number;
};

export const penaltyCounts1Schema: Schema<PenaltyCounts1> = s.object<PenaltyCounts1>({
  silenced: s.number(),
  suspended: s.number(),
  total: s.number(),
});
