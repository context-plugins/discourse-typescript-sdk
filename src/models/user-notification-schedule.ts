import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserNotificationSchedule = {
  enabled: boolean;
  day0StartTime: number;
  day0EndTime: number;
  day1StartTime: number;
  day1EndTime: number;
  day2StartTime: number;
  day2EndTime: number;
  day3StartTime: number;
  day3EndTime: number;
  day4StartTime: number;
  day4EndTime: number;
  day5StartTime: number;
  day5EndTime: number;
  day6StartTime: number;
  day6EndTime: number;
};

export const userNotificationScheduleSchema: Schema<UserNotificationSchedule> =
  s.object<UserNotificationSchedule>({
    enabled: s.boolean(),
    day0StartTime: s.int(),
    day0EndTime: s.int(),
    day1StartTime: s.int(),
    day1EndTime: s.int(),
    day2StartTime: s.int(),
    day2EndTime: s.int(),
    day3StartTime: s.int(),
    day3EndTime: s.int(),
    day4StartTime: s.int(),
    day4EndTime: s.int(),
    day5StartTime: s.int(),
    day5EndTime: s.int(),
    day6StartTime: s.int(),
    day6EndTime: s.int(),
    _keysMap: {
      day0StartTime: "day_0_start_time",
      day0EndTime: "day_0_end_time",
      day1StartTime: "day_1_start_time",
      day1EndTime: "day_1_end_time",
      day2StartTime: "day_2_start_time",
      day2EndTime: "day_2_end_time",
      day3StartTime: "day_3_start_time",
      day3EndTime: "day_3_end_time",
      day4StartTime: "day_4_start_time",
      day4EndTime: "day_4_end_time",
      day5StartTime: "day_5_start_time",
      day5EndTime: "day_5_end_time",
      day6StartTime: "day_6_start_time",
      day6EndTime: "day_6_end_time",
    },
  });
