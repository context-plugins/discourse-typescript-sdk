import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";

export type GroupsJsonRequest = {
  group: Group;
};

export const groupsJsonRequestSchema: Schema<GroupsJsonRequest> = s.object<GroupsJsonRequest>({
  group: groupSchema,
});
