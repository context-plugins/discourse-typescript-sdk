import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Permissions2 = {
  everyone?: number;
};

export const permissions2Schema: Schema<Permissions2> = s.object<Permissions2>({
  everyone: s.optional(s.number()),
});
