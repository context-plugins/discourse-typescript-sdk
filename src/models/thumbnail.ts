import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Thumbnail = {
  id?: number;
  uploadId?: number;
  url?: string;
  extension?: string;
  width?: number;
  height?: number;
  filesize?: number;
};

export const thumbnailSchema: Schema<Thumbnail> = s.object<Thumbnail>({
  id: s.optional(s.number()),
  uploadId: s.optional(s.number()),
  url: s.optional(s.string()),
  extension: s.optional(s.string()),
  width: s.optional(s.number()),
  height: s.optional(s.number()),
  filesize: s.optional(s.number()),
  _keysMap: {
    uploadId: "upload_id",
  },
});
