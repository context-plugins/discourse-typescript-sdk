import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersDeactivateJsonResponse = {
  success: string;
};

export const adminUsersDeactivateJsonResponseSchema: Schema<AdminUsersDeactivateJsonResponse> =
  s.object<AdminUsersDeactivateJsonResponse>({
    success: s.string(),
  });
