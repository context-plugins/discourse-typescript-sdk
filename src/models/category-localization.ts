import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryLocalization = {
  id?: number;
  locale: string;
  name: string;
  description?: string;
};

export const categoryLocalizationSchema: Schema<CategoryLocalization> = s.object<CategoryLocalization>({
  id: s.optional(s.number()),
  locale: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
});
