import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Extra = {
  categories?: string | null;
};

export const extraSchema: Schema<Extra> = s.object<Extra>({
  categories: s.optionalNullable(s.string()),
});
