import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkCount = {
  url: string;
  internal: boolean;
  reflection: boolean;
  title: string;
  clicks: number;
};

export const linkCountSchema: Schema<LinkCount> = s.object<LinkCount>({
  url: s.string(),
  internal: s.boolean(),
  reflection: s.boolean(),
  title: s.string(),
  clicks: s.number(),
});
