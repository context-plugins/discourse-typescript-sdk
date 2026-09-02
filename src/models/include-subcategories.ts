import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeSubcategories = {
  True: "true",
  False: "false",
} as const;
export type IncludeSubcategories =
  | (typeof IncludeSubcategories)[keyof typeof IncludeSubcategories]
  | (string & {});

export const includeSubcategoriesSchema: EnumSchema<IncludeSubcategories> =
  s.enumOf<IncludeSubcategories>(IncludeSubcategories);
