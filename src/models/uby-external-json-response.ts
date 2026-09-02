import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user8Schema, type User8 } from "./user8.js";

export type UByExternalJsonResponse = {
  userBadges: Record<string, unknown>[];
  user: User8;
};

export const uByExternalJsonResponseSchema: Schema<UByExternalJsonResponse> =
  s.object<UByExternalJsonResponse>({
    userBadges: s.array(s.record(s.string(), s.unknown())),
    user: user8Schema,
    _keysMap: {
      userBadges: "user_badges",
    },
  });
