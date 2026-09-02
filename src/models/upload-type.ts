import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UploadType = {
  Avatar: "avatar",
  ProfileBackground: "profile_background",
  CardBackground: "card_background",
  CustomEmoji: "custom_emoji",
  Composer: "composer",
} as const;
export type UploadType = (typeof UploadType)[keyof typeof UploadType] | (string & {});

export const uploadTypeSchema: EnumSchema<UploadType> = s.enumOf<UploadType>(UploadType);
