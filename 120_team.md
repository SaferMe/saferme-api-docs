## Team API
With Team API V4 you can get a group of team, one team and update the team details.

```
GET /api/v4/teams
```

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

Get Team with all optional fields [is_manager_of, is_owner_of]
```
GET /api/v4/teams/1?fields=is_manager_of,is_owner_of
```

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

Update Team details

```
PATCH /api/v4/teams/1
```

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

Create Team

```
POST /api/v4/teams
```

```
{
  "team": {
    "name": "Team 1",
    "industry": "industry",
    "location": "location"
  }
}
```

Add One or Multiple Users to One or Multiple Team Channels

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
