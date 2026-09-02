import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type CShowJsonResponse = {
  category: Category;
};

export const cShowJsonResponseSchema: Schema<CShowJsonResponse> = s.object<CShowJsonResponse>({
  category: categorySchema,
});
