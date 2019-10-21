## Task API
With Task api V4 you can:

- [Create a Task](#create-a-task)
- [Fetch a Task](#fetch-a-task)
- [List Tasks](#list-tasks)
- [Update a task](#update-a-task)
- [Delete a Task](#delete-a-task)
- [Available fields](#available-task-fields)

### Create a Task
All the fields are required for create task endpoint. The request can be repeated
for each uuid provided to allow the clients to make sure they are in sync even
when using a dodgy connection. The serve will return `201 Created` when the task
is created successfully and in case a previous request has already created a
task for the very same `uuid` then `200 ok` is returned and no data is changed.

```
POST /api/v4/tasks
{
  "task": {
    "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
    "client_created_at": "2019-03-28T12:45:00Z",
    "title": "Task title",
    "description": "What need to me described\n is is possible to use multiple lines",
    "assignee_id": 22,
    "report_id": 171
  }
}
```

```
{
  "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
  "assignee_id": 3,
  "client_created_at": "2019-03-29T01:45:00.000+13:00",
  "completed_at": null,
  "completed_by_id": null,
  "creator_id": 3,
  "description": "What need to me described\n is is possible to use multiple lines",
  "report_id": 2,
  "title": "Task title"
}
```

### Fetch a task

Get a task. See the optional [available fields](#available-task-fields).
```
GET /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
```

```
{
  "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
  "assignee_id": 3,
  "client_created_at": "2019-03-29T01:45:00.000+13:00",
  "completed_at": null,
  "completed_by_id": null,
  "creator_id": 3,
  "description": "What need to me described\n is is possible to use multiple lines",
  "report_id": 2,
  "title": "Task title"
}
```

### List tasks
Fetch a paginated list of tasks for the current user.
The result is scoped under the current branded_app and team.
Optional params:
- `complete`: if present filter by the provided value. Allowed values: `true`, `false`.
- `report_id`: if present filter by the provided value.
- `assignee_id`: if present filter by the provided value.
- `orderby`: if present allow specify the response order by providing a list of
  order clauses each made of `<field_name> <direction>`. Combination of order
  clauses is made by concatenating them using commas. Allowed fields:
  `client_created_at`, `completed_at`. Directions: `asc` or `desc`.
  examples:
    - `?orderby=completed_at+desc`
    - `?orderby=client_created_at+desc`

```
GET /api/v4/tasks?assignee_id=3&complete=true&orderby=client_created_at+desc
```

```
[
  {
    "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
    "assignee_id": 3,
    "client_created_at": "2019-03-29T01:45:00.000+13:00",
    "completed_at": null,
    "completed_by_id": null,
    "creator_id": 3,
    "description": "Fill all the way to the top and cover with concrete",
    "report_id": 2,
    "title": "Close open hole"
  },
  {  
    "uuid": "a23afeff-fd03-4299-a3b9-dda998f1f999",
    "assignee_id": 3,
    "client_created_at": "2019-03-30T02:20:00.000+13:00",
    "completed_at": null,
    "completed_by_id": null,
    "creator_id": 12,
    "description": "Open the hole",
    "report_id": 2,
    "title": "Dig until uncover the pipes"
  },
  ...
]
```

### Update a task
Updates the allowed fields of one single task.
Allowed fields:
  - `description`
  - `title`
  - `assignee_id`
  - `time`

```
PATCH /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
{
  "task": {
    "title": "Cover the hole with a lid"
  }
}
```

```
204 No Content
```


### Delete a task

```
DELETE /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
```

```
204 No Content
```

### Available task fields
You can use the fields parameter in any of the Task API methods. The requested
method will respond with the required fields accordingly. All fields are
included by default but you can opt-out from them on request.

* **uuid**
* **assignee_id**
* **client_created_at**
* **completed_at**
* **completed_by_id**
* **creator_id**
* **description**
* **report_id**
* **title**
