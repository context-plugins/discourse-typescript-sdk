export { DiscourseClient } from "./client.js";
export { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";

export { ServerEnvironment, DEFAULT_SERVER_OPTIONS } from "./servers.js";
export type { ServerOptions, DefaultServerOptions } from "./servers.js";

export { DiscourseCalendarEvents } from "./resources/discourse-calendar-events.js";
export { Backups } from "./resources/backups.js";
export { Badges } from "./resources/badges.js";
export { Categories } from "./resources/categories.js";
export { Groups } from "./resources/groups.js";
export { Invites } from "./resources/invites.js";
export { Notifications } from "./resources/notifications.js";
export { Posts } from "./resources/posts.js";
export { Topics } from "./resources/topics.js";
export { PrivateMessages } from "./resources/private-messages.js";
export { Search } from "./resources/search.js";
export { Site } from "./resources/site.js";
export { Tags } from "./resources/tags.js";
export { Uploads } from "./resources/uploads.js";
export { Users } from "./resources/users.js";
export { Admin } from "./resources/admin.js";

export { accessControlSchema, type AccessControl } from "./models/access-control.js";
export { actionsSummarySchema, type ActionsSummary } from "./models/actions-summary.js";
export { actionsSummary2Schema, type ActionsSummary2 } from "./models/actions-summary2.js";
export { actionsSummary5Schema, type ActionsSummary5 } from "./models/actions-summary5.js";
export { actionsSummary6Schema, type ActionsSummary6 } from "./models/actions-summary6.js";
export { actionsSummary8Schema, type ActionsSummary8 } from "./models/actions-summary8.js";
export {
  adminBackupsJsonRequestSchema,
  type AdminBackupsJsonRequest,
} from "./models/admin-backups-json-request.js";
export {
  adminBackupsJsonResponseSchema,
  type AdminBackupsJsonResponse,
} from "./models/admin-backups-json-response.js";
export {
  adminBackupsJsonResponse1Schema,
  type AdminBackupsJsonResponse1,
} from "./models/admin-backups-json-response1.js";
export {
  adminBadgesJsonRequest1Schema,
  type AdminBadgesJsonRequest1,
} from "./models/admin-badges-json-request1.js";
export {
  adminBadgesJsonResponse2Schema,
  type AdminBadgesJsonResponse2,
} from "./models/admin-badges-json-response2.js";
export {
  adminBadgesJsonRequestSchema,
  type AdminBadgesJsonRequest,
} from "./models/admin-badges-json-request.js";
export {
  adminBadgesJsonResponseSchema,
  type AdminBadgesJsonResponse,
} from "./models/admin-badges-json-response.js";
export {
  adminBadgesJsonResponse1Schema,
  type AdminBadgesJsonResponse1,
} from "./models/admin-badges-json-response1.js";
export {
  adminGroupsJsonResponse1Schema,
  type AdminGroupsJsonResponse1,
} from "./models/admin-groups-json-response1.js";
export {
  adminGroupsJsonRequestSchema,
  type AdminGroupsJsonRequest,
} from "./models/admin-groups-json-request.js";
export {
  adminGroupsJsonResponseSchema,
  type AdminGroupsJsonResponse,
} from "./models/admin-groups-json-response.js";
export {
  adminUsersActivateJsonResponseSchema,
  type AdminUsersActivateJsonResponse,
} from "./models/admin-users-activate-json-response.js";
export {
  adminUsersAnonymizeJsonResponseSchema,
  type AdminUsersAnonymizeJsonResponse,
} from "./models/admin-users-anonymize-json-response.js";
export {
  adminUsersDeactivateJsonResponseSchema,
  type AdminUsersDeactivateJsonResponse,
} from "./models/admin-users-deactivate-json-response.js";
export {
  adminUsersJsonRequestSchema,
  type AdminUsersJsonRequest,
} from "./models/admin-users-json-request.js";
export {
  adminUsersJsonResponseSchema,
  type AdminUsersJsonResponse,
} from "./models/admin-users-json-response.js";
export {
  adminUsersJsonResponse1Schema,
  type AdminUsersJsonResponse1,
} from "./models/admin-users-json-response1.js";
export {
  adminUsersListJsonResponseSchema,
  type AdminUsersListJsonResponse,
} from "./models/admin-users-list-json-response.js";
export {
  adminUsersLogOutJsonResponseSchema,
  type AdminUsersLogOutJsonResponse,
} from "./models/admin-users-log-out-json-response.js";
export {
  adminUsersSilenceJsonRequestSchema,
  type AdminUsersSilenceJsonRequest,
} from "./models/admin-users-silence-json-request.js";
export {
  adminUsersSilenceJsonResponseSchema,
  type AdminUsersSilenceJsonResponse,
} from "./models/admin-users-silence-json-response.js";
export {
  adminUsersSuspendJsonRequestSchema,
  type AdminUsersSuspendJsonRequest,
} from "./models/admin-users-suspend-json-request.js";
export {
  adminUsersSuspendJsonResponseSchema,
  type AdminUsersSuspendJsonResponse,
} from "./models/admin-users-suspend-json-response.js";
export {
  adminUsersJsonResponse2Schema,
  type AdminUsersJsonResponse2,
} from "./models/admin-users-json-response2.js";
export { adminBadgesSchema, type AdminBadges } from "./models/admin-badges.js";
export { approvedBySchema, type ApprovedBy } from "./models/approved-by.js";
export { archetypeSchema, type Archetype } from "./models/archetype.js";
export { availableCategoryTypeSchema, type AvailableCategoryType } from "./models/available-category-type.js";
export { badgeSchema, type Badge } from "./models/badge.js";
export { badge1Schema, type Badge1 } from "./models/badge1.js";
export { badge3Schema, type Badge3 } from "./models/badge3.js";
export { badgeGroupingSchema, type BadgeGrouping } from "./models/badge-grouping.js";
export { badgeTypeSchema, type BadgeType } from "./models/badge-type.js";
export { basicGroupSchema, type BasicGroup } from "./models/basic-group.js";
export { basicTopicSchema, type BasicTopic } from "./models/basic-topic.js";
export { cJsonResponseSchema, type CJsonResponse } from "./models/cjson-response.js";
export { cShowJsonResponseSchema, type CShowJsonResponse } from "./models/cshow-json-response.js";
export {
  categoriesJsonRequest1Schema,
  type CategoriesJsonRequest1,
} from "./models/categories-json-request1.js";
export {
  categoriesJsonResponse2Schema,
  type CategoriesJsonResponse2,
} from "./models/categories-json-response2.js";
export { categoriesJsonRequestSchema, type CategoriesJsonRequest } from "./models/categories-json-request.js";
export {
  categoriesJsonResponseSchema,
  type CategoriesJsonResponse,
} from "./models/categories-json-response.js";
export {
  categoriesJsonResponse1Schema,
  type CategoriesJsonResponse1,
} from "./models/categories-json-response1.js";
export { categorySchema, type Category } from "./models/category.js";
export { category1Schema, type Category1 } from "./models/category1.js";
export { category2Schema, type Category2 } from "./models/category2.js";
export { category4Schema, type Category4 } from "./models/category4.js";
export { categoryListSchema, type CategoryList } from "./models/category-list.js";
export { categoryLocalizationSchema, type CategoryLocalization } from "./models/category-localization.js";
export { categorySettingSchema, type CategorySetting } from "./models/category-setting.js";
export { categoryTypeSchema, type CategoryType } from "./models/category-type.js";
export { createdBySchema, type CreatedBy } from "./models/created-by.js";
export { creatorSchema, type Creator } from "./models/creator.js";
export { customFieldsSchema, type CustomFields } from "./models/custom-fields.js";
export { dataSchema, type Data } from "./models/data.js";
export { detailsSchema, type Details } from "./models/details.js";
export {
  directoryItemsJsonResponseSchema,
  type DirectoryItemsJsonResponse,
} from "./models/directory-items-json-response.js";
export { directoryItemSchema, type DirectoryItem } from "./models/directory-item.js";
export {
  discoursePostEventEventsJsonResponseSchema,
  type DiscoursePostEventEventsJsonResponse,
} from "./models/discourse-post-event-events-json-response.js";
export { Enabled, enabledSchema } from "./models/enabled.js";
export { eventSchema, type Event } from "./models/event.js";
export { extraSchema, type Extra } from "./models/extra.js";
export { extrasSchema, type Extras } from "./models/extras.js";
export { extras2Schema, type Extras2 } from "./models/extras2.js";
export { extras3Schema, type Extras3 } from "./models/extras3.js";
export { featuredTopicSchema, type FeaturedTopic } from "./models/featured-topic.js";
export { grantedBySchema, type GrantedBy } from "./models/granted-by.js";
export { groupSchema, type Group } from "./models/group.js";
export { group1Schema, type Group1 } from "./models/group1.js";
export { group10Schema, type Group10 } from "./models/group10.js";
export { group4Schema, type Group4 } from "./models/group4.js";
export { group5Schema, type Group5 } from "./models/group5.js";
export { group6Schema, type Group6 } from "./models/group6.js";
export { group7Schema, type Group7 } from "./models/group7.js";
export { groupPermissionSchema, type GroupPermission } from "./models/group-permission.js";
export { groupUserSchema, type GroupUser } from "./models/group-user.js";
export { groupedSearchResultSchema, type GroupedSearchResult } from "./models/grouped-search-result.js";
export {
  groupsByIdJsonResponseSchema,
  type GroupsByIdJsonResponse,
} from "./models/groups-by-id-json-response.js";
export { groupsJsonRequestSchema, type GroupsJsonRequest } from "./models/groups-json-request.js";
export { groupsJsonResponseSchema, type GroupsJsonResponse } from "./models/groups-json-response.js";
export { groupsJsonResponse1Schema, type GroupsJsonResponse1 } from "./models/groups-json-response1.js";
export {
  groupsMembersJsonRequestSchema,
  type GroupsMembersJsonRequest,
} from "./models/groups-members-json-request.js";
export {
  groupsMembersJsonResponseSchema,
  type GroupsMembersJsonResponse,
} from "./models/groups-members-json-response.js";
export {
  groupsMembersJsonResponse1Schema,
  type GroupsMembersJsonResponse1,
} from "./models/groups-members-json-response1.js";
export {
  groupsMembersJsonResponse2Schema,
  type GroupsMembersJsonResponse2,
} from "./models/groups-members-json-response2.js";
export { groupsJsonResponse2Schema, type GroupsJsonResponse2 } from "./models/groups-json-response2.js";
export {
  invitesCreateMultipleJsonRequestSchema,
  type InvitesCreateMultipleJsonRequest,
} from "./models/invites-create-multiple-json-request.js";
export {
  invitesCreateMultipleJsonResponseSchema,
  type InvitesCreateMultipleJsonResponse,
} from "./models/invites-create-multiple-json-response.js";
export { invitesJsonRequestSchema, type InvitesJsonRequest } from "./models/invites-json-request.js";
export { invitesJsonResponseSchema, type InvitesJsonResponse } from "./models/invites-json-response.js";
export { lastPosterSchema, type LastPoster } from "./models/last-poster.js";
export { latestJsonResponseSchema, type LatestJsonResponse } from "./models/latest-json-response.js";
export { latestPostSchema, type LatestPost } from "./models/latest-post.js";
export { linkCountSchema, type LinkCount } from "./models/link-count.js";
export { memberSchema, type Member } from "./models/member.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { meta1Schema, type Meta1 } from "./models/meta1.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export { notificationSchema, type Notification } from "./models/notification.js";
export { NotificationLevel, notificationLevelSchema } from "./models/notification-level.js";
export { notificationTypesSchema, type NotificationTypes } from "./models/notification-types.js";
export {
  notificationsMarkReadJsonRequestSchema,
  type NotificationsMarkReadJsonRequest,
} from "./models/notifications-mark-read-json-request.js";
export {
  notificationsMarkReadJsonResponseSchema,
  type NotificationsMarkReadJsonResponse,
} from "./models/notifications-mark-read-json-response.js";
export {
  notificationsJsonResponseSchema,
  type NotificationsJsonResponse,
} from "./models/notifications-json-response.js";
export { occurrenceSchema, type Occurrence } from "./models/occurrence.js";
export { optimizedVideoSchema, type OptimizedVideo } from "./models/optimized-video.js";
export { ownerSchema, type Owner } from "./models/owner.js";
export { parentTagSchema, type ParentTag } from "./models/parent-tag.js";
export { participantSchema, type Participant } from "./models/participant.js";
export { participant1Schema, type Participant1 } from "./models/participant1.js";
export { penaltyCountsSchema, type PenaltyCounts } from "./models/penalty-counts.js";
export { penaltyCounts1Schema, type PenaltyCounts1 } from "./models/penalty-counts1.js";
export { Period, periodSchema } from "./models/period.js";
export { permissionsSchema, type Permissions } from "./models/permissions.js";
export { permissions2Schema, type Permissions2 } from "./models/permissions2.js";
export { postSchema, type Post } from "./models/post.js";
export {
  postActionsJsonRequestSchema,
  type PostActionsJsonRequest,
} from "./models/post-actions-json-request.js";
export {
  postActionsJsonResponseSchema,
  type PostActionsJsonResponse,
} from "./models/post-actions-json-response.js";
export { post1Schema, type Post1 } from "./models/post1.js";
export { post2Schema, type Post2 } from "./models/post2.js";
export { post3Schema, type Post3 } from "./models/post3.js";
export { post4Schema, type Post4 } from "./models/post4.js";
export { postActionTypeSchema, type PostActionType } from "./models/post-action-type.js";
export { postStreamSchema, type PostStream } from "./models/post-stream.js";
export { postStream1Schema, type PostStream1 } from "./models/post-stream1.js";
export { postTypesSchema, type PostTypes } from "./models/post-types.js";
export { posterSchema, type Poster } from "./models/poster.js";
export { poster1Schema, type Poster1 } from "./models/poster1.js";
export { poster4Schema, type Poster4 } from "./models/poster4.js";
export { poster6Schema, type Poster6 } from "./models/poster6.js";
export { postsJsonRequest1Schema, type PostsJsonRequest1 } from "./models/posts-json-request1.js";
export { postsJsonRequest2Schema, type PostsJsonRequest2 } from "./models/posts-json-request2.js";
export { postsJsonResponse2Schema, type PostsJsonResponse2 } from "./models/posts-json-response2.js";
export { postsJsonResponse3Schema, type PostsJsonResponse3 } from "./models/posts-json-response3.js";
export {
  postsLockedJsonRequestSchema,
  type PostsLockedJsonRequest,
} from "./models/posts-locked-json-request.js";
export {
  postsLockedJsonResponseSchema,
  type PostsLockedJsonResponse,
} from "./models/posts-locked-json-response.js";
export {
  postsRepliesJsonResponseSchema,
  type PostsRepliesJsonResponse,
} from "./models/posts-replies-json-response.js";
export { postsJsonRequestSchema, type PostsJsonRequest } from "./models/posts-json-request.js";
export { postsJsonResponseSchema, type PostsJsonResponse } from "./models/posts-json-response.js";
export { postsJsonResponse1Schema, type PostsJsonResponse1 } from "./models/posts-json-response1.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { reminderSchema, type Reminder } from "./models/reminder.js";
export { replyToUserSchema, type ReplyToUser } from "./models/reply-to-user.js";
export { requiredTagGroupSchema, type RequiredTagGroup } from "./models/required-tag-group.js";
export { searchJsonResponseSchema, type SearchJsonResponse } from "./models/search-json-response.js";
export {
  sessionForgotPasswordJsonRequestSchema,
  type SessionForgotPasswordJsonRequest,
} from "./models/session-forgot-password-json-request.js";
export {
  sessionForgotPasswordJsonResponseSchema,
  type SessionForgotPasswordJsonResponse,
} from "./models/session-forgot-password-json-response.js";
export { silenceSchema, type Silence } from "./models/silence.js";
export { silencedBySchema, type SilencedBy } from "./models/silenced-by.js";
export {
  siteBasicInfoJsonResponseSchema,
  type SiteBasicInfoJsonResponse,
} from "./models/site-basic-info-json-response.js";
export { siteJsonResponseSchema, type SiteJsonResponse } from "./models/site-json-response.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { suggestedTopicSchema, type SuggestedTopic } from "./models/suggested-topic.js";
export { suspendedBySchema, type SuspendedBy } from "./models/suspended-by.js";
export { suspensionSchema, type Suspension } from "./models/suspension.js";
export {
  tChangeTimestampJsonRequestSchema,
  type TChangeTimestampJsonRequest,
} from "./models/tchange-timestamp-json-request.js";
export {
  tChangeTimestampJsonResponseSchema,
  type TChangeTimestampJsonResponse,
} from "./models/tchange-timestamp-json-response.js";
export {
  tInviteGroupJsonRequestSchema,
  type TInviteGroupJsonRequest,
} from "./models/tinvite-group-json-request.js";
export {
  tInviteGroupJsonResponseSchema,
  type TInviteGroupJsonResponse,
} from "./models/tinvite-group-json-response.js";
export { tInviteJsonRequestSchema, type TInviteJsonRequest } from "./models/tinvite-json-request.js";
export { tInviteJsonResponseSchema, type TInviteJsonResponse } from "./models/tinvite-json-response.js";
export { tJsonRequestSchema, type TJsonRequest } from "./models/tjson-request.js";
export { tJsonResponseSchema, type TJsonResponse } from "./models/tjson-response.js";
export { tJsonResponse1Schema, type TJsonResponse1 } from "./models/tjson-response1.js";
export {
  tNotificationsJsonRequestSchema,
  type TNotificationsJsonRequest,
} from "./models/tnotifications-json-request.js";
export {
  tNotificationsJsonResponseSchema,
  type TNotificationsJsonResponse,
} from "./models/tnotifications-json-response.js";
export { tPostsJsonResponseSchema, type TPostsJsonResponse } from "./models/tposts-json-response.js";
export { tStatusJsonRequestSchema, type TStatusJsonRequest } from "./models/tstatus-json-request.js";
export { tStatusJsonResponseSchema, type TStatusJsonResponse } from "./models/tstatus-json-response.js";
export { tTimerJsonRequestSchema, type TTimerJsonRequest } from "./models/ttimer-json-request.js";
export { tTimerJsonResponseSchema, type TTimerJsonResponse } from "./models/ttimer-json-response.js";
export { tagSchema, type Tag } from "./models/tag.js";
export {
  tagGroupsJsonRequest1Schema,
  type TagGroupsJsonRequest1,
} from "./models/tag-groups-json-request1.js";
export {
  tagGroupsJsonResponse2Schema,
  type TagGroupsJsonResponse2,
} from "./models/tag-groups-json-response2.js";
export {
  tagGroupsJsonResponse3Schema,
  type TagGroupsJsonResponse3,
} from "./models/tag-groups-json-response3.js";
export { tagGroupsJsonRequestSchema, type TagGroupsJsonRequest } from "./models/tag-groups-json-request.js";
export {
  tagGroupsJsonResponseSchema,
  type TagGroupsJsonResponse,
} from "./models/tag-groups-json-response.js";
export {
  tagGroupsJsonResponse1Schema,
  type TagGroupsJsonResponse1,
} from "./models/tag-groups-json-response1.js";
export { tagJsonResponseSchema, type TagJsonResponse } from "./models/tag-json-response.js";
export { tag3Schema, type Tag3 } from "./models/tag3.js";
export { tag4Schema, type Tag4 } from "./models/tag4.js";
export { tagGroupSchema, type TagGroup } from "./models/tag-group.js";
export { tagGroup1Schema, type TagGroup1 } from "./models/tag-group1.js";
export { tagGroup2Schema, type TagGroup2 } from "./models/tag-group2.js";
export { tagsJsonResponseSchema, type TagsJsonResponse } from "./models/tags-json-response.js";
export { thumbnailSchema, type Thumbnail } from "./models/thumbnail.js";
export { tl3RequirementsSchema, type Tl3Requirements } from "./models/tl3-requirements.js";
export { topJsonResponseSchema, type TopJsonResponse } from "./models/top-json-response.js";
export { topTagSchema, type TopTag } from "./models/top-tag.js";
export { topicSchema, type Topic } from "./models/topic.js";
export { topic1Schema, type Topic1 } from "./models/topic1.js";
export { topic2Schema, type Topic2 } from "./models/topic2.js";
export { topic3Schema, type Topic3 } from "./models/topic3.js";
export { topic4Schema, type Topic4 } from "./models/topic4.js";
export { topic5Schema, type Topic5 } from "./models/topic5.js";
export { topic6Schema, type Topic6 } from "./models/topic6.js";
export { topic7Schema, type Topic7 } from "./models/topic7.js";
export { topicFlagTypeSchema, type TopicFlagType } from "./models/topic-flag-type.js";
export { topicListSchema, type TopicList } from "./models/topic-list.js";
export { topicList1Schema, type TopicList1 } from "./models/topic-list1.js";
export { topicList2Schema, type TopicList2 } from "./models/topic-list2.js";
export { topicList3Schema, type TopicList3 } from "./models/topic-list3.js";
export { topicList4Schema, type TopicList4 } from "./models/topic-list4.js";
export { topicList5Schema, type TopicList5 } from "./models/topic-list5.js";
export {
  topicsPrivateMessagesJsonResponseSchema,
  type TopicsPrivateMessagesJsonResponse,
} from "./models/topics-private-messages-json-response.js";
export {
  topicsPrivateMessagesSentJsonResponseSchema,
  type TopicsPrivateMessagesSentJsonResponse,
} from "./models/topics-private-messages-sent-json-response.js";
export { triggersSchema, type Triggers } from "./models/triggers.js";
export { trustLevelsSchema, type TrustLevels } from "./models/trust-levels.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  uByExternalJsonResponseSchema,
  type UByExternalJsonResponse,
} from "./models/uby-external-json-response.js";
export { uEmailsJsonResponseSchema, type UEmailsJsonResponse } from "./models/uemails-json-response.js";
export { uJsonRequestSchema, type UJsonRequest } from "./models/ujson-request.js";
export { uJsonResponseSchema, type UJsonResponse } from "./models/ujson-response.js";
export { uJsonResponse1Schema, type UJsonResponse1 } from "./models/ujson-response1.js";
export {
  uPreferencesAvatarPickJsonRequestSchema,
  type UPreferencesAvatarPickJsonRequest,
} from "./models/upreferences-avatar-pick-json-request.js";
export {
  uPreferencesAvatarPickJsonResponseSchema,
  type UPreferencesAvatarPickJsonResponse,
} from "./models/upreferences-avatar-pick-json-response.js";
export {
  uPreferencesEmailJsonRequestSchema,
  type UPreferencesEmailJsonRequest,
} from "./models/upreferences-email-json-request.js";
export {
  uPreferencesUsernameJsonRequestSchema,
  type UPreferencesUsernameJsonRequest,
} from "./models/upreferences-username-json-request.js";
export { upcomingChangesStatSchema, type UpcomingChangesStat } from "./models/upcoming-changes-stat.js";
export { UploadType1, uploadType1Schema } from "./models/upload-type1.js";
export {
  uploadsAbortMultipartJsonRequestSchema,
  type UploadsAbortMultipartJsonRequest,
} from "./models/uploads-abort-multipart-json-request.js";
export {
  uploadsAbortMultipartJsonResponseSchema,
  type UploadsAbortMultipartJsonResponse,
} from "./models/uploads-abort-multipart-json-response.js";
export {
  uploadsBatchPresignMultipartPartsJsonRequestSchema,
  type UploadsBatchPresignMultipartPartsJsonRequest,
} from "./models/uploads-batch-presign-multipart-parts-json-request.js";
export {
  uploadsBatchPresignMultipartPartsJsonResponseSchema,
  type UploadsBatchPresignMultipartPartsJsonResponse,
} from "./models/uploads-batch-presign-multipart-parts-json-response.js";
export {
  uploadsCompleteExternalUploadJsonRequestSchema,
  type UploadsCompleteExternalUploadJsonRequest,
} from "./models/uploads-complete-external-upload-json-request.js";
export {
  uploadsCompleteExternalUploadJsonResponseSchema,
  type UploadsCompleteExternalUploadJsonResponse,
} from "./models/uploads-complete-external-upload-json-response.js";
export {
  uploadsCompleteMultipartJsonRequestSchema,
  type UploadsCompleteMultipartJsonRequest,
} from "./models/uploads-complete-multipart-json-request.js";
export {
  uploadsCompleteMultipartJsonResponseSchema,
  type UploadsCompleteMultipartJsonResponse,
} from "./models/uploads-complete-multipart-json-response.js";
export {
  uploadsCreateMultipartJsonRequestSchema,
  type UploadsCreateMultipartJsonRequest,
} from "./models/uploads-create-multipart-json-request.js";
export {
  uploadsCreateMultipartJsonResponseSchema,
  type UploadsCreateMultipartJsonResponse,
} from "./models/uploads-create-multipart-json-response.js";
export {
  uploadsGeneratePresignedPutJsonRequestSchema,
  type UploadsGeneratePresignedPutJsonRequest,
} from "./models/uploads-generate-presigned-put-json-request.js";
export {
  uploadsGeneratePresignedPutJsonResponseSchema,
  type UploadsGeneratePresignedPutJsonResponse,
} from "./models/uploads-generate-presigned-put-json-response.js";
export { uploadsJsonResponseSchema, type UploadsJsonResponse } from "./models/uploads-json-response.js";
export { userSchema, type User } from "./models/user.js";
export {
  userActionsJsonResponseSchema,
  type UserActionsJsonResponse,
} from "./models/user-actions-json-response.js";
export {
  userAvatarRefreshGravatarJsonResponseSchema,
  type UserAvatarRefreshGravatarJsonResponse,
} from "./models/user-avatar-refresh-gravatar-json-response.js";
export {
  userBadgesJsonResponseSchema,
  type UserBadgesJsonResponse,
} from "./models/user-badges-json-response.js";
export { user1Schema, type User1 } from "./models/user1.js";
export { user11Schema, type User11 } from "./models/user11.js";
export { user2Schema, type User2 } from "./models/user2.js";
export { user8Schema, type User8 } from "./models/user8.js";
export { userActionSchema, type UserAction } from "./models/user-action.js";
export { userAuthTokenSchema, type UserAuthToken } from "./models/user-auth-token.js";
export { userBadgeSchema, type UserBadge } from "./models/user-badge.js";
export { userColorSchemeSchema, type UserColorScheme } from "./models/user-color-scheme.js";
export {
  userNotificationScheduleSchema,
  type UserNotificationSchedule,
} from "./models/user-notification-schedule.js";
export { userOptionSchema, type UserOption } from "./models/user-option.js";
export { userThemeSchema, type UserTheme } from "./models/user-theme.js";
export { userTipsSchema, type UserTips } from "./models/user-tips.js";
export {
  usersPasswordResetJsonRequestSchema,
  type UsersPasswordResetJsonRequest,
} from "./models/users-password-reset-json-request.js";
export { usersJsonRequestSchema, type UsersJsonRequest } from "./models/users-json-request.js";
export { usersJsonResponseSchema, type UsersJsonResponse } from "./models/users-json-response.js";
export { Asc, ascSchema } from "./models/asc.js";
export { Flag, flagSchema } from "./models/flag.js";
export { IncludeDetails, includeDetailsSchema } from "./models/include-details.js";
export { IncludeSubcategories, includeSubcategoriesSchema } from "./models/include-subcategories.js";
export { Order, orderSchema } from "./models/order.js";
export { Order2, order2Schema } from "./models/order2.js";
export { Order3, order3Schema } from "./models/order3.js";
export { Period1, period1Schema } from "./models/period1.js";
export { UploadType, uploadTypeSchema } from "./models/upload-type.js";

export {
  CoreError as DiscourseError,
  ConnectionError,
  TimeoutError,
  AbortError,
  SdkError,
  AuthError,
} from "./core/errors.js";
export { ResponseError } from "./core/response-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { RequestOptions } from "./core/api-request.js";
export type { ErrorKind } from "./core/errors.js";
export type { ErrorPayload, Declared } from "./core/response-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
