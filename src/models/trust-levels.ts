import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrustLevels = {
  newuser: number;
  basic: number;
  member: number;
  regular: number;
  leader: number;
};

export const trustLevelsSchema: Schema<TrustLevels> = s.object<TrustLevels>({
  newuser: s.int(),
  basic: s.int(),
  member: s.int(),
  regular: s.int(),
  leader: s.int(),
});
