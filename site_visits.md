## Site Visits API
With Site Visits api V4 you can:

- [List Site Visits](#list-site-visits)
- [Create a Site Visit](#create-a-site-visit)
- [Create a Guest Visit](#create-a-guest-visit)
- [Fetch a Site Visit](#fetch-a-site-visit)
- [Update a Site Visit](#update-a-site-visit)
- [Bulk update a list of Site Visits](#bulk-update-a-list-of-site-visits)
- [Response fields](#response-fields)


### List site visits
Fetch a paginated list of site visits.
> See the optional [response fields](#response-fields).

Optional params:
- distinct: `string` => one of:
  - `last_visitor_visit`: only returns the most recent visit per person.
- exclude_ids: `int_or_uuid[]` => only include in the result entries **not matching any** of the given list of integers or uuids.
- include_ids: `int_or_uuid[]` => only include in the result entries **matching any** of the given list of integers or uuids.
- is_inducted: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- is_on_site: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- person_name: `string` => partial string search.
- person_team_name: `string` => partial search on visitors Organisation name (company external visitors)
- possibly_away: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- preset_filter: `string` => one of:
  - `admin_view`: complex filter to remove noise and focus on records admin need to see.
- signed_in_after: `date_time` => only records for sign-ins after the given timestamp
- signed_out_before: `date_time` => only records for visits that signgned out before the given timestamp
- site_id: `int_or_uuid` => filter entries by given site `id` or `uuid`
- team_id: `integer` => filter entries by given Team `id`
- team_user_id: `int_or_uuid` => filter entries by team_user `id` or `uuid`.
- updated_after: `date_time` => only include in the result entries updated after given date. Valid values are dates in ISO8601 format.
- orderby: `string` => if present sorts the result the by given clause. Sorting clause must follow the pattern `<field_name> <direction>`. Where direction is one of `asc` or `desc` and `field_name` is one of the list below:
  - `membership`
  - `person_email`
  - `person_name`
  - `person_team_name`
  - `signed_in_at`
  - `updated_at`


examples:
  - `?orderby=updated_at+desc`
  - `?is_on_site=true&team_id=123&orderby=updated_at+asc`

#### Request
```
GET /api/v4/site_visits?site_id=5c174e7b-6be8-3ca9-8a43-891b64ed7e10&updated_after=2022-05-24T19:30:30Z&orderby=updated_after+asc&fields=site_uuid,-created_at
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
    "id": 1012,
    "uuid": "82256ff7-1940-3c00-aff5-6753676d8c73",
    "is_signed_in": true,
    "is_inducted": true,
    "is_on_site": true,
    "possibly_away": false,
    "signed_in_at": "2023-05-18 04:47:22 +1200",
    "site_id": 1006,
    "site_uuid": "5c174e7b-6be8-3ca9-8a43-891b64ed7e10"
  },
  {
    "id": 1019,
    "uuid": "82256ff7-1940-3c00-aff5-6753676d8c73",
    "is_signed_in": true,
    "is_inducted": true,
    "is_on_site": true,
    "possibly_away": false,
    "signed_in_at": "2023-05-18 04:47:22 +1200",
    "site_id": 1006,
    "site_uuid": "5c174e7b-6be8-3ca9-8a43-891b64ed7e10"
  }
]
```


### Create a site visit
Creates one site visit for a member of an Org. See [Create a Guest Visit](#create-a-guest-visit) for how
to create visits for people that are not part of the org.

##### Input fields for create:
- **uuid**: `uuid`
- **team_user_id**: `record<TeamUser>` by id or uuid
- **site_id**: `record<Site>` by id or uuid
- signed_in_at: `time`
- signed_out_at: `time`
- site_visit_terms_accepted: `boolean` => Not required only when signing in somebody else


#### Request
```
POST /api/v4/site_visits
Content-Type application/json
```
```json
{
  "site_visit": {
    "uuid": "4fc0e27a-f526-11ed-bb4f-acde48001122",
    "site_id": "ad48f258-cc80-11ed-bed6-367dda11fc13",
    "team_user_id": "b7a3a57d-9605-457a-8e54-5326b26a5e0c",
    "signed_in_at": "2023-05-18 04:47:22 +1200"
  }
}
```
#### Response
```
201 Created
```
```json
{
  "id": 1026,
  "uuid": "ec9b7575-5758-38c5-825f-53d7c3272965",
  "created_at": "2023-01-15 13:31:00 +1300",
  "inducted_at": "2023-05-18 04:58:22 +1200",
  "is_signed_in": true,
  "is_inducted": true,
  "is_on_site": true,
  "possibly_away": false,
  "signed_in_at": "2023-05-18 04:47:22 +1200",
  "signed_out_at": null,
  "site_id": 1006,
  "team_user_id": 1025,
  "uninducted_at": null,
  "updated_at": "2023-01-15 13:31:00 +1300"
}
```


### Create a Guest Visit
Creates one site visit for a person that is not member of the Org.

##### Input fields for creating a Guest Visit:
- **site_id**: `record<Site>` by id or uuid
- **uuid**: `string`
- first_name: `string`
- last_name: `string`
- company: `string`
- email: `string`
- preferred_contact: `string`


#### Request
```
POST /api/v4/site_visits/guests
Content-Type application/json
```
```json
{
  "site_visit": {
    "site_id": "5c174e7b-6be8-3ca9-8a43-891b64ed7e10",
    "uuid": "d1a63d27-ce32-4be5-80a2-b825fe3670ed",
    "first_name": "Genia",
    "last_name": "Haag",
    "preferred_contact": "+64278276579",
    "email": "chase@harvey.test",
    "company": "Torp and Sons"
  }
}
```
#### Response
```
201 Created
```
```json
{
  "id": 1039,
  "uuid": "d1a63d27-ce32-4be5-80a2-b825fe3670ed",
  "created_at": "2023-01-15 13:31:00 +1300",
  "inducted_at": null,
  "is_signed_in": true,
  "is_inducted": false,
  "is_on_site": true,
  "possibly_away": false,
  "signed_in_at": "2023-01-14 23:31:00 +1300",
  "signed_out_at": null,
  "site_id": 1033,
  "team_user_id": 1038,
  "uninducted_at": null,
  "updated_at": "2023-01-15 13:31:00 +1300"
}
```


### Fetch a site visit
Get a site visit entry.
> See the optional [response fields](#response-fields).

#### Request
```
GET /api/v4/site_visits/ec9b7575-5758-38c5-825f-53d7c3272965?fields=site_uuid
````
#### Response
```
200 OK
```
```json
{
  "id": 1046,
  "uuid": "ec9b7575-5758-38c5-825f-53d7c3272965",
  "is_signed_in": true,
  "is_inducted": true,
  "is_on_site": true,
  "possibly_away": false,
  "signed_in_at": "2023-05-18 04:47:22 +1200",
  "site_id": 1006,
  "site_uuid": "5c174e7b-6be8-3ca9-8a43-891b64ed7e10"
}
```


### Update a Site Visit
Updates the allowed fields on one single site visit. It only updates the fields sent.

##### Input fields for update:
- signed_out_at: `time`
- inducted_at: `time`
- uninducted_at: `time`


#### Request
```
PATCH /api/v4/site_visits/ec9b7575-5758-38c5-825f-53d7c3272965
Content-Type application/json
```
```json
{
  "site_visit": {
    "signed_out_at": "2023-05-18 05:47:22 +1200"
  }
}
```
#### Response
```json
204 No Content
```


### Bulk update a list of Site Visits
Update multiple Site Visits in a background process.

The response for this request is an [Async Job](async_job.md) resource with
current status of the Background process. The background process status can be
polled if you need to retrieve conclusion status, result and eventual error
messages.

##### Filter fields for bulk update:
- **site_id**: `record<Site>` by id or uuid
- distinct: `string` => one of:
  - `last_visitor_visit`: only returns the most recent visit per person.
- exclude_ids: `int_or_uuid[]` => only include in the result entries **not matching any** of the given list of integers or uuids.
- include_ids: `int_or_uuid[]` => only include in the result entries **matching any** of the given list of integers or uuids.
- is_inducted: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- is_on_site: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- person_name: `string` => partial string search.
- person_team_name: `string` => partial search on visitors Organisation name (company external visitors)
- possibly_away: `boolean` => filter by the given value. (allowed values: `true`, `false`)
- preset_filter: `string` => one of:
  - `admin_view`: complex filter to remove noise and focus on records admin need to see.
- signed_in_after: `date_time` => only records for sign-ins after the given timestamp
- signed_out_before: `date_time` => only records for visits that signgned out before the given timestamp
- team_id: `integer` => filter entries by given Team `id`
- team_user_id: `int_or_uuid` => filter entries by team_user `id` or `uuid`.
- updated_after: `date_time` => only include in the result entries updated after given date. Valid values are dates in ISO8601 format.


##### Input fields for bulk update:
- description: `string` => value to be echoed on [Async Job](async_job.md) responses
- site_visit: `hash`
  - is_signed_in: `boolean` => **only allowed to set the value to `false`.** Create Site Visit if you need to sign in a person.
  - is_inducted: `boolean`


```json
POST /api/v4/site_visits/bulk_update?is_on_site=true&site_id=ad48f258-cc80-11ed-bed6-367dda11fc13

{
  "description": "Signing everyone out",
  "site_visit": {
    "is_signed_in": false,
  }
}
```

```json
{
  "id": 6543234,
  "completed": false,
  "description": "Signing everyone out",
  "success": null,
  "artifact_url": null,
  "result": null,
  "download_filename": null
}
```


### Response fields
You can use the `fields` query parameter in any of the Site Visit API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **created_at**
- **updated_at**
- **inducted_at**
- **is_inducted**
- **is_on_site**
- **is_signed_in**
- person_email
- person_membership
- person_name
- person_phone
- person_team_name
- **possibly_away**
- **signed_in_at**
- **signed_out_at**
- **site_id**
- site_uuid
- **team_user_id**
- team_user_uuid
- **uninducted_at**

