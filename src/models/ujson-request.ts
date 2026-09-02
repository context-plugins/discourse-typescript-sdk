import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UJsonRequest = {
  name?: string;
  externalIds?: Record<string, unknown>;
};

export const uJsonRequestSchema: Schema<UJsonRequest> = s.object<UJsonRequest>({
  name: s.optional(s.string()),
  externalIds: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    externalIds: "external_ids",
  },
});
