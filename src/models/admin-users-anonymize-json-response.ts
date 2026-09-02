import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersAnonymizeJsonResponse = {
  success: string;
  username: string;
};

export const adminUsersAnonymizeJsonResponseSchema: Schema<AdminUsersAnonymizeJsonResponse> =
  s.object<AdminUsersAnonymizeJsonResponse>({
    success: s.string(),
    username: s.string(),
  });
