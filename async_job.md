## Async Jobs API
Async Job is a polymorphic resource and it may include different kinds of results
and adapting its contents according with a few specific needs.
On the most common scenarios the result is presented through its completion status,
artifact_url linking to the result of the task to be downloaded or inline result in
the `result` attribute.

With Async Jobs api V4 you can:

- [Fetch a Async Job](#fetch-a-async-job)
- [List Async Jobs](#list-async-jobs)

### Fetch a async job
Get a async_job. See the optional [available fields](#available-async_job-fields).

```
GET /api/v4/async_jobs/12345
```

```
{
  "id": 12345,
  "completed": true,
  "description": "Some message given when job was created",
  "success": true,
  "artifact_url": null,
  "result": {"errors": []},
  "download_filename": null
}
```

### List async jobs

Fetch a paginated list of async jobs created by your user.
Optional params:
- `completed`: If set to true only display finished jobs (successfully or not).
If set to false only display not completed (enqueued or running). Display all if not set.

```
GET /api/v4/teams/123/async_jobs?completed=false
```

```
[
  {
    "id": 12345,
    "completed": false,
    "description": "Some message given when job was created",
    "success": null,
    "artifact_url": null,
    "result": null,
    "download_filename": null
  },
  ...
]
```

### Available async_job fields
You can use the fields parameter in any of the Async Jobs API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **completed?**
* **description**
* **success**
* **artifact_url**
* **result**
* **download_filename**
