import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptimizedVideo = {
  id?: number;
  uploadId?: number;
  url?: string;
  extension?: string;
  filesize?: number;
  sha1?: string;
  originalFilename?: string;
};

export const optimizedVideoSchema: Schema<OptimizedVideo> = s.object<OptimizedVideo>({
  id: s.optional(s.number()),
  uploadId: s.optional(s.number()),
  url: s.optional(s.string()),
  extension: s.optional(s.string()),
  filesize: s.optional(s.number()),
  sha1: s.optional(s.string()),
  originalFilename: s.optional(s.string()),
  _keysMap: {
    uploadId: "upload_id",
    originalFilename: "original_filename",
  },
});
