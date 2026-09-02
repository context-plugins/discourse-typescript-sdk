import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { topic5Schema, type Topic5 } from "./topic5.js";

export type TJsonRequest = {
  topic?: Topic5;
};

export const tJsonRequestSchema: Schema<TJsonRequest> = s.object<TJsonRequest>({
  topic: s.optional(s.lazy(() => topic5Schema)),
});
