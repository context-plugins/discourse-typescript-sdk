import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionForgotPasswordJsonRequest = {
  login: string;
};

export const sessionForgotPasswordJsonRequestSchema: Schema<SessionForgotPasswordJsonRequest> =
  s.object<SessionForgotPasswordJsonRequest>({
    login: s.string(),
  });
