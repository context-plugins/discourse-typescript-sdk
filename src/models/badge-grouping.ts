import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BadgeGrouping = {
  id: number;
  name: string;
  description: string | null;
  position: number;
  system: boolean;
};

export const badgeGroupingSchema: Schema<BadgeGrouping> = s.object<BadgeGrouping>({
  id: s.number(),
  name: s.string(),
  description: s.nullable(s.string()),
  position: s.number(),
  system: s.boolean(),
});
