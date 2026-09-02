import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UPreferencesUsernameJsonRequest = {
  newUsername: string;
};

export const uPreferencesUsernameJsonRequestSchema: Schema<UPreferencesUsernameJsonRequest> =
  s.object<UPreferencesUsernameJsonRequest>({
    newUsername: s.string(),
    _keysMap: {
      newUsername: "new_username",
    },
  });
