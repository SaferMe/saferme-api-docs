## Site Infos API
With Site Infos api V4 you can:

- [List Site Infos](#list-site-infos)
- [Create a Site Info](#create-a-site-info)
- [Fetch a Site Info](#fetch-a-site-info)
- [Update a Site Info](#update-a-site-info)
- [Delete a Site Info](#delete-a-site-info)
- [Response fields](#response-fields)


### List site infos
Fetch a paginated list of site infos.
> See the optional [response fields](#response-fields).

Optional params:
- `site_id`: if present filter entries by site `id` or `uuid`.
- `team_id`: if present filter entries by team `id`.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- `orderby`: if present allow specify the response order by providing one order clause
  made of `<field_name> <direction>`. Where direction is `asc` or `desc` and `field_name` is one of the list below:
    - `updated_at`.

examples:
  - `?orderby=updated_at+asc`
  - `?orderby=updated_at+desc`

```json
GET /api/v4/site_infos?team_id=26&updated_after=2022-05-24T19:30:30Z&orderby=updated_after+asc&fields=site_uuid,-created_at
```

```json
200 OK

[
  {
    "id": 3352,
    "uuid": "ad479b2e-cc80-11ed-bed6-367dda11fc13",
    "site_id": 5632,
    "site_uuid": "ad48f258-cc80-11ed-bed6-367dda11fc13",
    "position": 2,
    "site_info_type": "text",
    "title": "General contact information",
    "formatted_text": "Consectetur nihil eum. Est nihil recusandae. Aliquam vero hic.",
    "topics": [
      {
        "type": "pin",
        "text": "896-427-5606"
      },
      {
        "type": "phone",
        "text": "356042909"
      }
    ],
    "updated_at": "2023-03-27 22:20:56 +1300"
  },
  {
    "id": 1010,
    "uuid": "12222672-cc81-11ed-bed6-367dda11fc13",
    "site_id": 1009,
    "site_uuid": "12222f96-cc81-11ed-bed6-367dda11fc13",
    "position": 3,
    "site_info_type": "text",
    "title": "House of Mirth",
    "formatted_text": "Totam dolor expedita. Animi repellat facilis. Repellat nobis rerum.",
    "topics": [
      {
        "type": "person",
        "text": "606.649.0947"
      }
    ],
    "updated_at": "2023-03-27 22:23:44 +1300"
  }
]
```


### Create a site info
Creates one site info.

##### Input fields for create:
  - **uuid**: `UUID`
  - **site_id**: `record<Site>` by id or uuid
  - **position**: `integer`
  - **site_info_type**: `string`. One of `person`, `location` or `text`.
  - **title**: `string`
  - **formatted_text**: `string`
  - topics: `array`
    - **0..**: `hash`
      - **type**: `string`. One of `hash`, `phone`, `pin`, `person`, `mail`or `range`.
      - **text**: `string`


```json
POST /api/v4/site_infos

{
  "site_info":   {
    "uuid": "12222672-cc81-11ed-bed6-367dda11fc13",
    "site_id": 1009,
    "position": 3,
    "site_info_type": "text",
    "title": "House of Mirth",
    "formatted_text": "Totam dolor expedita.\n\n Animi repellat facilis. Repellat nobis rerum.",
    "topics": [
      {
        "type": "pin",
        "text": "896-427-5606"
      },
      {
        "type": "phone",
        "text": "356042909"
      }
    ]
  }
}
```

```json
201 Created

{
  "id": 14,
  "uuid": "12222672-cc81-11ed-bed6-367dda11fc13",
  "site_id": 1009,
  "position": 3,
  "site_info_type": "text",
  "title": "House of Mirth",
  "formatted_text": "Totam dolor expedita.\n\n Animi repellat facilis. Repellat nobis rerum.",
  "topics": [
    {
      "type": "pin",
      "text": "896-427-5606"
    },
    {
      "type": "phone",
      "text": "356042909"
    }
  ],
  "created_at": "2023-03-08 20:01:53 +1300",
  "updated_at": "2023-03-08 20:01:53 +1300"
}
```


### Fetch a site info
Get a site info entry.
> See the optional [response fields](#response-fields).

```
GET /api/v4/site_infos/14?fields=site_uuid
```

```json
200 OK

{
  "id": 14,
  "uuid": "12222672-cc81-11ed-bed6-367dda11fc13",
  "site_id": 1009,
  "site_uuid": "ad48f258-cc80-11ed-bed6-367dda11fc13",
  "position": 3,
  "site_info_type": "text",
  "title": "House of Mirth",
  "formatted_text": "Totam dolor expedita.\n\n Animi repellat facilis. Repellat nobis rerum.",
  "topics": [
    {
      "type": "pin",
      "text": "896-427-5606"
    },
    {
      "type": "phone",
      "text": "356042909"
    }
  ],
  "created_at": "2023-03-08 20:01:53 +1300",
  "updated_at": "2023-03-08 20:01:53 +1300"
}
```

### Update a Site Info
Updates the allowed fields on one single site info. It only updates the fields sent.

##### Input fields for update:
  - **site_info_id**: `record<SiteInfo>` by id or uuid
  - position: `integer`
  - site_info_type: `string`. One of `person`, `location` or `text`.
  - title: `string`
  - formatted_text: `string`
  - topics: `array`
    - **0..**: `hash`
      - **type**: `string`. One of `hash`, `phone`, `pin`, `person`, `mail`or `range`.
      - **text**: `string`


```json
PATCH /api/v4/site_infos/123

{
  "site_info":   {
    "position": 3,
    "site_info_type": "text",
    "title": "House of Marcia",
    "formatted_text": "Work finished. Cleaning in progress.",
    "topics": []
  }
}
```

```json
204 No Content
```

### Delete a Site Info
Delete one single site info.

```json
DELETE /api/v4/site_infos/123
```

```json
204 No Content
```

### Response fields
You can use the `fields` query parameter in any of the Site Info API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **site_id**
- site_uuid
- **position**
- **site_info_type**
- **title**
- **formatted_text**
- **topics**
- **created_at**
- **updated_at**
