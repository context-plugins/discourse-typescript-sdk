import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { memberSchema, type Member } from "./member.js";
import { metaSchema, type Meta } from "./meta.js";
import { ownerSchema, type Owner } from "./owner.js";

export type GroupsMembersJsonResponse = {
  members: Member[];
  owners: Owner[];
  meta: Meta;
};

export const groupsMembersJsonResponseSchema: Schema<GroupsMembersJsonResponse> =
  s.object<GroupsMembersJsonResponse>({
    members: s.array(s.lazy(() => memberSchema)),
    owners: s.array(s.lazy(() => ownerSchema)),
    meta: metaSchema,
  });
