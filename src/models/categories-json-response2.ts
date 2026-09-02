import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category2Schema, type Category2 } from "./category2.js";

export type CategoriesJsonResponse2 = {
  success: string;
  category: Category2;
};

export const categoriesJsonResponse2Schema: Schema<CategoriesJsonResponse2> =
  s.object<CategoriesJsonResponse2>({
    success: s.string(),
    category: category2Schema,
  });
