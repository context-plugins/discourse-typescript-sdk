import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCompleteExternalUploadJsonRequest = {
  uniqueIdentifier: string;
  forPrivateMessage?: string;
  forSiteSetting?: string;
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
