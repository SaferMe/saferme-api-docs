## Team API
With Team api V4 you can:

- [List Teams](#list-teams)
- [Fetch a Team](#fetch-a-team)
- [Update a team](#update-a-team)
- [Create a Team](#create-a-team)
- [Add team users to team channels](#add-users-to-team-channels)
- [List channels for a team](#fetch-channels-for-a-team)
- [Fetch a team user](#fetch-a-team-user)
- [List team users](#list-team-users)
- [Bulk add users to a team](#bulk-add-users-to-a-team)
- [Bulk update users in a team](#bulk-update-users-to-a-team)
- [Bulk remove users from a team](#bulk-remove-users-to-a-team)
- [Available fields](#available-team-fields)

> **Notes:**
> - `feature_tasks_enabled` is a feature flag used to determine which team have the task management feature enabled.
> Please, feel free to contact support for more details about the feature and/or if you would like to ask for enabling this feature.

### List teams
List the teams which the current user has access to. See the optional [available fields](#available-team-fields).

```
GET /api/v4/teams
```

Response
```
[
  {
    "id": 1,
    "feature_tasks_enabled": true,
    "industry": "team 1 industy",
    "location": "team 1 location",
    "name": "Team 1"
  },
  {
    "id": 2,
    "feature_tasks_enabled": false,
    "industry": "team 2 industy",
    "location": "team 2 location",
    "name": "Team 2"
  },
  {
    "id": 3,
    "feature_tasks_enabled": true,
    "industry": "team 3 industy",
    "location": "team 3 location",
    "name": "Team 3"
  }
]
```

### Fetch a team
Fetch a team. See the optional [available fields](#available-team-fields). Following example presets fetching a team with all optional fields [is_manager_of, is_owner_of]
```
GET /api/v4/teams/1?fields=is_manager_of,is_owner_of
```

Response
```
{
  "id": 1,
  "feature_tasks_enabled": true,
  "name": "Team 1",
  "industry": "industry",
  "is_manager_of": true,
  "is_owner_of": true,
  "location": "location"
}
```

### Update a team

```
PATCH /api/v4/teams/1
```

Payload
```
{
  "team": {
    "name": "Team 1 updated",
    "industry": "industry updated",
    "location": "location updated",
    "is_owner_change": true,
    "user_id": 33
  }
}
```

### Create a Team
Create a team based on the branded app specified in the request header. The current user will be the owner of the team. Only `name` field is required.

```
POST /api/v4/teams
```

Payload
```
{
  "team": {
    "name": "Team 1",
    "industry": "industry",
    "location": "location"
  }
}
```

### Add team users to team channels
Add one or multiple team users to one or multiple team channels. Status code of this request will always be 207, however each response item has its own status code to mark whether the user is added to the channel successfully.

```
POST /api/v4/teams/1/add_users_to_team_channels
```

Payload
```
{
	"users": [
		{"user_id":6,"role":"operator","send_email":false},
		{"user_id":54,"role":"operator","send_email":false}
	],
	"channel_ids": [1, 2]
}
```

Response
```
[
  {"user_id":6,"channel_id":1,"http_status":201,"status":"success","errors":{}},
  {"user_id":54,"channel_id":1,"http_status":201,"status":"success","errors":{}},
  {"user_id":6,"channel_id":2,"http_status":201,"status":"success","errors":{}},
  {"user_id":54,"channel_id":2,"http_status":422,"status":"failed","errors":{}}
]
```

### List channels for a team
List all the channels that has been added to the team

```
GET /api/v4/teams/1/channels
```

Response
```
[
  {
    "id":46,
    "team_id":1
    "additional_fields":[],
    "allow_public_comments":true,
    "allow_public_viewers":true,
    "allow_user_delete_own_reports":false,
    "are_new_reports_anonymous":false,
    "banners_enabled":false,
    "category_id":75,
    "description":null,
    "form_locked":false,
    "huge":"missing/logos/huge.png"},
    "is_addon_channel":false,
    "is_manageable_by":true,
    "is_operable_by":true,
    "is_reportable_by":true,
    "large":"missing/logos/large.png",
    "logo":{"mini":"missing/logos/mini.png",
    "medium":"missing/logos/medium.png",
    "moderated":false,
    "name":"Team Channel",
    "reports_count":0,
    "risk_controls_editability":"admins_only",
    "slug":"another test 1",
    "small":"missing/logos/small.png",
  },
  ...
]
```

### List team users
List the users have been added to the team.

```
GET /api/v4/teams/1/team_users
```

Response
```
[
  {
    "id": 1,
    "user_id": 3,
    "supervisor_id": null,
    "role": "team_owner"
  },
  {
    "id": 22,
    "user_id": 46,
    "supervisor_id": null,
    "role": "team_manager"
  },
  ...
]
```

### Fetch a team user
Fetch the detail of a team user. Note that you should use team_user's id instead of user_id

```
GET /api/v4/teams/1/team_users/1
```

Response
```
{
  "id": 1,
  "user_id": 3,
  "supervisor_id": null,
  "role": "team_owner"
}
```

### Bulk add users to a team
Add multiple users to a team by using their email addresses. By default the system
sends invitation email to the user, this can be skipped by setting `skip_sending_email` as true. Status code of this request will always be 207, and each user in the response has its own status code to mark whether the user is added to the team successfully.

```
POST /api/v4/teams/1/team_users/bulk_create
```

Payload
```
[
  {
    "email": "saferme@test.com",
    "skip_sending_email": true
  },
  {
    "email": "saferme1@test.com"
  }
]
```

Response
```
[
  {
    "ref":{"email":"saferme@test.com"},
    "data":{"id":56,"user_id":81,"supervisor_id":null,"role":"team_member"},
    "http_status":201,
    "errors":{}
  },
  {
    "ref":{"email":"saferme1@test.com"},
    "data":{"id":57,"user_id":82,"supervisor_id":null,"role":"team_member"},
    "http_status":201,
    "errors":{}
  }
]
```

### Bulk update users in a team
Update one or multiple team user's supervisor or team role. Status code of this request will always be 207, and each user in the response has its own status code to mark whether the user is added to the team successfully.

```
POST /api/v4/teams/1/team_users/bulk_update
```

Payload
```
[
  {
    "id": 40,
    "user_id": 65,
    "supervisor_id": 57,
    "role": "team_member"
  },
  {
    "id": 41,
    "user_id": 66,
    "supervisor_id": 57,
    "role": "team_member"
  }
]
```

Response
```
[
  {"ref":{"id":40},"http_status":204,"errors":{}},
  {"ref":{"id":41},"http_status":204,"errors":{}}
]
```

### Bulk remove users from a team
Remove one or multiple users form the team. Status code of this request will always be 207, and each user in the response has its own status code to mark whether the user is added to the team successfully. Note that the id should be team_user's id, instead of user_id

```
POST /api/v4/teams/1/team_users/bulk_destroy
```

Payload
```
[
  {"id": 24},
  {"id": 26}
]
```

Response
```
[
  {"ref":{"id":24},"data":null,"http_status":204,"errors":{}},
  {"ref":{"id":26},"data":null,"http_status":204,"errors":{}}
]
```


### Available team fields
You can use the fields parameter in any of the Report API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request. Obviously, this
will make no difference on `204-No Content` responses.

* **id**
* **feature_tasks_enabled**
* **industry**
* **location**
* **name**
* is_manager_of
* is_owner_of

> **Notes:**
> - The highlighted fields by default included on the response.
