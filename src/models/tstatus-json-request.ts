import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enabledSchema, type Enabled } from "./enabled.js";
import { status1Schema, type Status1 } from "./status1.js";

export type TStatusJsonRequest = {
  status: Status1;
  enabled: Enabled;
  until?: string;
};

export const tStatusJsonRequestSchema: Schema<TStatusJsonRequest> = s.object<TStatusJsonRequest>({
  status: status1Schema,
  enabled: enabledSchema,
  until: s.optional(s.string()),
});
