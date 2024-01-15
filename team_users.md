## Team Users API
With Team Users api V4 you can:

- [Fetch a Team User](#fetch-a-team-user)
- [List Team Users](#list-team-users)
- [Bulk Create Team Users](#bulk-create-team-users-async)
- [Available fields](#available-team_user-fields)

### Fetch a team user

Get a team_user. See the optional [available fields](#available-team_user-fields).
```
GET /api/v4/teams/1/team_users/14?fields=first_name,last_name,email,-supervisor_id
```

```
{
  "id":14,
  "agreed_to_join":true,
  "app_version":"2.9.6",
  "bluetooth_enabled":true,
  "email":"safeuser@responsiblecompany.com",
  "first_name":"Safe",
  "last_active_at":"2020-09-11T15:43:29.682+12:00",
  "last_invited_at":null,
  "last_name":"Awareson",
  "location_enabled":true,
  "push_notification_enabled":true,
  "role":"team_member",
  "user_id":22
}
```

### List team users

Fetch a paginated list of team users.
Optional params:
- `agreed_to_join`: if present filter by the provided value. Allowed values: `true`, `false`.
- `team_role`: if present filter by the provided value. Allowed values: `true`, `false`.
- `user_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string. Example: `user_ids[]=343&user_ids[]=222`
- `includes_team_user_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `excludes_team_user_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `search_query`: if present filter full names by the provided value.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Allowed fields:
  `name`, `email`, `last_invited_at`, `last_activity`, `supervisor`, `status`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=status+desc`
    - `?orderby=last_activity+desc`

```
GET /api/v4/teams/1/team_users?fields=first_name,last_name,email,-supervisor_id&orderby=last_activity+asc
```

```
[
  {
    "id":14,
    "agreed_to_join":true,
    "app_version":"2.9.6",
    "bluetooth_enabled":true,
    "email":"safeuser@responsiblecompany.com",
    "first_name":"Safe",
    "last_active_at":"2020-09-11T15:43:29.682+12:00",
    "last_invited_at":null,
    "last_name":"Awareson",
    "location_enabled":true,
    "push_notification_enabled":true,
    "role":"team_member",
    "user_id":22
  },
  ...
]
```


### Bulk Create Team Users (Async)
Create multiple team_users in a background process.

It takes an optional `description` field and echo its value on [Async Job](async_job.md) responses.
It also requires a list of `team_users` to be added to the Organization.
These are the allowed fields in for each entry on `team_users` list:
- `email` string required
- `ref` string optional (default: same value as the email) Arbitrary string to be echoed on async results to match error messages.
- `first_name` string optional
- `last_name` string optional
- `skip_sending_email` boolean optional (default: false)
- `team_role` string optional (default: "team_member", valid options: "team_member", "team_manager", "team_admin")

The response for this request is an [Async Job](async_job.md) Resource with current status of the
Background process. The background process status can be polled if you need to
retrieve conclusion status, result and eventual error messages.

**Please note that it is possible to have partial failure if not all items are validated.**

```
POST /api/v4/teams/123/team_users/async_bulk_create

{
  "team_users": [
    {
      "email": "ana.admin@team.com",
      "ref": "record1",
      "first_name": "Ana",
      "last_name": "Begins",
      "skip_sending_email": true
      "team_role": "team_admin",
    },
    {
      "email": "mark.manager@team.com",
      "team_role": "team_manager"
    },
    {
      "email": "merrit.member@team.com",
      "team_role": "team_member"
    }
  ],
  "description": "Adding members to organization"
}
```

```
{
  "id": 133881,
  "completed": false,
  "description": "Adding members to organization",
  "success": null,
  "artifact_url": null,
  "result": null,
  "download_filename": null
}
```

### Available team_user fields
You can use the fields parameter in any of the Team Users API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

- **id**
- **agreed_to_join**
- **app_version**
- **bluetooth_enabled**
- channel_count
- email
- first_degree_contact_count
- first_name
- inventory_item_assigned
- inventory_item_assigned_at
- inventory_item_battery_status
- inventory_item_item_id
- inventory_item_last_sync_time
- is_deletable
- **last_active_at**
- **last_invited_at**
- last_name
- **location_enabled**
- preferred_contact
- **push_notification_enabled**
- report_count
- **role**
- **site_visit_terms_accepted**
- status
- **supervisor_id**
- **user_id**

