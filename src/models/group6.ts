import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Group6 = {
  id?: number;
  name?: string;
};

export const group6Schema: Schema<Group6> = s.object<Group6>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
});
