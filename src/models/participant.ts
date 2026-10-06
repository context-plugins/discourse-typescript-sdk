import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Participant = {
  extras?: string;
  description?: string | null;
  userId?: number;
  primaryGroupId?: number | null;
};

export const participantSchema: Schema<Participant> = s.object<Participant>({
  extras: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  userId: s.optional(s.int()),
  primaryGroupId: s.optionalNullable(s.int()),
  _keysMap: {
    userId: "user_id",
    primaryGroupId: "primary_group_id",
  },
});
