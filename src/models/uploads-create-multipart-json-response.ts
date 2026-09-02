import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCreateMultipartJsonResponse = {
  key: string;
  externalUploadIdentifier: string;
  uniqueIdentifier: string;
};

export const uploadsCreateMultipartJsonResponseSchema: Schema<UploadsCreateMultipartJsonResponse> =
  s.object<UploadsCreateMultipartJsonResponse>({
    key: s.string(),
    externalUploadIdentifier: s.string(),
    uniqueIdentifier: s.string(),
    _keysMap: {
      externalUploadIdentifier: "external_upload_identifier",
      uniqueIdentifier: "unique_identifier",
    },
  });
