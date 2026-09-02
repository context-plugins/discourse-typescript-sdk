import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersSilenceJsonRequest = {
  silencedTill: string;
  reason: string;
  message?: string;
  postAction?: string;
};

export const adminUsersSilenceJsonRequestSchema: Schema<AdminUsersSilenceJsonRequest> =
  s.object<AdminUsersSilenceJsonRequest>({
    silencedTill: s.string(),
    reason: s.string(),
    message: s.optional(s.string()),
    postAction: s.optional(s.string()),
    _keysMap: {
      silencedTill: "silenced_till",
      postAction: "post_action",
    },
  });
