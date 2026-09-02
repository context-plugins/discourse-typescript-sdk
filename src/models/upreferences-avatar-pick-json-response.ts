import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UPreferencesAvatarPickJsonResponse = {
  success: string;
};

export const uPreferencesAvatarPickJsonResponseSchema: Schema<UPreferencesAvatarPickJsonResponse> =
  s.object<UPreferencesAvatarPickJsonResponse>({
    success: s.string(),
  });
