import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFields = {
  firstName?: string | null;
};

export const customFieldsSchema: Schema<CustomFields> = s.object<CustomFields>({
  firstName: s.optionalNullable(s.string()),
  _keysMap: {
    firstName: "first_name",
  },
});
