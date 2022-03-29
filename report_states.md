## Report States API
With Report States api V4 you can:

- [Fetch a Report State](#fetch-a-report-state)
- [List Report States](#list-report-states)


### Fetch a Report State

Get a report_state. See the optional [available fields](#available-fields).
```
GET /api/v4/report_states/23
```

```
{
  "id": 23,
  "account_id": 2,
  "assign_to_supervisor": false,
  "assignable": false,
  "assignment_due_timeout": 0,
  "auto_archive": false,
  "default_assignee_id": null,
  "editability": "admins_only",
  "loudness": "normal",
  "name": "State 2",
  "notify": "all",
  "position": 2,
  "timeout": 0,
  "visibility": "everyone"
}
```

### List Report States

Fetch a paginated list of report states.
Optional params:
- `team_id`: if present filter entries by team_id.
- `channel_id`: if present filter entries by channel_id.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.

```
GET /api/v4/report_states?team_id=2&updated_after=2022-02-28T10:45:35.081+13:00&fields=updated_at
```

```
[
  {
    "id": 4,
    "account_id": 2,
    "assign_to_supervisor": false,
    "assignable": true,
    "assignment_due_timeout": 0,
    "auto_archive": false,
    "default_assignee_id": null,
    "editability": "admins_only",
    "loudness": "normal",
    "name": "New Report",
    "notify": "none",
    "position": 1,
    "timeout": 0,
    "updated_at": "2022-03-01T10:37:16.681+13:00",
    "visibility": "everyone"
  },
  {
    "id": 6,
    "account_id": 3,
    "assign_to_supervisor": false,
    "assignable": true,
    "assignment_due_timeout": 0,
    "auto_archive": false,
    "default_assignee_id": null,
    "editability": "admins_only",
    "loudness": "normal",
    "name": "New Report",
    "notify": "none",
    "position": 1,
    "timeout": 0,
    "updated_at": "2022-03-01T09:17:16.444+13:00",
    "visibility": "everyone"
  },
  ...
]
```

### Available fields
You can use the fields parameter in any of the Report States API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **account_id**
* **assign_to_supervisor**
* **assignable**
* **assignment_due_timeout**
* **auto_archive**
* **default_assignee_id**
* **editability**
* **loudness**
* **name**
* **notify**
* **position**
* **timeout**
* updated_at
* **visibility**
