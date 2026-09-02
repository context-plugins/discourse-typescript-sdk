import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsMembersJsonResponse1 = {
  success: string;
  usernames: Record<string, unknown>[];
  emails: Record<string, unknown>[];
};

export const groupsMembersJsonResponse1Schema: Schema<GroupsMembersJsonResponse1> =
  s.object<GroupsMembersJsonResponse1>({
    success: s.string(),
    usernames: s.array(s.record(s.string(), s.unknown())),
    emails: s.array(s.record(s.string(), s.unknown())),
  });
