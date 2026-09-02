import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Extras = {
  visibleGroupNames: Record<string, unknown>[];
};

export const extrasSchema: Schema<Extras> = s.object<Extras>({
  visibleGroupNames: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    visibleGroupNames: "visible_group_names",
  },
});
