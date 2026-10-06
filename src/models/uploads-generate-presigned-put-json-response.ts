import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsGeneratePresignedPutJsonResponse = {
  /** The path of the temporary file on the external storage service. */
  key?: string;
  /** A presigned PUT URL which must be used to upload the file binary blob to. */
  url?: string;
  /** A map of headers that must be sent with the PUT request. */
  signedHeaders?: Record<string, unknown>;
  /**
   * A unique string that identifies the external upload. This must be stored and then sent in the
   * /complete-external-upload endpoint to complete the direct upload.
   */
  uniqueIdentifier?: string;
};

export const uploadsGeneratePresignedPutJsonResponseSchema: Schema<UploadsGeneratePresignedPutJsonResponse> =
  s.object<UploadsGeneratePresignedPutJsonResponse>({
    key: s.optional(s.string()),
    url: s.optional(s.string()),
    signedHeaders: s.optional(s.record(s.string(), s.unknown())),
    uniqueIdentifier: s.optional(s.string()),
    _keysMap: {
      signedHeaders: "signed_headers",
      uniqueIdentifier: "unique_identifier",
    },
  });
