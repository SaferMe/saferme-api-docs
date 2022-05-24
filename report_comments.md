## Report Comments API
With Report Comments api V4 you can:

- [List Report Comments](#list-report-comments)
- [Fetch a Report Comment](#fetch-a-report-comment)
- [Available fields](#available-report-comment-fields)


### List report comments
Fetch a paginated list of report comments.

Optional params:
- `report_id`: if present filter entries by report_id.
- `team_id`: if present filter entries by team_id.
- `user_id`: if present filter entries created by user_id.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Allowed fields:
  `updated_at`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=updated_at+asc`

```
GET /api/v4/report comments?updated_after=2022-05-24T19:30:30.278+12:00&orderby=updated_after+asc&fields=-report_id,report_uuid
```

```
[
  {
    "id": 3,
    "uuid": "f6f61af8-cbc6-4d0f-9e56-4815c1a4b21d",
    "content": "Sapiente eos sunt. Ratione in aperiam. Sit ad at.",
    "created_at": "2022-05-24T19:30:30.278+12:00",
    "is_anonymous": false,
    "report_uuid": "15eb79c0-def4-4b69-bfa3-35fcc5c301b9",
    "user_id": 15
  },
  {
    "id": 5,
    "uuid": "794c83d7-6ede-447c-a22a-aed65f2e069c",
    "content": "Modi temporibus animi. Omnis earum enim. Nesciunt consequatur illum.",
    "created_at": "2022-05-24T19:31:00.174+12:00",
    "is_anonymous": true,
    "report_uuid": "15eb79c0-def4-4b69-bfa3-35fcc5c301b9"
  }
]
```

### Fetch a channel

Get a channel. See the optional [available fields](#available-report-comments-fields).
```
GET /api/v4/report_comments/14?fields=-created_at,report_uuid
```

```
{
  "id": 5,
  "uuid": "794c83d7-6ede-447c-a22a-aed65f2e069c",
  "content": "Modi temporibus animi. Omnis earum enim. Nesciunt consequatur illum.",
  "is_anonymous": true,
  "report_id": 2,
  "report_uuid": "15eb79c0-def4-4b69-bfa3-35fcc5c301b9"
}
```

### Available channel fields
You can use the fields parameter in any of the Report Comment API methods. The requested
method will respond with the required fields accordingly. All fields are
included by default but you can opt-out from them on request.

- **id**
- **uuid**
- **content**
- **created_at**
- **is_anonymous**
- **report_id**
- report_uuid
- **user_id**
