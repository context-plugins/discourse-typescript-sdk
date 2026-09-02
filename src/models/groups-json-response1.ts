import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsJsonResponse1 = {
  success: string;
};

export const groupsJsonResponse1Schema: Schema<GroupsJsonResponse1> = s.object<GroupsJsonResponse1>({
  success: s.string(),
});
