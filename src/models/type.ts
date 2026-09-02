import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  Avatar: "avatar",
  ProfileBackground: "profile_background",
  CardBackground: "card_background",
  CustomEmoji: "custom_emoji",
  Composer: "composer",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
