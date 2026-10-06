import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { penaltyCounts1Schema, type PenaltyCounts1 } from "./penalty-counts1.js";

export type Tl3Requirements = {
  timePeriod: number;
  requirementsMet: boolean;
  requirementsLost: boolean;
  trustLevelLocked: boolean;
  onGracePeriod: boolean;
  daysVisited: number;
  minDaysVisited: number;
  numTopicsRepliedTo: number;
  minTopicsRepliedTo: number;
  topicsViewed: number;
  minTopicsViewed: number;
  postsRead: number;
  minPostsRead: number;
  topicsViewedAllTime: number;
  minTopicsViewedAllTime: number;
  postsReadAllTime: number;
  minPostsReadAllTime: number;
  numFlaggedPosts: number;
  maxFlaggedPosts: number;
  numFlaggedByUsers: number;
  maxFlaggedByUsers: number;
  numLikesGiven: number;
  minLikesGiven: number;
  numLikesReceived: number;
  minLikesReceived: number;
  numLikesReceivedDays: number;
  minLikesReceivedDays: number;
  numLikesReceivedUsers: number;
  minLikesReceivedUsers: number;
  penaltyCounts: PenaltyCounts1;
};

export const tl3RequirementsSchema: Schema<Tl3Requirements> = s.object<Tl3Requirements>({
  timePeriod: s.int(),
  requirementsMet: s.boolean(),
  requirementsLost: s.boolean(),
  trustLevelLocked: s.boolean(),
  onGracePeriod: s.boolean(),
  daysVisited: s.int(),
  minDaysVisited: s.int(),
  numTopicsRepliedTo: s.int(),
  minTopicsRepliedTo: s.int(),
  topicsViewed: s.int(),
  minTopicsViewed: s.int(),
  postsRead: s.int(),
  minPostsRead: s.int(),
  topicsViewedAllTime: s.int(),
  minTopicsViewedAllTime: s.int(),
  postsReadAllTime: s.int(),
  minPostsReadAllTime: s.int(),
  numFlaggedPosts: s.int(),
  maxFlaggedPosts: s.int(),
  numFlaggedByUsers: s.int(),
  maxFlaggedByUsers: s.int(),
  numLikesGiven: s.int(),
  minLikesGiven: s.int(),
  numLikesReceived: s.int(),
  minLikesReceived: s.int(),
  numLikesReceivedDays: s.int(),
  minLikesReceivedDays: s.int(),
  numLikesReceivedUsers: s.int(),
  minLikesReceivedUsers: s.int(),
  penaltyCounts: penaltyCounts1Schema,
  _keysMap: {
    timePeriod: "time_period",
    requirementsMet: "requirements_met",
    requirementsLost: "requirements_lost",
    trustLevelLocked: "trust_level_locked",
    onGracePeriod: "on_grace_period",
    daysVisited: "days_visited",
    minDaysVisited: "min_days_visited",
    numTopicsRepliedTo: "num_topics_replied_to",
    minTopicsRepliedTo: "min_topics_replied_to",
    topicsViewed: "topics_viewed",
    minTopicsViewed: "min_topics_viewed",
    postsRead: "posts_read",
    minPostsRead: "min_posts_read",
    topicsViewedAllTime: "topics_viewed_all_time",
    minTopicsViewedAllTime: "min_topics_viewed_all_time",
    postsReadAllTime: "posts_read_all_time",
    minPostsReadAllTime: "min_posts_read_all_time",
    numFlaggedPosts: "num_flagged_posts",
    maxFlaggedPosts: "max_flagged_posts",
    numFlaggedByUsers: "num_flagged_by_users",
    maxFlaggedByUsers: "max_flagged_by_users",
    numLikesGiven: "num_likes_given",
    minLikesGiven: "min_likes_given",
    numLikesReceived: "num_likes_received",
    minLikesReceived: "min_likes_received",
    numLikesReceivedDays: "num_likes_received_days",
    minLikesReceivedDays: "min_likes_received_days",
    numLikesReceivedUsers: "num_likes_received_users",
    minLikesReceivedUsers: "min_likes_received_users",
    penaltyCounts: "penalty_counts",
  },
});
