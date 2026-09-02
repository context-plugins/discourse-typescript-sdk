import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  total: number;
  limit: number;
  offset: number;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  total: s.number(),
  limit: s.number(),
  offset: s.number(),
});
