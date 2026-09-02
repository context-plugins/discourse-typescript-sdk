import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optimizedVideoSchema, type OptimizedVideo } from "./optimized-video.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";

export type UploadsCompleteMultipartJsonResponse = {
  id: number;
  url: string;
  originalFilename: string;
  filesize: number;
  width: number;
  height: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
  extension: string;
  shortUrl: string;
  shortPath: string;
  retainHours: string | null;
  humanFilesize: string;
  dominantColor?: string | null;
  thumbnail?: Thumbnail | null;
  optimizedVideo?: OptimizedVideo | null;
};

export const uploadsCompleteMultipartJsonResponseSchema: Schema<UploadsCompleteMultipartJsonResponse> =
  s.object<UploadsCompleteMultipartJsonResponse>({
    id: s.number(),
    url: s.string(),
    originalFilename: s.string(),
    filesize: s.number(),
    width: s.number(),
    height: s.number(),
    thumbnailWidth: s.number(),
    thumbnailHeight: s.number(),
    extension: s.string(),
    shortUrl: s.string(),
    shortPath: s.string(),
    retainHours: s.nullable(s.string()),
    humanFilesize: s.string(),
    dominantColor: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.lazy(() => thumbnailSchema)),
    optimizedVideo: s.optionalNullable(s.lazy(() => optimizedVideoSchema)),
    _keysMap: {
      originalFilename: "original_filename",
      thumbnailWidth: "thumbnail_width",
      thumbnailHeight: "thumbnail_height",
      shortUrl: "short_url",
      shortPath: "short_path",
      retainHours: "retain_hours",
      humanFilesize: "human_filesize",
      dominantColor: "dominant_color",
      optimizedVideo: "optimized_video",
    },
  });
