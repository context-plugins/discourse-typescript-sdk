import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TopTag = {
  id: number;
  name: string;
  slug: string;
};

export const topTagSchema: Schema<TopTag> = s.object<TopTag>({
  id: s.int(),
  name: s.string(),
  slug: s.string(),
});
