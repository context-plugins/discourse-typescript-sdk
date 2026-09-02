import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extrasSchema, type Extras } from "./extras.js";
import { group1Schema, type Group1 } from "./group1.js";

export type GroupsByIdJsonResponse = {
  group: Group1;
  extras: Extras;
};

export const groupsByIdJsonResponseSchema: Schema<GroupsByIdJsonResponse> = s.object<GroupsByIdJsonResponse>({
  group: group1Schema,
  extras: extrasSchema,
});
