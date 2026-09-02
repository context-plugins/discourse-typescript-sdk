import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PenaltyCounts = {
  silenced: number;
  suspended: number;
};

export const penaltyCountsSchema: Schema<PenaltyCounts> = s.object<PenaltyCounts>({
  silenced: s.number(),
  suspended: s.number(),
});
