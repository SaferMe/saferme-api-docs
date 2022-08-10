## Report State Changes API
With Report State Changes api V4 you can:

- [List Report State Changes](#list-report-state-changes)


### List Report State Changes

Fetch a paginated list of risk assessments.
Optional params:
- `team_id`: if present filter entries by team_id.
- `report_id`: if present filter entries by report_id.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- `preset_filter`: if set to `syncable_reports` then it will include only results related to reports unresolved,
resolved over the last 7 days, reports current user made and reports assigned to current user.

```
GET /api/v4/report_state_changes?team_id=2&updated_after=2022-02-28T10:45:35.081+13:00&fields=report_uuid
```

```
[
  {
    "id": 123,
    "created_at": "2022-03-29T15:05:04.774+13:00",
    "new_report_state":{
      "id": 11,
      "name": "Be Aware"
    },
    "previous_report_state":{
      "id": 44,
      "name": "New Report"
    },
    "report_id": 22,
    "user_id": 34,
    "report_uuid": "82fd273a-a9ce-4a85-8fa7-a42615b309c4"
  },
  ...
]
```

### Available fields
You can use the fields parameter in any of the Report State Changes API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

- **id**
- **created_at**
- **new_report_state**
- **previous_report_state**
- **report_id**
- report_uuid
- **user_id**
