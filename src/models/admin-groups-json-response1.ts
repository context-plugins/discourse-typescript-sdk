import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminGroupsJsonResponse1 = {
  success: string;
};

export const adminGroupsJsonResponse1Schema: Schema<AdminGroupsJsonResponse1> =
  s.object<AdminGroupsJsonResponse1>({
    success: s.string(),
  });
