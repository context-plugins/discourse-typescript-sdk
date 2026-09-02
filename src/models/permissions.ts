import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Permissions = {
  everyone?: number;
  staff?: number;
};

export const permissionsSchema: Schema<Permissions> = s.object<Permissions>({
  everyone: s.optional(s.number()),
  staff: s.optional(s.number()),
});
