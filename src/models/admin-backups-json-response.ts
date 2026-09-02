import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBackupsJsonResponse = {
  filename: string;
  size: number;
  lastModified: string;
};

export const adminBackupsJsonResponseSchema: Schema<AdminBackupsJsonResponse> =
  s.object<AdminBackupsJsonResponse>({
    filename: s.string(),
    size: s.number(),
    lastModified: s.string(),
    _keysMap: {
      lastModified: "last_modified",
    },
  });
