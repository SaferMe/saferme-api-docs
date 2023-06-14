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
- `team_id`: if present filter entries by team_id.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Where direction is `asc` or `desc` and `field_name` is one of the list below:
    - `updated_at`.

examples:
  - `?orderby=updated_at+asc`
  - `?orderby=updated_at+desc`

```json
GET /api/v4/sites?team_id=26&updated_after=2022-05-24T19:30:30Z&orderby=updated_after+asc&fields=-id,-team_id,-boundaries,-info,-job_number,-address,-site_owner_id,-created_at
```

```json
200 OK

[
  {
    "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
    "name": "Doctor Jack-Jack",
    "location": "Point (174.77604159462516 -41.286319623500816)",
    "updated_at": "2023-03-08 20:01:53 +1300"
  },
  {
    "uuid": "f36290bc-bd82-11ed-9b4e-acde48001122",
    "name": "Captain Ant Claw",
    "location": "Point (77.61010151368907 75.81002131462157)",
    "updated_at": "2023-03-07 10:11:12 +1300"
  }
]
```


### Create a site
Creates one site.

##### Input fields for create:
  - **uuid**: `UUID`
  - address: `String`
  - boundaries: `WKT`
  - info: `String`
  - job_number: `String`
  - location: `WKT Point`
  - **name**: `String`
  - **site_owner_id**: `record<TeamUser>` by id or uuid
  - **team_id**: `record<Team>`

```json
POST /api/v4/sites

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

```json
201 Created

{
  "id": 14,
  "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
  "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
  "boundaries": "POLYGON ((174.7760662374219 -41.28628888757578, 174.77599163848276 -41.2863095461495, 174.77600806701338 -41.286352248914284, 174.77608819800787 -41.2863304566517, 174.7760662374219 -41.28628888757578))",
  "info": "Harum nihil non. Dolorem accusamus aut.\nRepudiandae suscipit perferendis. Nam iste aspernatur.",
  "job_number": "5af30ff1ce",
  "location": "Point (174.77604159462516 -41.286319623500816)",
  "name": "Doctor Jack-Jack",
  "site_owner_id": 35,
  "team_id": 26,
  "created_at": "2023-03-08 20:01:53 +1300",
  "updated_at": "2023-03-08 20:01:53 +1300"
}
```


### Fetch a site
Get a site.
> See the optional [response fields](#response-fields).

```
GET /api/v4/sites/14?fields=boundaries
```

```json
200 OK

{
  "id": 14,
  "uuid": "1b14cac0-bd7f-11ed-9b4e-acde48001122",
  "address": "Level 3/354 Lambton Quay, Wellington Central, Wellington 6011",
  "boundaries": "POLYGON ((174.7760662374219 -41.28628888757578, 174.77599163848276 -41.2863095461495, 174.77600806701338 -41.286352248914284, 174.77608819800787 -41.2863304566517, 174.7760662374219 -41.28628888757578))",
  "info": "Harum nihil non. Dolorem accusamus aut.\nRepudiandae suscipit perferendis. Nam iste aspernatur.",
  "job_number": "5af30ff1ce",
  "location": "Point (174.77604159462516 -41.286319623500816)",
  "name": "Doctor Jack-Jack",
  "site_owner_id": 35,
  "team_id": 26,
  "created_at": "2023-03-08 20:01:53 +1300",
  "updated_at": "2023-03-08 20:01:53 +1300"
}
```

### Update a Site
Updates the allowed fields on one single site. It only updates the fields sent.

##### Input fields for update:
  - address: `String`
  - boundaries: `WKT`
  - info: `String`
  - job_number: `String`
  - location: `WKT Point`
  - name: `String`
  - site_owner_id: : `Number` or `UUID` of a Team User


```json
PATCH /api/v4/sites/123

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

```json
204 No Content
```


### Response fields
You can use the `fields` query parameter in any of the Site API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **address**
- boundaries
- **info**
- **job_number**
- **location**
- **name**
- **site_owner_id**
- site_owner_uuid
- **team_id**
- team_name
- **created_at**
- **updated_at**
