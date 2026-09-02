import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Flag = {
  Active: "active",
  New: "new",
  Staff: "staff",
  Suspended: "suspended",
  Blocked: "blocked",
  Suspect: "suspect",
} as const;
export type Flag = (typeof Flag)[keyof typeof Flag] | (string & {});

export const flagSchema: EnumSchema<Flag> = s.enumOf<Flag>(Flag);
