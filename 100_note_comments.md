## Shapes API
With Note Comments api V4 you can:

- [Fetch a Note Comment](#fetch-a-note-comment)
- [List Note Comments](#list-note-comments)
- [Available fields](#available-note-comment-fields)

### Fetch a note comment

Get a note comment. See the optional [available fields](#available-shape-fields).
```
GET /api/v4/note_comment/14
```

```
{
  "id": 1,
  "comment": "Report state automatically changed from New to Reported",
  "created_at": "2017-02-28T15:46:30+13:00",
  "user_id": 2
}
```

### List note comment

Fetch a paginated list of note comments for a specified report

```
GET /api/v4/reports/42/note_comments
```

```
[  
  {
    "id": 1,
    "comment": "Report state automatically changed from New to Reported",
    "created_at": "2017-02-28T15:46:30+13:00",
    "user_id": 2,
  },
  ...
]
```

### Available note comment fields
You can use the fields parameter in any of the API methods above. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **comment**
* **created_at**
* public
* report_id
* **user_id**
