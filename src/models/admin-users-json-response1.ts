import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersJsonResponse1 = {
  deleted: boolean;
};

export const adminUsersJsonResponse1Schema: Schema<AdminUsersJsonResponse1> =
  s.object<AdminUsersJsonResponse1>({
    deleted: s.boolean(),
  });
