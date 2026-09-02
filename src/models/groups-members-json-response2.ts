import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsMembersJsonResponse2 = {
  success: string;
  usernames: Record<string, unknown>[];
  skippedUsernames: Record<string, unknown>[];
};

export const groupsMembersJsonResponse2Schema: Schema<GroupsMembersJsonResponse2> =
  s.object<GroupsMembersJsonResponse2>({
    success: s.string(),
    usernames: s.array(s.record(s.string(), s.unknown())),
    skippedUsernames: s.array(s.record(s.string(), s.unknown())),
    _keysMap: {
      skippedUsernames: "skipped_usernames",
    },
  });
