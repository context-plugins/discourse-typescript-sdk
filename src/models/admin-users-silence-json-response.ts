import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { silenceSchema, type Silence } from "./silence.js";

export type AdminUsersSilenceJsonResponse = {
  silence: Silence;
};

export const adminUsersSilenceJsonResponseSchema: Schema<AdminUsersSilenceJsonResponse> =
  s.object<AdminUsersSilenceJsonResponse>({
    silence: silenceSchema,
  });
