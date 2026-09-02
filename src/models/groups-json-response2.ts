import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extras2Schema, type Extras2 } from "./extras2.js";
import { group4Schema, type Group4 } from "./group4.js";

export type GroupsJsonResponse2 = {
  groups: Group4[];
  extras: Extras2;
  totalRowsGroups: number;
  loadMoreGroups: string;
};

export const groupsJsonResponse2Schema: Schema<GroupsJsonResponse2> = s.object<GroupsJsonResponse2>({
  groups: s.array(s.lazy(() => group4Schema)),
  extras: extras2Schema,
  totalRowsGroups: s.number(),
  loadMoreGroups: s.string(),
  _keysMap: {
    totalRowsGroups: "total_rows_groups",
    loadMoreGroups: "load_more_groups",
  },
});
