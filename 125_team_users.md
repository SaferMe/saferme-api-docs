## Team Users API
With Team Users api V4 you can:

- [Fetch a Team User](#fetch-a-team-user)
- [List Team Users](#list-team-users)
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

### Available team_user fields
You can use the fields parameter in any of the Team Users API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **agreed_to_join**
* **app_version**
* **bluetooth_enabled**
* channel_count
* email
* first_name
* **last_active_at**
* **last_invited_at**
* last_name
* **location_enabled**
* **push_notification_enabled**
* report_count
* **role**
* status
* **supervisor_id**
* **user_id**
