import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersSuspendJsonRequest = {
  suspendUntil: string;
  reason: string;
  message?: string;
  postAction?: string;
};

export const adminUsersSuspendJsonRequestSchema: Schema<AdminUsersSuspendJsonRequest> =
  s.object<AdminUsersSuspendJsonRequest>({
    suspendUntil: s.string(),
    reason: s.string(),
    message: s.optional(s.string()),
    postAction: s.optional(s.string()),
    _keysMap: {
      suspendUntil: "suspend_until",
      postAction: "post_action",
    },
  });
