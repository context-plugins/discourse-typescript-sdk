import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { group6Schema, type Group6 } from "./group6.js";

export type TInviteGroupJsonResponse = {
  group?: Group6;
};

export const tInviteGroupJsonResponseSchema: Schema<TInviteGroupJsonResponse> =
  s.object<TInviteGroupJsonResponse>({
    group: s.optional(s.lazy(() => group6Schema)),
  });
