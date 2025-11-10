## Task API
With Task api V4 you can:

- [List Tasks](#list-tasks)
- [Create a Task](#create-a-task)
- [Fetch a Task](#fetch-a-task)
- [Update a task](#update-a-task)
- [Delete a Task](#delete-a-task)
- [Available fields](#available-task-fields)

### List tasks
Fetch a paginated list of tasks.
The result is scoped under the current team.
> See the optional [response fields](#response-fields).

Optional params:
- assignee_id: `integer`
- client_created_after: `date_time`
- client_created_before: `date_time`
- complete: `boolean`
- completed_after: `date_time`
- completed_before: `date_time`
- completed_by_id: `integer`
- include_uuids: `string[]`
- report_id: `integer`
- report_title_query: `string`
- team_id: `integer`
- title_query: `string`
- updated_after: `date_time`
- orderby: `string` => if present sorts the result the by given clause. Sorting clause must follow the pattern `<field_name> <direction>`. Where direction is one of `asc` or `desc` and `field_name` is one of the list below:
  - `assignee_name`
  - `completed_by_name`
  - `report_title`
  - `client_created_at`
  - `completed_at`
  - `title`


#### Request
```
GET /api/v4/tasks?assignee_id=3&complete=true&orderby=client_created_at+desc
```
#### Response
```
200 OK
Accept-Ranges tasks
Content-Range 0-1/2
```
```json
[
  {
    "uuid": "1d9cd40a-743d-423f-8d7a-59f33fc6c4fb",
    "assignee_id": 3,
    "client_created_at": "2023-01-14 13:32:00 +1300",
    "completed_at": "2023-05-18 04:58:22 +1200",
    "completed_by_id": 1965,
    "creator_id": 1064,
    "description": "Green Tea",
    "due_at": "2023-02-01 13:46:00 +1300",
    "report_id": 1063,
    "report_uuid": "f5b82552-2792-45fc-b87e-ffa2abd645fa",
    "title": "Laverna Fahey Parfait"
  },
  {
    "uuid": "1b6e2384-1216-404e-8e70-c9d4daeba454",
    "assignee_id": 3,
    "client_created_at": "2023-01-14 13:32:00 +1300",
    "completed_at": "2023-05-18 04:58:22 +1200",
    "completed_by_id": 1965,
    "creator_id": 1073,
    "description": "Caramel",
    "due_at": "2023-02-03 13:46:00 +1300",
    "report_id": 1072,
    "report_uuid": "938604ad-6048-4021-ad1c-247c2baf6255",
    "title": "Pres. Lina Schroeder Cheesecake"
  }
]
```


### Create a Task
All the fields are required for create task endpoint. The request can be repeated
for each uuid provided to allow the clients to make sure they are in sync even
when using a dodgy connection. The serve will return `201 Created` when the task
is created successfully and in case a previous request has already created a
task for the very same `uuid` then `200 ok` is returned and no data is changed.

##### Input fields for create:
- **uuid**: `string`
- **client_created_at**: `time`
- **title**: `string`
- **description**: `string`
- assignee_id: `record<User>`
- due_at: `time`
- report_id: `integer`
- report_uuid: `string`
- completed_at: `time`


#### Request
```
POST /api/v4/tasks
Content-Type application/json
```
```json
{
  "task": {
    "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
    "client_created_at": "2023-03-28T12:45:00Z",
    "title": "Task title",
    "description": "What need to me described\n is is possible to use multiple lines",
    "due_at": "2023-05-01T12:00:00.000+13:00",
    "assignee_id": 22,
    "report_id": 1711
  }
}
```
#### Response
```
201 Created
```
```json
{
  "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
  "assignee_id": 22,
  "client_created_at": "2023-03-29 01:45:00 +1300",
  "completed_at": null,
  "completed_by_id": null,
  "creator_id": 1076,
  "description": "What need to me described\n is is possible to use multiple lines",
  "due_at": "2023-05-01 11:00:00 +1200",
  "report_id": 1057,
  "report_uuid": "b65911f1-2b08-4c29-a27f-2d406dbd41bd",
  "title": "Task title"
}
```


### Fetch a task
Get a task entry.
> See the optional [available fields](#available-task-fields).

#### Request
```
GET /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
````
#### Response
```
200 OK
```
```json
{
  "uuid": "3ffeef7c-0f73-4e82-b39e-5a55cce0daef",
  "assignee_id": 22,
  "client_created_at": "2023-03-29 01:45:00 +1300",
  "completed_at": null,
  "completed_by_id": null,
  "creator_id": 1079,
  "description": "What need to me described\n is is possible to use multiple lines",
  "due_at": "2023-05-01 11:00:00 +1200",
  "report_id": 1057,
  "report_uuid": "b65911f1-2b08-4c29-a27f-2d406dbd41bd",
  "title": "Task title"
}
```


### Update a task
Updates the allowed fields on one single task. It only updates the fields sent.

##### Input fields for update:
- description: `string`
- title: `string`
- assignee_id: `record<User>`
- due_at: `time`
- completed_at: `time`


#### Request
```
PATCH /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
Content-Type application/json
```
```json
{
  "task": {
    "title": "Task title",
    "description": "What need to me described\n is is possible to use multiple lines"
  }
}
```
#### Response
```
204 No Content
```


### Delete a task
Deletes one task.

#### Request
```
PATCH DELETE /api/v4/tasks/3ffeef7c-0f73-4e82-b39e-5a55cce0daef
```
#### Response
```
204 No Content
```

### Response fields
You can use the `fields` query parameter in any of the Task API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **uuid**
- **assignee_id**
- **client_created_at**
- **completed_at**
- **completed_by_id**
- **creator_id**
- **description**
- **due_at**
- **report_id**
- **report_uuid**
- **title**

