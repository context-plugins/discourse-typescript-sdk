import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Extras3 = {
  categories?: Record<string, unknown>[];
};

export const extras3Schema: Schema<Extras3> = s.object<Extras3>({
  categories: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
