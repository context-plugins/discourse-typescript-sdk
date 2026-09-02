import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryListSchema, type CategoryList } from "./category-list.js";

export type CategoriesJsonResponse1 = {
  categoryList: CategoryList;
};

export const categoriesJsonResponse1Schema: Schema<CategoriesJsonResponse1> =
  s.object<CategoriesJsonResponse1>({
    categoryList: categoryListSchema,
    _keysMap: {
      categoryList: "category_list",
    },
  });
