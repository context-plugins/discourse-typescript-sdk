import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";

export type CategoryList = {
  canCreateCategory: boolean;
  canCreateTopic: boolean;
  categories: Category1[];
};

export const categoryListSchema: Schema<CategoryList> = s.object<CategoryList>({
  canCreateCategory: s.boolean(),
  canCreateTopic: s.boolean(),
  categories: s.array(s.lazy(() => category1Schema)),
  _keysMap: {
    canCreateCategory: "can_create_category",
    canCreateTopic: "can_create_topic",
  },
});
