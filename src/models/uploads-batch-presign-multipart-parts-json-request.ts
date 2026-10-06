import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsBatchPresignMultipartPartsJsonRequest = {
  /** The part numbers to generate the presigned URLs for, must be between 1 and 10000. */
  partNumbers: Record<string, unknown>[];
  /** The unique identifier returned in the original /create-multipart request. */
  uniqueIdentifier: string;
};

export const uploadsBatchPresignMultipartPartsJsonRequestSchema: Schema<UploadsBatchPresignMultipartPartsJsonRequest> =
  s.object<UploadsBatchPresignMultipartPartsJsonRequest>({
    partNumbers: s.array(s.record(s.string(), s.unknown())),
    uniqueIdentifier: s.string(),
    _keysMap: {
      partNumbers: "part_numbers",
      uniqueIdentifier: "unique_identifier",
    },
  });
