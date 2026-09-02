import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersJsonResponse = {
  success: boolean;
  active: boolean;
  message: string;
  userId?: number;
};

export const usersJsonResponseSchema: Schema<UsersJsonResponse> = s.object<UsersJsonResponse>({
  success: s.boolean(),
  active: s.boolean(),
  message: s.string(),
  userId: s.optional(s.number()),
  _keysMap: {
    userId: "user_id",
  },
});
