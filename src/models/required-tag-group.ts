import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequiredTagGroup = {
  name: string;
  minCount: number;
};

export const requiredTagGroupSchema: Schema<RequiredTagGroup> = s.object<RequiredTagGroup>({
  name: s.string(),
  minCount: s.number(),
  _keysMap: {
    minCount: "min_count",
  },
});
