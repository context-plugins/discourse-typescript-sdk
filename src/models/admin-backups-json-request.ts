import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminBackupsJsonRequest = {
  withUploads: boolean;
};

export const adminBackupsJsonRequestSchema: Schema<AdminBackupsJsonRequest> =
  s.object<AdminBackupsJsonRequest>({
    withUploads: s.boolean(),
    _keysMap: {
      withUploads: "with_uploads",
    },
  });
