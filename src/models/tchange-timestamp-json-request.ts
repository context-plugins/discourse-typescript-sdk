import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TChangeTimestampJsonRequest = {
  timestamp: string;
};

export const tChangeTimestampJsonRequestSchema: Schema<TChangeTimestampJsonRequest> =
  s.object<TChangeTimestampJsonRequest>({
    timestamp: s.string(),
  });
