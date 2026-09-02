import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicGroupSchema, type BasicGroup } from "./basic-group.js";

export type AdminGroupsJsonResponse = {
  basicGroup: BasicGroup;
};

export const adminGroupsJsonResponseSchema: Schema<AdminGroupsJsonResponse> =
  s.object<AdminGroupsJsonResponse>({
    basicGroup: basicGroupSchema,
    _keysMap: {
      basicGroup: "basic_group",
    },
  });
