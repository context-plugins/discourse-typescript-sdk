import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ParentTag = {
  id: number;
  name: string;
  slug: string;
};

export const parentTagSchema: Schema<ParentTag> = s.object<ParentTag>({
  id: s.number(),
  name: s.string(),
  slug: s.string(),
});
