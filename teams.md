## Teams API
With Teams api V4 you can:

- [List Teams](#list-teams)
- [Fetch a Team](#fetch-a-team)
- [Create a Team](#create-a-team)
- [Update a Team](#update-a-team)
- [Available fields](#available-fields)

> **Notes:**
> - `feature_tasks_enabled` is a feature flag used to determine which team have the task management feature enabled.
> Please, feel free to contact support for more details about the feature and/or if you would like to ask for enabling this feature.

## List teams

Fetch a paginated list of team.

```
GET /api/v4/teams?fields=is_owner_of
```

```
[
  {
    "id": 123,
    "contact_tracing_enabled": true,
    "form_contact_tracing_enabled": true,
    "feature_tasks_enabled": true,
    "guests_enabled": true,
    "industry": "",
    "is_owner_of": true,
    "location": "",
    "name": "Workers all Safe",
    "risk_register_enabled": true,
    "sso_required": false,
    "sso_team_id": "workers-all-safe",
    "user_timeout": null,
    "wearables_enabled": true
  },
  {
    "id": 321,
    "contact_tracing_enabled": true,
    "form_contact_tracing_enabled": true,
    "feature_tasks_enabled": true,
    "guests_enabled": false,
    "industry": null,
    "is_owner_of": false,
    "location": null,
    "name": "Productive and Sound",
    "risk_register_enabled": false,
    "sso_required": false,
    "sso_team_id": "afsdfsdfgsdf",
    "user_timeout": null,
    "wearables_enabled": false
  },
  ...
]
```

### Fetch a team

Get a team. See the optional [available fields](#available-fields).
```
GET /api/v4/team/123?fields=is_owner_of
```

```
{
  "id": 123,
  "contact_tracing_enabled": true,
  "form_contact_tracing_enabled": true,
  "feature_tasks_enabled": true,
  "guests_enabled": true,
  "industry": "",
  "is_owner_of": true,
  "location": "",
  "name": "Workers all Safe",
  "risk_register_enabled": true,
  "sso_required": false,
  "sso_team_id": "workers-all-safe",
  "user_timeout": null,
  "wearables_enabled": true
}
```

### Create a team
Creates one team.

##### Input fields for create:
- **name**: `string`
- industry: `string`
- location: `string`
- mapbox_username: `string`
- mapbox_dataset_id: `string`
- mapbox_access_token: `string`
- feature_tasks_enabled: `boolean` => Only available to branded app admins. Defaults to: `true`


#### Request
```
POST /api/v4/teams
Content-Type application/json
```
```json
{
  "team": {
    "name": "Synchronised impactful task-force",
    "industry": "Renewables & Environment",
    "location": "Tokelau"
  }
}
```
#### Response
```
201 Created
```
```json
{
  "id": 1041,
  "contact_tracing_enabled": false,
  "form_contact_tracing_enabled": false,
  "feature_tasks_enabled": true,
  "guests_enabled": false,
  "industry": "Renewables & Environment",
  "location": "Tokelau",
  "name": "Synchronised impactful task-force",
  "risk_register_enabled": false,
  "site_enabled": false,
  "allow_member_managing_site": false,
  "sso_required": false,
  "sso_team_id": "32818bf97316",
  "training_enabled": false,
  "user_timeout": null,
  "wearables_enabled": false
}
```


### Update a Team
Updates the allowed fields of one single team.

##### Input fields for update:
- name: `string`
- industry: `string`
- location: `string`
- is_owner_change: `boolean`
- user_id: `record<User>`
- feature_tasks_enabled: `boolean`
- mapbox_username: `string`
- mapbox_dataset_id: `string`
- mapbox_access_token: `string`
- allow_member_managing_site: `boolean`


```
PATCH /api/v4/teams/123
{
  "team": {
    "feature_tasks_enabled": true,
    "industry": "Safety and protection",
    "location": "Global",
    "name": "Every Worker Safe",
  }
}
```

```
204 No Content
```

### Add One or Multiple Users to One or Multiple Team Channels

```
POST /api/v4/teams/1/add_users_to_team_channels
```

Params required
```
{
	"users": [
		{"user_id":6,"role":"operator","send_email":false},
		{"user_id":54,"role":"operator","send_email":false}
	],
	"channels": [
		{"name":"Team channel","id":4,"isSelected":true},
		{"name":"Team channel 2","id":5,"isSelected":true}
	]
}
```

Response
```
{
    "teams": [
        [
            {
                "object": {
                    "user_id": 6,
                    "role": "operator",
                    "send_email": false
                },
                "http_status": 200,
                "status": "success",
                "errors": {}
            },
            {
                "object": {
                    "user_id": 54,
                    "role": "operator",
                    "send_email": false
                },
                "http_status": 201,
                "status": "success",
                "errors": {}
            }
        ],
        [
            {
                "object": {
                    "user_id": 6,
                    "role": "operator",
                    "send_email": false
                },
                "http_status": 200,
                "status": "success",
                "errors": {}
            },
            {
                "object": {
                    "user_id": 54,
                    "role": "operator",
                    "send_email": false
                },
                "http_status": 201,
                "status": "success",
                "errors": {}
            }
        ]
    ]
}
```

### Available fields
You can use the fields parameter in any of the Teams API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

- **id**
- **allow_member_managing_site**
- **contact_tracing_enabled**
- **feature_tasks_enabled**
- **form_contact_tracing_enabled**
- **guests_enabled**
- **industry**
- is_admin_of
- is_manager_of
- is_owner_of
- **location**
- mapbox_access_token
- mapbox_dataset_id
- mapbox_username
- **name**
- owner_id
- **risk_register_enabled**
- **site_enabled**
- **sso_required**
- **sso_team_id**
- **training_enabled**
- **user_timeout**
- **wearables_enabled**
