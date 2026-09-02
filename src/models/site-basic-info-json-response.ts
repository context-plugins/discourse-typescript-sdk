import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SiteBasicInfoJsonResponse = {
  logoUrl: string;
  logoSmallUrl: string;
  appleTouchIconUrl: string;
  faviconUrl: string;
  title: string;
  description: string;
  headerPrimaryColor: string;
  headerBackgroundColor: string;
  loginRequired: boolean;
  locale: string;
  includeInDiscourseDiscover: boolean;
  mobileLogoUrl: string;
};

export const siteBasicInfoJsonResponseSchema: Schema<SiteBasicInfoJsonResponse> =
  s.object<SiteBasicInfoJsonResponse>({
    logoUrl: s.string(),
    logoSmallUrl: s.string(),
    appleTouchIconUrl: s.string(),
    faviconUrl: s.string(),
    title: s.string(),
    description: s.string(),
    headerPrimaryColor: s.string(),
    headerBackgroundColor: s.string(),
    loginRequired: s.boolean(),
    locale: s.string(),
    includeInDiscourseDiscover: s.boolean(),
    mobileLogoUrl: s.string(),
    _keysMap: {
      logoUrl: "logo_url",
      logoSmallUrl: "logo_small_url",
      appleTouchIconUrl: "apple_touch_icon_url",
      faviconUrl: "favicon_url",
      headerPrimaryColor: "header_primary_color",
      headerBackgroundColor: "header_background_color",
      loginRequired: "login_required",
      includeInDiscourseDiscover: "include_in_discourse_discover",
      mobileLogoUrl: "mobile_logo_url",
    },
  });
