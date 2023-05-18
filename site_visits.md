## Site Visits API
With Site Visits api V4 you can:

- [List Site Visits](#list-site-visits)
- [Create a Site Visit](#create-a-site-visit)
- [Fetch a Site Visit](#fetch-a-site-visit)
- [Update a Site Visit](#update-a-site-visit)
- [Response fields](#response-fields)


### List site visits
Fetch a paginated list of site visits.
> See the optional [response fields](#response-fields).

Optional params:
- is_on_site: filter by value of is_on_site when present. (allowed values: `true`, `false`)
- site_id: if present filter entries by site `id` or `uuid`.
- team_id: if present filter entries by site `id`.
- team_user_id: if present filter entries by site `id` or `uuid`.
- updated_after: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Where direction is `asc` or `desc` and `field_name` is one of the list below:
    - `updated_at`.

examples:
  - `?orderby=updated_at+desc`
  - `?is_on_site=true&team_id=123&orderby=updated_at+asc`

```json
GET /api/v4/site_visits?site_id=ad48f258-cc80-11ed-bed6-367dda11fc13&updated_after=2022-05-24T19:30:30Z&orderby=updated_after+asc&fields=site_uuid,-created_at
```

```json
200 OK

[
  {
    "id": 1015,
    "uuid": "4fc0e27a-f526-11ed-bb4f-acde48001122",
    "is_on_site": false,
    "signed_in_at": "2023-05-18 04:47:22 +1200",
    "signed_out_at": "2023-05-18 05:47:22 +1200",
    "site_id": 1009,
    "site_uuid": "ad48f258-cc80-11ed-bed6-367dda11fc13",
    "team_user_id": 1014,
    "updated_at": "2023-05-17 14:47:22 +1200"
  },
  {
    "id": 3245,
    "uuid": "4fc0e27a-f526-11ed-bb4f-ffffeeeeaaaa",
    "is_on_site": true,
    "signed_in_at": "2023-05-20 05:40:11 +1200",
    "signed_out_at": null,
    "site_id": 1009,
    "site_uuid": "ad48f258-cc80-11ed-bed6-367dda11fc13",
    "team_user_id": 1014,
    "updated_at": "2023-05-18 22:12:10 +1200"
  }
]
```


### Create a site visit
Creates one site visit.

##### Input fields for create:
  - **uuid**: `string`
  - **team_user_id**: `record<TeamUser>` by id or uuid
  - **site_id**: `record<Site>` by id or uuid
  - **signed_in_at**: `time`
  - signed_out_at: `time`

```json
POST /api/v4/site_visits

{
  "site_visit":   {
    "uuid": "4fc0e27a-f526-11ed-bb4f-acde48001122",
    "site_id": "ad48f258-cc80-11ed-bed6-367dda11fc13",
    "team_user_id": "b7a3a57d-9605-457a-8e54-5326b26a5e0c",
    "signed_in_at": "2023-05-18 04:47:22 +1200"
  }
}
```

```json
201 Created

{
  "id": 1015,
  "uuid": "4fc0e27a-f526-11ed-bb4f-acde48001122",
  "site_id": 1009,
  "team_user_id": 1014,
  "signed_in_at": "2023-05-18 04:47:22 +1200",
  "signed_out_at": null,
  "is_on_site": true,
  "created_at": "2023-05-17 14:47:22 +1200",
  "updated_at": "2023-05-17 14:47:22 +1200"
}
```


### Fetch a site visit
Get a site visit entry.
> See the optional [response fields](#response-fields).

```
GET /api/v4/site_visits/1015?fields=site_uuid
```

```json
200 OK

{
  "id": 1015,
  "uuid": "4fc0e27a-f526-11ed-bb4f-acde48001122",
  "site_id": 1009,
  "site_uuid": "ad48f258-cc80-11ed-bed6-367dda11fc13",
  "team_user_id": 1014,
  "signed_in_at": "2023-05-18 04:47:22 +1200",
  "signed_out_at": null,
  "is_on_site": true,
  "created_at": "2023-05-17 14:47:22 +1200",
  "updated_at": "2023-05-17 14:47:22 +1200"
}
```

### Update a Site Visit
Updates the allowed fields on one single site visit. It only updates the fields sent.

##### Input fields for update:
  - signed_out_at: `time`


```json
PATCH /api/v4/site_visits/1015

{
  "site_visit":   {
    "signed_out_at": "2023-05-18 05:47:22 +1200"
  }
}
```

```json
204 No Content
```

### Response fields
You can use the `fields` query parameter in any of the Site Visit API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **created_at**
- **is_on_site**
- **signed_in_at**
- **signed_out_at**
- **site_id**
- site_uuid
- **team_user_id**
- team_user_uuid
- **updated_at**
