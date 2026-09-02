import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";

export type Poster4 = {
  extras: string;
  description: string;
  user: User;
};

export const poster4Schema: Schema<Poster4> = s.object<Poster4>({
  extras: s.string(),
  description: s.string(),
  user: userSchema,
});
