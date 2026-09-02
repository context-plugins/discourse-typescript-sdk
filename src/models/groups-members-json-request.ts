import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsMembersJsonRequest = {
  usernames?: string;
};

export const groupsMembersJsonRequestSchema: Schema<GroupsMembersJsonRequest> =
  s.object<GroupsMembersJsonRequest>({
    usernames: s.optional(s.string()),
  });
