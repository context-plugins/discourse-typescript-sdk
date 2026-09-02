import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TInviteJsonRequest = {
  user?: string;
  email?: string;
};

export const tInviteJsonRequestSchema: Schema<TInviteJsonRequest> = s.object<TInviteJsonRequest>({
  user: s.optional(s.string()),
  email: s.optional(s.string()),
});
