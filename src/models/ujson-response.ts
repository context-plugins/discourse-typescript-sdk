import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user8Schema, type User8 } from "./user8.js";

export type UJsonResponse = {
  userBadges: Record<string, unknown>[];
  user: User8;
};

export const uJsonResponseSchema: Schema<UJsonResponse> = s.object<UJsonResponse>({
  userBadges: s.array(s.record(s.string(), s.unknown())),
  user: user8Schema,
  _keysMap: {
    userBadges: "user_badges",
  },
});
