import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersActivateJsonResponse = {
  success: string;
};

export const adminUsersActivateJsonResponseSchema: Schema<AdminUsersActivateJsonResponse> =
  s.object<AdminUsersActivateJsonResponse>({
    success: s.string(),
  });
