## Sites API
With Sites api V4 you can:

- [List Sites](#list-sites)
- [Create a Site](#create-a-site)
- [Fetch a Site](#fetch-a-site)
- [Update a Site](#update-a-site)
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
    "site_owner_email": "belen@donnelly-treutel.example",
    "site_owner_phone": "(985) 422-1693",
    "updated_at": "2023-11-08 17:12:41 +1300"
  },
  {
    "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
    "location": "POINT (174.77604159462516 -41.286319623500816)",
    "name": "Doctor Jack-Jack",
    "site_owner_email": "cory.padberg@windler-ryan.test",
    "site_owner_phone": "1-356-051-1299",
    "updated_at": "2023-11-08 17:12:41 +1300"
  }
]
```


### Create a site
Creates one site.

##### Input fields for create:
- uuid: `UUID`
- **name**: `string`
- **site_owner_id**: `record<TeamUser>` by id or uuid
- **site_owner_email**: `string`
- **site_owner_phone**: `string`
- location: `WKT Point`
- **team_id**: `record<Team>`
- info: `string`
- job_number: `string`
- boundaries: `rgeo`
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
  "site_owner_email": "telma@grimes-collins.example",
  "site_owner_phone": "269.035.9072",
  "team_id": 26,
  "created_at": "2023-11-08 17:12:41 +1300",
  "updated_at": "2023-11-08 17:12:41 +1300"
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
  "site_owner_email": "bernardo_yundt@klocko.example",
  "site_owner_phone": "(104) 254-6851",
  "team_id": 26,
  "created_at": "2023-11-08 17:12:41 +1300",
  "updated_at": "2023-11-08 17:12:41 +1300"
}
```


### Update a Site
Updates the allowed fields on one single site. It only updates the fields sent.

##### Input fields for update:
- **site_id**: `record<Site>`
- name: `string`
- site_owner_id: `record<TeamUser>` by id or uuid
- location: `WKT Point`
- info: `string`
- job_number: `string`
- boundaries: `WKT`
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

