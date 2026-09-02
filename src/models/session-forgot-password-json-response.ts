import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionForgotPasswordJsonResponse = {
  success: string;
  userFound: boolean;
};

export const sessionForgotPasswordJsonResponseSchema: Schema<SessionForgotPasswordJsonResponse> =
  s.object<SessionForgotPasswordJsonResponse>({
    success: s.string(),
    userFound: s.boolean(),
    _keysMap: {
      userFound: "user_found",
    },
  });
