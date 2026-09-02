import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Enabled = {
  True: "true",
  False: "false",
} as const;
export type Enabled = (typeof Enabled)[keyof typeof Enabled] | (string & {});

export const enabledSchema: EnumSchema<Enabled> = s.enumOf<Enabled>(Enabled);
