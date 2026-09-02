import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Asc = {
  True: "true",
} as const;
export type Asc = (typeof Asc)[keyof typeof Asc] | (string & {});

export const ascSchema: EnumSchema<Asc> = s.enumOf<Asc>(Asc);
