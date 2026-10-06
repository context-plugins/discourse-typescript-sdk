import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCreateMultipartJsonResponse = {
  /** The path of the temporary file on the external storage service. */
  key: string;
  /**
   * The identifier of the multipart upload in the external storage provider. This is the multipart
   * upload_id in AWS S3.
   */
  externalUploadIdentifier: string;
  /**
   * A unique string that identifies the external upload. This must be stored and then sent in the
   * /complete-multipart and /batch-presign-multipart-parts endpoints.
   */
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
