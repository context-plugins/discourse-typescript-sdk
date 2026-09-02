import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UJsonResponse1 = {
  success: string;
  user: Record<string, unknown>;
};

export const uJsonResponse1Schema: Schema<UJsonResponse1> = s.object<UJsonResponse1>({
  success: s.string(),
  user: s.record(s.string(), s.unknown()),
});
