import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { uploadType1Schema, type UploadType1 } from "./upload-type1.js";

export type UploadsCreateMultipartJsonRequest = {
  uploadType: UploadType1;
  fileName: string;
  fileSize: number;
  metadata?: Metadata;
};

export const uploadsCreateMultipartJsonRequestSchema: Schema<UploadsCreateMultipartJsonRequest> =
  s.object<UploadsCreateMultipartJsonRequest>({
    uploadType: uploadType1Schema,
    fileName: s.string(),
    fileSize: s.number(),
    metadata: s.optional(s.lazy(() => metadataSchema)),
    _keysMap: {
      uploadType: "upload_type",
      fileName: "file_name",
      fileSize: "file_size",
    },
  });
