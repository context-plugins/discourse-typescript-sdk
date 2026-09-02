import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAuthToken = {
  id: number;
  clientIp: string;
  location: string;
  browser: string;
  device: string;
  os: string;
  icon: string;
  createdAt: string;
  seenAt: string;
  isActive: boolean;
};

export const userAuthTokenSchema: Schema<UserAuthToken> = s.object<UserAuthToken>({
  id: s.number(),
  clientIp: s.string(),
  location: s.string(),
  browser: s.string(),
  device: s.string(),
  os: s.string(),
  icon: s.string(),
  createdAt: s.string(),
  seenAt: s.string(),
  isActive: s.boolean(),
  _keysMap: {
    clientIp: "client_ip",
    createdAt: "created_at",
    seenAt: "seen_at",
    isActive: "is_active",
  },
});
