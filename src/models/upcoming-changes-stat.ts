import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type UpcomingChangesStat = {
  name: string;
  humanizedName: string;
  description: string;
  enabled: boolean;
  specificGroups: string[];
  reason: Reason;
};

export const upcomingChangesStatSchema: Schema<UpcomingChangesStat> = s.object<UpcomingChangesStat>({
  name: s.string(),
  humanizedName: s.string(),
  description: s.string(),
  enabled: s.boolean(),
  specificGroups: s.array(s.string()),
  reason: reasonSchema,
  _keysMap: {
    humanizedName: "humanized_name",
    specificGroups: "specific_groups",
  },
});
