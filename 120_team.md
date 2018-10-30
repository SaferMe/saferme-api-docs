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
	"name":"Sam Test Team 13 from sam.cheung",
	"industry":"industry1",
	"location":"1location",
	"is_manager_of":true,
	"is_owner_of":true
}
```
