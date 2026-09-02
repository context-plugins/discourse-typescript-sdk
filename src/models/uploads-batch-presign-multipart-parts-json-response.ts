import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsBatchPresignMultipartPartsJsonResponse = {
  presignedUrls: Record<string, unknown>;
};

export const uploadsBatchPresignMultipartPartsJsonResponseSchema: Schema<UploadsBatchPresignMultipartPartsJsonResponse> =
  s.object<UploadsBatchPresignMultipartPartsJsonResponse>({
    presignedUrls: s.record(s.string(), s.unknown()),
    _keysMap: {
      presignedUrls: "presigned_urls",
    },
  });
