import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UploadType1 = {
  Avatar: "avatar",
  ProfileBackground: "profile_background",
  CardBackground: "card_background",
  CustomEmoji: "custom_emoji",
  Composer: "composer",
} as const;
export type UploadType1 = (typeof UploadType1)[keyof typeof UploadType1] | (string & {});

export const uploadType1Schema: EnumSchema<UploadType1> = s.enumOf<UploadType1>(UploadType1);
