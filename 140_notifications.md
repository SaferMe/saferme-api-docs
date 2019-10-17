## Notification API
With Notification api V4 you can:

- [Fetch a Notification](#fetch-a-notification)
- [List Notification](#list-notifications)
- [Delete a Notification](#delete-a-notification)
- [Available fields](#available-notification-fields)

### Fetch a notification

Get a notification. See the optional [available fields](#available-notification-fields).
```
GET /api/v4/notifications/14
```

```
{
  "id": 14,
  "archived_at": null,
  "archived": false,
  "created_at": "2019-10-15T12:10:42.627+13:00",
  "read": false,
  "report_id": 5,
  "user_id": 18
}
```

### List notifications
Fetch a paginated list of notifications for the current user.
The result is scoped under the current branded_app and team.
Optional params:
- `archived`: if present filter by the provided value. Allowed values: `true`, `false`.
- `orderby`: if present allow specify the response order by providing a list of
  order clauses each made of `<field_name> <direction>`. Combination of order
  clauses is made by concatenating them using commas. Allowed fields:
  `archived_at`, `read`, `report.updated_at`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=updated_at+desc`
    - `?orderby=read+asc,archived_at+desc`

```
GET /api/v4/notifications?fields=-user_id&archived=false&orderby=read+asc,archived_at+desc
```

```
[  
  {  
    "id": 14,
    "archived_at": null,
    "archived": false,
    "created_at": "2019-10-15T12:10:42.627+13:00",
    "read": false,
    "report_id": 5
  },
  {  
    "id": 12,
    "archived_at": null,
    "archived": false,
    "created_at": "2019-10-16T12:10:42.627+13:00",
    "read": true,
    "report_id": 3
  },
  {  
    "id": 12,
    "archived_at": null,
    "archived": true,
    "created_at": "2019-10-12T12:10:42.627+13:00",
    "read": false,
    "report_id": 3
  },
  ...
]
```

### Update a notification
Updates the allowed fields of one single notification.
Allowed fields:
  - `archived`

```
PATCH /api/v4/notifications/14
{
  "notification": {
    "archived": true
  }
}
```

```
204 No Content
```


### Delete a notification

```
DELETE /api/v4/notifications/14
```

```
204 No Content
```

### Available notification fields
You can use the fields parameter in any of the Notification API methods. The requested
method will respond with the required fields accordingly. All fields are
included by default but you can opt-out from them on request.

* **id**
* **archived_at**
* **archived**
* **created_at**
* **read**
* **report_id**
* **user_id**
