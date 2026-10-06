import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCompleteExternalUploadJsonRequest = {
  /** The unique identifier returned in the original /generate-presigned-put request. */
  uniqueIdentifier: string;
  /** Optionally set this to true if the upload is for a private message. */
  forPrivateMessage?: string;
  /** Optionally set this to true if the upload is for a site setting. */
  forSiteSetting?: string;
  /**
   * Optionally set this to true if the upload was pasted into the upload area. This will convert
   * PNG files to JPEG.
   */
  pasted?: string;
};

export const uploadsCompleteExternalUploadJsonRequestSchema: Schema<UploadsCompleteExternalUploadJsonRequest> =
  s.object<UploadsCompleteExternalUploadJsonRequest>({
    uniqueIdentifier: s.string(),
    forPrivateMessage: s.optional(s.string()),
    forSiteSetting: s.optional(s.string()),
    pasted: s.optional(s.string()),
    _keysMap: {
      uniqueIdentifier: "unique_identifier",
      forPrivateMessage: "for_private_message",
      forSiteSetting: "for_site_setting",
    },
  });
