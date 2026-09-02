import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccessControl = {
  mandatoryAcl: Record<string, unknown>;
  bannedAcl: Record<string, unknown>;
};

export const accessControlSchema: Schema<AccessControl> = s.object<AccessControl>({
  mandatoryAcl: s.record(s.string(), s.unknown()),
  bannedAcl: s.record(s.string(), s.unknown()),
  _keysMap: {
    mandatoryAcl: "mandatory_acl",
    bannedAcl: "banned_acl",
  },
});
