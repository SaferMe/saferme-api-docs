## Team Guests API
With Team Guests api V4 you can:

- [Fetch a Team Guest](#fetch-a-team-guest)
- [List Team Guests](#list-team-guests)
- [Bulk Create Team Guests](#bulk-create-team-guests)
- [Update a Team Guest](#update-a-team-guest)
- [Bulk Delete Team Guests (Async)](#bulk-delete-team-guests-async)
- [Available fields](#available-fields)

### Fetch a team guest

Get a team_guest. See the optional [available fields](#available-fields).
```
GET /api/v4/team_guests/56?fields=inventory_item_item_id,inventory_item_battery_status,-company
```

```
{
  "id": 56,
  "uuid": "cf7d7471-15c5-411f-b650-7ed91e1a51f7",
  "first_name": "Sammy",
  "inventory_item_battery_status": 85,
  "inventory_item_item_id": "4610 0839 9133",
  "last_name": "Carter",
  "preferred_contact": "",
  "team_id": 1,
  "visiting": ""
}
```

### List team guests

Fetch a paginated list of team guests.
Optional params:
- `search_query`: if present filter full names by the provided value.
- `include_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `exclude_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Allowed fields:
  `name`, `company`, `visiting`, `card_id`, `assigned_at`, `removed_at`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=name+asc`
    - `?orderby=assigned_at+desc`

```
GET /api/v4/teams/123/team_guests?fields=inventory_item_item_id,inventory_item_battery_status,-company&orderby=name+asc
```

```
[
  {
    "id": 55,
    "uuid": "1ddfa0f1-d8f4-4959-a3b0-e2508562657d",
    "first_name": "Douglas",
    "inventory_item_battery_status": null,
    "inventory_item_item_id": null,
    "last_name": "Hackett",
    "preferred_contact": "",
    "team_id": 1,
    "visiting": ""
  },
  {
    "id": 56,
    "uuid": "cf7d7471-15c5-411f-b650-7ed91e1a51f7",
    "first_name": "Sammy",
    "inventory_item_battery_status": 85,
    "inventory_item_item_id": "4610 0839 9133",
    "last_name": "Carter",
    "preferred_contact": "",
    "team_id": 1,
    "visiting": ""
  }
  ,
  ...
]
```

### Bulk create Team Guests
Multiple guests can be created in a single request (200 max). `first_name` is a
required field. Each item in the request will have a respective item in the
response including a references (`ref`) to its index in the request.
**Please note that it is possible to have partial failure if not all items are validated.**

```
POST /api/v4/teams/123/team_guests/bulk_create'

[
  {
    "company": "Acme inc",
    "first_name": "James",
    "last_name": "West",
    "preferred_contact": "james@acme.com",
    "visiting": "Adam Johnson"
  },
  {
    "first_name": "Brandon Lee",
  }
  ...
]
```

```
[
  {
    "ref": 0,
    "data": {
      "id": 57,
      "uuid": "163e2604-985c-4f03-bdff-4e31175f4646",
      "company": "Acme Inc",
      "first_name": "James",
      "last_name": "West",
      "preferred_contact": "james@acme.com",
      "team_id": 123,
      "visiting": "Adam Johnson"
    },
    "http_status": 201,
    "errors": {}
  },
  {
    "ref": 1,
    "data": {
      "id": 58,
      "uuid": "c3c89e98-a291-4dd7-988b-26758d9bef69",
      "company": "",
      "first_name": "Brandon Lee",
      "last_name": "",
      "preferred_contact": "",
      "team_id": 123,
      "visiting": ""
    },
    "http_status": 201,
    "errors": {}
  }
  ...
]
```

### Update a Team Guest
Updates the allowed fields of one single team guest.
Allowed fields:
  - `company`
  - `first_name`
  - `last_name`
  - `preferred_contact`
  - `visiting`

```
PATCH /api/v4/team_guests/57
{
  "team_guest": {
    "company": "Acme LTD.",
    "first_name": "James",
    "last_name": "West",
    "preferred_contact": "james.west@acme.com",
    "visiting": "Robert Redford"
  }
}
```

```
204 No Content
```

### Bulk Delete Team Guests (Async)
Delete multiple team_guests in a background process.
It may takes the same filter parameters available for listing, then all the
matched records are deleted. Optional params:
- `search_query`: if present filter full names by the provided value.`
- `include_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `exclude_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.

Description field is optional and it will be echoed on the [Async Job](async_job.md) responses.

> Note: ATTENTION!!! Every records is be deleted when no filter criteria is specified.

The response for this request is an [Async Job](async_job.md) Resource with current status of the
Background process. The background process status can be polled if you need to
retrieve conclusion status, result and eventual error messages.

```
POST /api/v4/teams/123/team_guests/bulk_destroy
{
  description: "Deleting some guests",
  include_ids: [
    56,
    58
  ]
}
```

```
{
  "id": 85842,
  "completed": false,
  "description": "Deleting some guests",
  "success": null,
  "artifact_url": null,
  "result": null,
  "download_filename": null
}
```

### Available fields
You can use the fields parameter in any of the Team Guests API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **uuid**
* **company**
* **first_name**
* inventory_item_assigned_at
* inventory_item_assigned
* inventory_item_battery_status
* inventory_item_item_id
* inventory_item_last_sync_time
* inventory_item_unassigned_at
* is_deletable
* **last_name**
* **preferred_contact**
* **team_id**
* **visiting**
