import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type Reminder = {
  value: number;
  unit: string;
  period: Period;
  type: string;
};

export const reminderSchema: Schema<Reminder> = s.object<Reminder>({
  value: s.number(),
  unit: s.string(),
  period: periodSchema,
  type: s.string(),
});
