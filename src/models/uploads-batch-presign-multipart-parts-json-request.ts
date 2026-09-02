import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsBatchPresignMultipartPartsJsonRequest = {
  partNumbers: Record<string, unknown>[];
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
