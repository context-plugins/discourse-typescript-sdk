import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tag = {
  id: number;
  name: string;
  slug: string;
};

export const tagSchema: Schema<Tag> = s.object<Tag>({
  id: s.number(),
  name: s.string(),
  slug: s.string(),
});
