import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersPasswordResetJsonRequest = {
  username: string;
  password: string;
};

export const usersPasswordResetJsonRequestSchema: Schema<UsersPasswordResetJsonRequest> =
  s.object<UsersPasswordResetJsonRequest>({
    username: s.string(),
    password: s.string(),
  });
