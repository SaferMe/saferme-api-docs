## Team Guests API
With Team Guests api V4 you can:

- [Fetch a Team Guest](#fetch-a-team-guest)
- [List Team Guests](#list-team-guests)
- [Available fields](#available-team_guest-fields)

### Fetch a team guest

Get a team_guest. See the optional [available fields](#available-team_guest-fields).
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
- `search_query`: if present filter full names by the provided value.`
- `include_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `exclude_ids`: if present filter by the provided value. Values are passed as auto-indexed arrays on query string as example above.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Allowed fields:
  `name`, `company`, `visiting`, `card_id`, `assigned_at`, `removed_at`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=name+asc`
    - `?orderby=assigned_at+desc`

```
GET /api/v4/teams/1/team_guests?fields=inventory_item_item_id,inventory_item_battery_status,-company&orderby=name+asc
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

### Available team_guest fields
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
