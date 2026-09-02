import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user1Schema, type User1 } from "./user1.js";

export type TInviteJsonResponse = {
  user?: User1;
};

export const tInviteJsonResponseSchema: Schema<TInviteJsonResponse> = s.object<TInviteJsonResponse>({
  user: s.optional(s.lazy(() => user1Schema)),
});
