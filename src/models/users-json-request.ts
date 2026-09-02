import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersJsonRequest = {
  name: string;
  email: string;
  password: string;
  username: string;
  active?: boolean;
  approved?: boolean;
  userFields?: Record<string, boolean>;
  externalIds?: Record<string, unknown>;
};

export const usersJsonRequestSchema: Schema<UsersJsonRequest> = s.object<UsersJsonRequest>({
  name: s.string(),
  email: s.string(),
  password: s.string(),
  username: s.string(),
  active: s.optional(s.boolean()),
  approved: s.optional(s.boolean()),
  userFields: s.optional(s.record(s.string(), s.boolean())),
  externalIds: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    userFields: "user_fields",
    externalIds: "external_ids",
  },
});
