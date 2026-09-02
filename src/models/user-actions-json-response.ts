import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userActionSchema, type UserAction } from "./user-action.js";

export type UserActionsJsonResponse = {
  userActions: UserAction[];
};

export const userActionsJsonResponseSchema: Schema<UserActionsJsonResponse> =
  s.object<UserActionsJsonResponse>({
    userActions: s.array(s.lazy(() => userActionSchema)),
    _keysMap: {
      userActions: "user_actions",
    },
  });
