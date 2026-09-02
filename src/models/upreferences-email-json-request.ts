import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UPreferencesEmailJsonRequest = {
  email: string;
};

export const uPreferencesEmailJsonRequestSchema: Schema<UPreferencesEmailJsonRequest> =
  s.object<UPreferencesEmailJsonRequest>({
    email: s.string(),
  });
