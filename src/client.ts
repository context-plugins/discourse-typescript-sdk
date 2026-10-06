import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Admin } from "./resources/admin.js";
import { Backups } from "./resources/backups.js";
import { Badges } from "./resources/badges.js";
import { Categories } from "./resources/categories.js";
import { DiscourseCalendarEvents } from "./resources/discourse-calendar-events.js";
import { Groups } from "./resources/groups.js";
import { Invites } from "./resources/invites.js";
import { Notifications } from "./resources/notifications.js";
import { Posts } from "./resources/posts.js";
import { PrivateMessages } from "./resources/private-messages.js";
import { Search } from "./resources/search.js";
import { Site } from "./resources/site.js";
import { Tags } from "./resources/tags.js";
import { Topics } from "./resources/topics.js";
import { Uploads } from "./resources/uploads.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This page contains the documentation on how to use Discourse through API calls.
 *
 * > Note: For any endpoints not listed you can follow the [reverse engineer the Discourse
 * API](https://meta.discourse.org/t/-/20576) guide to figure out how to use an API endpoint.
 *
 * ### Request Content-Type
 *
 * The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`,
 * `multipart/form-data`, or `application/json`.
 *
 * ### Endpoint Names and Response Content-Type
 *
 * Most API endpoints provide the same content as their HTML counterparts. For example the URL
 * `/categories` serves a list of categories, the `/categories.json` API provides the same
 * information in JSON format.
 *
 * Instead of sending API requests to `/categories.json` you may also send them to `/categories` and
 * add an `Accept: application/json` header to the request to get the JSON response. Sending
 * requests with the `Accept` header is necessary if you want to use URLs for related endpoints
 * returned by the API, such as pagination URLs. These URLs are returned without the `.json` prefix
 * so you need to add the header in order to get the correct response format.
 *
 * ### Authentication
 *
 * Some endpoints do not require any authentication, pretty much anything else will require you to
 * be authenticated.
 *
 * To become authenticated you will need to create an API Key from the admin panel.
 *
 * Once you have your API Key you can pass it in along with your API Username as an HTTP header like
 * this:
 *
 * ```
 * curl -X GET "http://127.0.0.1:3000/admin/users/list/active.json" \
 * -H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
 * -H "Api-Username: system"
 * ```
 *
 * and this is how POST requests will look:
 *
 * ```
 * curl -X POST "http://127.0.0.1:3000/categories" \
 * -H "Content-Type: multipart/form-data;" \
 * -H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
 * -H "Api-Username: system" \
 * -F "name=89853c20-4409-e91a-a8ea-f6cdff96aaaa" \
 * -F "color=49d9e9" \
 * -F "text_color=f0fcfd"
 * ```
 *
 * ### Boolean values
 *
 * If an endpoint accepts a boolean be sure to specify it as a lowercase `true` or `false` value
 * unless noted otherwise.
 */
export class DiscourseClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #discourseCalendarEvents?: DiscourseCalendarEvents;
  #backups?: Backups;
  #badges?: Badges;
  #categories?: Categories;
  #groups?: Groups;
  #invites?: Invites;
  #notifications?: Notifications;
  #posts?: Posts;
  #topics?: Topics;
  #privateMessages?: PrivateMessages;
  #search?: Search;
  #site?: Site;
  #tags?: Tags;
  #uploads?: Uploads;
  #users?: Users;
  #admin?: Admin;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options),
      defaultHeaders: [
        { name: "User-Agent", value: "DiscourseClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);
  }

  get discourseCalendarEvents(): DiscourseCalendarEvents {
    return (this.#discourseCalendarEvents ??= new DiscourseCalendarEvents(this.#rawClient, this.#servers));
  }

  get backups(): Backups {
    return (this.#backups ??= new Backups(this.#rawClient, this.#servers));
  }

  get badges(): Badges {
    return (this.#badges ??= new Badges(this.#rawClient, this.#servers));
  }

  get categories(): Categories {
    return (this.#categories ??= new Categories(this.#rawClient, this.#servers));
  }

  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers));
  }

  get invites(): Invites {
    return (this.#invites ??= new Invites(this.#rawClient, this.#servers));
  }

  get notifications(): Notifications {
    return (this.#notifications ??= new Notifications(this.#rawClient, this.#servers));
  }

  get posts(): Posts {
    return (this.#posts ??= new Posts(this.#rawClient, this.#servers));
  }

  get topics(): Topics {
    return (this.#topics ??= new Topics(this.#rawClient, this.#servers));
  }

  get privateMessages(): PrivateMessages {
    return (this.#privateMessages ??= new PrivateMessages(this.#rawClient, this.#servers));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers));
  }

  get site(): Site {
    return (this.#site ??= new Site(this.#rawClient, this.#servers));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers));
  }

  get uploads(): Uploads {
    return (this.#uploads ??= new Uploads(this.#rawClient, this.#servers));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers));
  }

  get admin(): Admin {
    return (this.#admin ??= new Admin(this.#rawClient, this.#servers));
  }
}
