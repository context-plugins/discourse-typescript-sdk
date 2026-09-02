import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersLogOutJsonResponse = {
  success: string;
};

export const adminUsersLogOutJsonResponseSchema: Schema<AdminUsersLogOutJsonResponse> =
  s.object<AdminUsersLogOutJsonResponse>({
    success: s.string(),
  });
