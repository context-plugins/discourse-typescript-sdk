import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupPermission = {
  permissionType: number;
  groupName: string;
  groupId: number;
};

export const groupPermissionSchema: Schema<GroupPermission> = s.object<GroupPermission>({
  permissionType: s.number(),
  groupName: s.string(),
  groupId: s.number(),
  _keysMap: {
    permissionType: "permission_type",
    groupName: "group_name",
    groupId: "group_id",
  },
});
