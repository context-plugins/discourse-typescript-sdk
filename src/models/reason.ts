import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason = {
  EnabledForEveryone: "enabled_for_everyone",
  EnabledForNoOne: "enabled_for_no_one",
  InSpecificGroups: "in_specific_groups",
  NotInSpecificGroups: "not_in_specific_groups",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
