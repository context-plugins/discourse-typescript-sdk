import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsGeneratePresignedPutJsonResponse = {
  key?: string;
  url?: string;
  signedHeaders?: Record<string, unknown>;
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
