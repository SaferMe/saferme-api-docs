## Sites API
With Sites api V4 you can:

- [List Sites](#list-sites)
- [Create a Site](#create-a-site)
- [Fetch a Site](#fetch-a-site)
- [Update a Site](#update-a-site)
- [Request Site PDF](#request-site-pdf)
- [Response fields](#response-fields)


### List sites
Fetch a paginated list of sites.
> See the optional [response fields](#response-fields).

Optional params:
- job_number: `string` => partial string search.
- name: `string` => partial string search.
- site_owner_id: `int_or_uuid` => filter entries by site_owner `id` or `uuid`. (Note that site_owner is a `<TeamUser>`)
- site_owner_name: `string` => partial string search.
- status: `string` => filter by site status. Allowed values: `active`, `inactive`, `related`. `related` includes sites from third-party Orgs which current Org has ever been active/signed_in to.
- team_id: `integer` => filter entries by given Team `id`
- team_name: `string` => partial string search.
- updated_after: `date_time` => only include in the result entries updated after given date. Valid values are dates in ISO8601 format.
- orderby: `string` => if present sorts the result the by given clause. Sorting clause must follow the pattern `<field_name> <direction>`. Where direction is one of `asc` or `desc` and `field_name` is one of the list below:
  - `updated_at`
  - `team_name`
  - `name`
  - `site_owner_name`
  - `people_on_site`


examples:
  - `?orderby=updated_at+asc`
  - `?orderby=updated_at+desc`

#### Request
```
GET /api/v4/sites?team_id=26&updated_after=2022-05-24T19:30:30Z&orderby=updated_after+asc&fields=-id,-team_id,-boundaries,-info,-job_number,-address,-site_owner_id,-created_at
```
#### Response
```
200 OK
Accept-Ranges sites
Content-Range 0-1/2
```
```json
[
  {
    "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
    "location": "POINT (174.77604159462516 -41.286319623500816)",
    "name": "Doctor Jack-Jack",
    "site_owner_email": "tyson@ondricka.test",
    "site_owner_phone": "395.223.4525",
    "updated_at": "2023-01-19 13:11:00 +1300"
  },
  {
    "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
    "location": "POINT (174.77604159462516 -41.286319623500816)",
    "name": "Doctor Jack-Jack",
    "site_owner_email": "luisa@kozey.example",
    "site_owner_phone": "(448) 993-8749",
    "updated_at": "2023-01-19 13:11:00 +1300"
  }
]
```


### Create a site
Creates one site.

##### Input fields for create:
- uuid: `uuid`
- **name**: `string`
- **site_owner_id**: `record<TeamUser>` by id or uuid
- **site_owner_email**: `string`
- **site_owner_phone**: `string`
- location: `wkt<Point>`
- **team_id**: `record<Team>`
- info: `string`
- job_number: `string`
- boundaries: `wkt`
- address: `string`


#### Request
```
POST /api/v4/sites
Content-Type application/json
```
```json
{
  "site": {
    "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
    "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
    "boundaries": "POLYGON ((174.7760662374219 -41.28628888757578, 174.77599163848276 -41.2863095461495, 174.77600806701338 -41.286352248914284, 174.77608819800787 -41.2863304566517, 174.7760662374219 -41.28628888757578))",
    "info": "Harum nihil non. Dolorem accusamus aut.\nRepudiandae suscipit perferendis. Nam iste aspernatur.",
    "job_number": "5af30ff1ce",
    "location": "Point (174.77604159462516 -41.286319623500816)",
    "name": "Doctor Jack-Jack",
    "site_owner_id": 35,
    "team_id": 26
  }
}
```
#### Response
```
201 Created
```
```json
{
  "id": 1022,
  "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
  "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
  "info": "Harum nihil non. Dolorem accusamus aut.\nRepudiandae suscipit perferendis. Nam iste aspernatur.",
  "job_number": "5af30ff1ce",
  "location": "POINT (174.77604159462516 -41.286319623500816)",
  "name": "Doctor Jack-Jack",
  "site_owner_id": 35,
  "site_owner_email": "dacia@rogahn.example",
  "site_owner_phone": "265.347.0733",
  "team_id": 26,
  "created_at": "2023-01-19 13:11:00 +1300",
  "updated_at": "2023-01-19 13:11:00 +1300"
}
```


### Fetch a site
Get a site.
> See the optional [response fields](#response-fields).

#### Request
```
GET /api/v4/sites/1b14cac0-bd7f-11ed-9b4e-acde48001122?fields=boundaries
````
#### Response
```
200 OK
```
```json
{
  "id": 1022,
  "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
  "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
  "boundaries": "POLYGON ((174.7760662374219 -41.28628888757578, 174.77599163848276 -41.2863095461495, 174.77600806701338 -41.286352248914284, 174.77608819800787 -41.2863304566517, 174.7760662374219 -41.28628888757578))",
  "info": "Harum nihil non. Dolorem accusamus aut.\nRepudiandae suscipit perferendis. Nam iste aspernatur.",
  "job_number": "5af30ff1ce",
  "location": "POINT (174.77604159462516 -41.286319623500816)",
  "name": "Doctor Jack-Jack",
  "site_owner_id": 35,
  "site_owner_email": "hugh_koelpin@hahn-becker.test",
  "site_owner_phone": "967.196.1004",
  "team_id": 26,
  "created_at": "2023-01-19 13:11:00 +1300",
  "updated_at": "2023-01-19 13:11:00 +1300"
}
```


### Update a Site
Updates the allowed fields on one single site. It only updates the fields sent.

##### Input fields for update:
- **site_id**: `record<Site>`
- name: `string`
- site_owner_id: `record<TeamUser>` by id or uuid
- site_owner_email: `string`
- site_owner_phone: `string`
- location: `wkt<Point>`
- info: `string`
- job_number: `string`
- boundaries: `wkt`
- address: `string`


#### Request
```
PATCH /api/v4/sites/123
Content-Type application/json
```
```json
{
  "site": {
    "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
    "boundaries": "POLYGON ((174.7760662374219 -41.28628888757578, 174.77599163848276 -41.2863095461495, 174.77600806701338 -41.286352248914284, 174.77608819800787 -41.2863304566517, 174.7760662374219 -41.28628888757578))",
    "info": "Ullam eum odit. Sed nostrum quos. Enim quae ut.\nDolorem quae accusantium. In aut facere. Rerum dolor aut.",
    "job_number": "5af30ff1ce",
    "location": "Point (174.77604159462516 -41.286319623500816)",
    "name": "Doctor Jack-Jack",
    "site_owner_id": 35,
  }
}
```
#### Response
```json
204 No Content
```


### Request Site PDF
Produce the PDF file for the given Site ID in a background process.

The response for this request is an [Async Job](async_job.md) Resource with current status of the
Background process. The background process status can be polled if you need to
retrieve its conclusion status, result, link to download the file and eventual error messages.

##### Input fields for Request Site PDF:
- description: `string` the value of this field will be echoed on [Async Job](async_job.md) responses.

#### Request
```
POST /api/v4/sites/123/export_item
Content-Type application/json
```
```json
{
  "description": "Pong this ping to me",
}
```
#### Response
```json
202 Accepted

{
  "id": 987123,
  "completed": false,
  "description": "Pong this ping to me",
  "success": null,
  "artifact_url": null,
  "result": null,
  "download_filename": null
}
```


### Response fields
You can use the `fields` query parameter in any of the Site API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **created_at**
- **updated_at**
- **address**
- boundaries
- **info**
- **job_number**
- **location**
- **name**
- people_on_site_count
- people_review_alert
- sign_in_url
- **site_owner_email**
- **site_owner_id**
- site_owner_name
- **site_owner_phone**
- site_owner_uuid
- **team_id**
- team_name

