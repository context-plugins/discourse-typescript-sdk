import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsAbortMultipartJsonRequest = {
  externalUploadIdentifier: string;
};

export const uploadsAbortMultipartJsonRequestSchema: Schema<UploadsAbortMultipartJsonRequest> =
  s.object<UploadsAbortMultipartJsonRequest>({
    externalUploadIdentifier: s.string(),
    _keysMap: {
      externalUploadIdentifier: "external_upload_identifier",
    },
  });
