import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Occurrence = {
  startsAt: string | null;
  endsAt: string | null;
};

export const occurrenceSchema: Schema<Occurrence> = s.object<Occurrence>({
  startsAt: s.nullable(s.string()),
  endsAt: s.nullable(s.string()),
  _keysMap: {
    startsAt: "starts_at",
    endsAt: "ends_at",
  },
});
