import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { typeSchema, type Type } from "./type.js";

export type UploadsGeneratePresignedPutJsonRequest = {
  type: Type;
  fileName: string;
  fileSize: number;
  metadata?: Metadata;
};

export const uploadsGeneratePresignedPutJsonRequestSchema: Schema<UploadsGeneratePresignedPutJsonRequest> =
  s.object<UploadsGeneratePresignedPutJsonRequest>({
    type: typeSchema,
    fileName: s.string(),
    fileSize: s.number(),
    metadata: s.optional(s.lazy(() => metadataSchema)),
    _keysMap: {
      fileName: "file_name",
      fileSize: "file_size",
    },
  });
