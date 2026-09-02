import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryType = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  available: boolean;
  visible: boolean;
  configurationSchema: Record<string, unknown>;
};

export const categoryTypeSchema: Schema<CategoryType> = s.object<CategoryType>({
  id: s.string(),
  name: s.string(),
  title: s.string(),
  description: s.string(),
  icon: s.string(),
  available: s.boolean(),
  visible: s.boolean(),
  configurationSchema: s.record(s.string(), s.unknown()),
  _keysMap: {
    configurationSchema: "configuration_schema",
  },
});
