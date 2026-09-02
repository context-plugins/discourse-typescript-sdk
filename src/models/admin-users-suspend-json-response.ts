import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { suspensionSchema, type Suspension } from "./suspension.js";

export type AdminUsersSuspendJsonResponse = {
  suspension: Suspension;
};

export const adminUsersSuspendJsonResponseSchema: Schema<AdminUsersSuspendJsonResponse> =
  s.object<AdminUsersSuspendJsonResponse>({
    suspension: suspensionSchema,
  });
