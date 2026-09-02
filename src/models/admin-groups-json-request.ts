import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";

export type AdminGroupsJsonRequest = {
  group: Group;
};

export const adminGroupsJsonRequestSchema: Schema<AdminGroupsJsonRequest> = s.object<AdminGroupsJsonRequest>({
  group: groupSchema,
});
