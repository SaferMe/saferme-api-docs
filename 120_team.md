## Team API
With Team API V4 you can get a group of team, one team and update the team details.

```
GET /api/v4/teams
```

```
[
  {
  "id":1,
  "name":"Team 1",
  "industry":"team 1 industy",
  "location":"team 1 location"
  },
  {
  "id":2,
  "name":"Team 2",
  "industry":"team 2 industry",
  "location":"team 2 location"
  },
  {
  "id":3,
  "name":"Team 3",
  "industry":"team 3 industry",
  "location":"team 3 location"
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
  "name": "Team 1",
  "industry": "industry",
  "location": "location",
  "is_manager_of": true,
  "is_owner_of": true
}
```

Update Team details

```
PATCH /api/v4/teams/1
```

```
{
	"id":1,
	"name":"Team 1 updated",
	"industry":"industry updated",
	"location":"location updated",
	"is_manager_of":true,
	"is_owner_of":true
}
```

Create Team

```
POST /api/v4/teams
```

```
{
	"name":"Team 1",
	"industry":"industry",
	"location":"location"
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
