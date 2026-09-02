import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type UPreferencesAvatarPickJsonRequest = {
  uploadId: number;
  type: Type1;
};

export const uPreferencesAvatarPickJsonRequestSchema: Schema<UPreferencesAvatarPickJsonRequest> =
  s.object<UPreferencesAvatarPickJsonRequest>({
    uploadId: s.number(),
    type: type1Schema,
    _keysMap: {
      uploadId: "upload_id",
    },
  });
