import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBackupsJsonResponse1 = {
  success: string;
};

export const adminBackupsJsonResponse1Schema: Schema<AdminBackupsJsonResponse1> =
  s.object<AdminBackupsJsonResponse1>({
    success: s.string(),
  });
