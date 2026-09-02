import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeDetails = {
  True: "true",
  False: "false",
} as const;
export type IncludeDetails = (typeof IncludeDetails)[keyof typeof IncludeDetails] | (string & {});

export const includeDetailsSchema: EnumSchema<IncludeDetails> = s.enumOf<IncludeDetails>(IncludeDetails);
