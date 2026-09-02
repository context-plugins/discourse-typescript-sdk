import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Extras2 = {
  typeFilters: Record<string, unknown>[];
};

export const extras2Schema: Schema<Extras2> = s.object<Extras2>({
  typeFilters: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    typeFilters: "type_filters",
  },
});
