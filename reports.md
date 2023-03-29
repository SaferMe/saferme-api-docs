## Reports API
With Reports api V4 you can:

- [Create a Report](#create-a-report)
- [Fetch a Report](#fetch-a-report)
- [Update a Report](#update-a-report)
- [Search for Reports](#search-for-reports)
- [Filling FileUpload and Image fields](#filling-fileupload-and-image-fields)
- [Response fields](#response-fields)


### Create a Report
Creates one report.

##### Input fields for create:
  - uuid: `UUID`
  - **account_id**: `record<Account>` by id or uuid
  - **geom**: `WKT Point`
  - is_anonymous: `boolean`
  - report_state_id: `record<ReportState>` by id or uuid
  - shape_id: `integer`
  - address: `string`
  - form_fields: `array`
    - **0..**: `hash`
      - **key**: `string` matching key for report field
      - **value**: `object` value for report field.
  - risk_assessment: `hash`
    - eliminated: `boolean`
    - **likelihood**: `hash`
      - **key**: `string`
    - **severity**: `hash`
      - **key**: `string`
    - comment: `string`

```json
POST /api/v4/reports

{
  "report": {
    "uuid": "ab06e7e6-1205-4027-b938-70d1cdfe7d41",
    "account_id": "2222",
    "report_state_id": 15,
    "geom": "Point(174.7759821 -41.2861352)",
    "address": "123 Somewhere rd. In the World",
    "form_fields": [
      {
        "key": "f_2_3_1",
        "value": 10
      },
      {
        "key": "f_2_4_2",
        "value": [
          "Person 1",
          "Person 2"
        ]
      },
      {
        "key": "f_2_5_3",
        "value": [
          17,
          19,
          5
        ]
      },
      {
        "key": "f_2_9_7",
        "value": 7
      },
      {
        "key": "f_2_10_8",
        "value": [
          "bullet One",
          "bullet 2"
        ]
      },
      {
        "key": "f_2_11_9",
        "value": "2023-03-21T03:08:00.000Z"
      },
      {
        "key": "f_2_13_11",
        "value": "Long Text\nWith multiple\nlines"
      },
      {
        "key": "f_2_14_12",
        "value": [
          "Item for start",
          "Item continuing",
          "Item Bullet finishing"
        ]
      },
      {
        "key": "f_2_15_13",
        "value": "Single line text box"
      },
      {
        "key": "f_2_16_14",
        "value": [
          "f_2_16_14_18_2",
          "f_2_16_14_20_3"
        ]
      },
      {
        "key": "f_2_23_15",
        "value": "f_2_23_15_24_4"
      },
      {
        "key": "f_2_28_16",
        "value": "f_2_28_16_31_6"
      },
      {
        "key": "f_2_37_17",
        "value": [
          1,
          2
        ]
      },
      {
        "key": "f_2_38_18",
        "value": [
          3,
          4
        ]
      }
    ]
  }
}
```

```json
201 Created

{
  "id": 49,
  "uuid": "ab06e7e6-1205-4027-b938-70d1cdfe7d41",
  "account_id": 2222,
  "account_uuid": "886b1d4c-dec3-43fe-bcce-fd4eea6f28f8",
  "address": "350 Lambton Quay, Wellington Central, Wellington 6011, New Zealand",
  "appearance": "generic_teal",
  "category_id": 1010,
  "description": null,
  "is_anonymous": false,
  "location": {
    "latitude": -41.2861352,
    "longitude": 174.7759821
  },
  "report_state_id": 15,
  "shape_id": null,
  "title": "From raceway, Industrial waste, Cleaner streams",
  "user_id": 5,
  "iso_created_at": "2023-03-29T16:08:38+13:00",
  "updated_at": "2023-03-29T16:08:38.705+13:00"
}
```

### Fetch a Report
Get a report entry.
> See the optional [response fields](#response-fields).

```
GET /api/v4/reports/49?fields=form_fields,-shape_id
```

```json
200 OK

{
  "id": 49,
  "uuid": "ab06e7e6-1205-4027-b938-70d1cdfe7d41",
  "account_id": 2222,
  "account_uuid": "886b1d4c-dec3-43fe-bcce-fd4eea6f28f8",
  "address": "123 Somewhere rd. In the World",
  "appearance": "generic_teal",
  "category_id": 1010,
  "description": null,
  "is_anonymous": false,
  "location": {
    "latitude": -41.2861352,
    "longitude": 174.7759821
  },
  "report_state_id": 15,
  "title": "From raceway, Industrial waste, Cleaner streams",
  "user_id": 5,
  "form_fields": [
    {
      "id": 11,
      "label": "Internal Attendees",
      "key": "f_2_5_3",
      "field_type": "InternalAttendees",
      "form_order": 2,
      "data": {
        "enable_contact_tracing": true,
        "options": [
          {
            "label": "John Doe",
            "value": 5
          },
          {
            "label": "1th 1son",
            "value": 17
          },
          {
            "label": "3th 3son",
            "value": 19
          }
        ]
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        17,
        19,
        5
      ],
      "editable": true
    },
    {
      "id": 17,
      "label": "Time & Date Select",
      "key": "f_2_11_9",
      "field_type": "DateAndTime",
      "form_order": 8,
      "data": {
        "default_to_current": true
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "2023-03-21T16:08:00+13:00",
      "editable": true
    },
    {
      "id": 16,
      "label": "Bulleted List",
      "key": "f_2_10_8",
      "field_type": "BulletedList",
      "form_order": 7,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        "bullet One",
        "bullet 2"
      ],
      "editable": true
    },
    {
      "id": 14,
      "label": "-",
      "key": "f_2_8_6",
      "field_type": "SectionBreak",
      "form_order": 5,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": null,
      "editable": true
    },
    {
      "id": 22,
      "label": "Check Box",
      "key": "f_2_16_14",
      "field_type": "CheckBox",
      "form_order": 13,
      "data": {
        "multi_select": true,
        "options": [
          {
            "label": "Option 1",
            "value": "f_2_16_14_16_1",
            "enabled": true,
            "multi_option_id": 22,
            "display_order": 0,
            "is_default": false
          },
          {
            "label": "Option 2",
            "value": "f_2_16_14_18_2",
            "enabled": true,
            "multi_option_id": 22,
            "display_order": 1,
            "is_default": false
          },
          {
            "label": "Option 3",
            "value": "f_2_16_14_20_3",
            "enabled": true,
            "multi_option_id": 22,
            "display_order": 2,
            "is_default": false
          }
        ]
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        "f_2_16_14_18_2",
        "f_2_16_14_20_3"
      ],
      "editable": true
    },
    {
      "id": 13,
      "label": "Report State",
      "key": "f_2_7_5",
      "field_type": "ReportState",
      "form_order": 4,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": null,
      "editable": true
    },
    {
      "id": 19,
      "label": "Long Text Box",
      "key": "f_2_13_11",
      "field_type": "LongTextBox",
      "form_order": 10,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "Long Text\nWith multiple\nlines",
      "editable": true
    },
    {
      "id": 26,
      "label": "Photos",
      "key": "f_2_38_18",
      "field_type": "Image",
      "form_order": 17,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        {
          "id": 3,
          "original_url": "https://cdn.server.com/path/original-3ccc3a9ac33c7092bbac2882b0ba27054066943b.jpeg?Expires=1680063187&Signature=p31wd",
          "filename": "IMG_20220530_200003.jpeg",
          "style_url": {
            "thumb": "https://cdn.server.com/path/thumb-f8cc1e6afbe32b1de1124158c1fcbd050cef6687.jpeg?Expires=1680063187&Signature=vi2ip",
            "medium": "https://cdn.server.com/path/medium-8b402eb40925039ced3dfbc286fe53a2f52efe66.jpeg?Expires=1680063187&Signature=WnBs1mk"
          },
          "photo_time": null,
          "photo_location": null,
          "tags": {
          },
          "ready_to_attach": true,
          "attached": true
        },
        {
          "id": 4,
          "original_url": "https://cdn.server.com/path/incident_report_images-attachments/4/original-0d8a9e7a53077ae3b08a05950408a0f2f29bd452.jpg",
          "filename": "car-resized.jpg",
          "style_url": {
            "thumb": "https://cdn.server.com/path/incident_report_images-attachments/4/thumb-be5b81a04441235ab1171753aa10a14e5ddb22a1.jpg",
            "medium": "https://cdn.server.com/path/incident_report_images-attachments/4/medium-f6fc631c00dfe789d8ee211a3249b7e24a995c39.jpg"
          },
          "photo_time": null,
          "photo_location": null,
          "tags": {
          },
          "ready_to_attach": true,
          "attached": true
        }
      ],
      "editable": true
    },
    {
      "id": 28,
      "label": "Display Report Viewers",
      "key": "f_2_40_20",
      "field_type": "ReportViewers",
      "form_order": 19,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": null,
      "editable": true
    },
    {
      "id": 21,
      "label": "Short Text Box",
      "key": "f_2_15_13",
      "field_type": "ShortTextBox",
      "form_order": 12,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "SIngle line text box",
      "editable": true
    },
    {
      "id": 10,
      "label": "External Attendees",
      "key": "f_2_4_2",
      "field_type": "ExternalAttendees",
      "form_order": 1,
      "data": {
        "enable_contact_tracing": true
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        "Person 1",
        "Person 2"
      ],
      "editable": true
    },
    {
      "id": 24,
      "label": "Radio Button",
      "key": "f_2_28_16",
      "field_type": "RadioButton",
      "form_order": 15,
      "data": {
        "multi_select": false,
        "options": [
          {
            "label": "Alternative 1",
            "value": "f_2_28_16_28_1",
            "enabled": true,
            "multi_option_id": 24,
            "display_order": 0,
            "is_default": false
          },
          {
            "label": "Alternative 2",
            "value": "f_2_28_16_29_5",
            "enabled": true,
            "multi_option_id": 24,
            "display_order": 1,
            "is_default": false
          },
          {
            "label": "Alternative 3",
            "value": "f_2_28_16_31_6",
            "enabled": true,
            "multi_option_id": 24,
            "display_order": 2,
            "is_default": false
          }
        ]
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "f_2_28_16_31_6",
      "editable": true
    },
    {
      "id": 29,
      "label": "Signature",
      "key": "f_2_41_21",
      "field_type": "Signature",
      "form_order": 20,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [

      ],
      "editable": true
    },
    {
      "id": 27,
      "label": "Relative Position",
      "key": "f_2_39_19",
      "field_type": "RelativePosition",
      "form_order": 18,
      "data": {
        "display_distance": true,
        "display_bearing": true
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": null,
      "editable": true
    },
    {
      "id": 20,
      "label": "Numbered List",
      "key": "f_2_14_12",
      "field_type": "NumberedList",
      "form_order": 11,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        "Item for start",
        "Item continuing",
        "Item Bullet finishing"
      ],
      "editable": true
    },
    {
      "id": 12,
      "label": "Reporter",
      "key": "f_2_6_4",
      "field_type": "Reporter",
      "form_order": 3,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "John Doe",
      "editable": true
    },
    {
      "id": 25,
      "label": "File Attachment",
      "key": "f_2_37_17",
      "field_type": "FileUpload",
      "form_order": 16,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": [
        {
          "id": 1,
          "original_url": "https://cdn.server.com/path/incident_report_images-attachments/1/original-bb7ce3a75fa1cf3d4eed3c82ad3b108b7396b143.jpg",
          "filename": "solution-for-safer-work.jpg",
          "style_url": {
          },
          "photo_time": null,
          "photo_location": null,
          "tags": {
          },
          "ready_to_attach": true,
          "attached": true
        },
        {
          "id": 2,
          "original_url": "https://cdn.server.com/path/incident_report_images-attachments/2/original-2f10ff14e39e95cea25ce48864b9a34f7c84c33f.jpg",
          "filename": "dark_20blue_20v2.jpg",
          "style_url": {
          },
          "photo_time": null,
          "photo_location": null,
          "tags": {
          },
          "ready_to_attach": true,
          "attached": true
        }
      ],
      "editable": true
    },
    {
      "id": 9,
      "label": "Category",
      "key": "f_2_3_1",
      "field_type": "Category",
      "form_order": 0,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": 10,
      "editable": true
    },
    {
      "id": 23,
      "label": "Drop Down",
      "key": "f_2_23_15",
      "field_type": "DropDown",
      "form_order": 14,
      "data": {
        "multi_select": false,
        "options": [
          {
            "label": "Select 1",
            "value": "f_2_23_15_23_1",
            "enabled": true,
            "multi_option_id": 23,
            "display_order": 0,
            "is_default": false
          },
          {
            "label": "Select 2",
            "value": "f_2_23_15_24_4",
            "enabled": true,
            "multi_option_id": 23,
            "display_order": 1,
            "is_default": false
          }
        ]
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": "f_2_23_15_24_4",
      "editable": true
    },
    {
      "id": 18,
      "label": "<p>Instruction or Information text</p>",
      "key": "f_2_12_10",
      "field_type": "FreeText",
      "form_order": 9,
      "data": {
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": null,
      "editable": true
    },
    {
      "id": 15,
      "label": "Slider",
      "key": "f_2_9_7",
      "field_type": "IntegerRange",
      "form_order": 6,
      "data": {
        "minimum": 1,
        "maximum": 10,
        "default": 5,
        "colour": "#585858",
        "description": ""
      },
      "mandatory": false,
      "visibility": "public",
      "field_visibility": "public",
      "value": 7,
      "editable": true
    }
  ],
  "iso_created_at": "2023-03-29T16:08:38+13:00"
  "updated_at": "2023-03-29T16:08:38.705+13:00",
}
```


### Update a Report
Updates the allowed fields on one single report. It only updates the fields sent.

- geom: `string`
- address: `string`
- shape_id: `integer`
- form_fields: `array`
  - **0..**: `hash`
    - **key**: `string`
    - **value**: `object<Object>`


```json
PATCH /api/v4/reports/49

{
  "report": {
    "address": "123 Somewhere else rd. In the Same World",
    "location": {
      "latitude": -41.28592962,
      "longitude": 174.77611353
    },
    "form_fields": [
      {
        "key": "f_2_3_1",
        "value": 11
      },
      {
        "key": "f_2_4_2",
        "value": [
          "Person 1",
          "Person The Second"
        ]
      },
      {
        "key": "f_2_5_3",
        "value": [
          17,
          19,
          5
        ]
      },
      {
        "key": "f_2_7_5",
        "value": null
      },
      {
        "key": "f_2_9_7",
        "value": 7
      },
      {
        "key": "f_2_10_8",
        "value": [
          "bullet One",
          "bullet 2"
        ]
      },
      {
        "key": "f_2_11_9",
        "value": "2023-03-21T03:08:00.000Z"
      },
      {
        "key": "f_2_13_11",
        "value": "Long Text\nWith multiple\nlines"
      },
      {
        "key": "f_2_14_12",
        "value": [
          "Item for start",
          "Item continuing",
          "Item Bullet finishing"
        ]
      },
      {
        "key": "f_2_15_13",
        "value": "Single line text box"
      },
      {
        "key": "f_2_16_14",
        "value": [
          "f_2_16_14_18_2",
          "f_2_16_14_20_3"
        ]
      },
      {
        "key": "f_2_23_15",
        "value": "f_2_23_15_24_4"
      },
      {
        "key": "f_2_28_16",
        "value": "f_2_28_16_31_6"
      },
      {
        "key": "f_2_37_17",
        "value": [
          1,
          2
        ]
      },
      {
        "key": "f_2_38_18",
        "value": [
          3,
          4
        ]
      }
    ]
  }
}
```

```json
204 No Content
```


### Search for Reports
Report search is a asynchronous process and requires a couple of steps.
Here you will see the first step, how to build and start a report search.

The search accept three groups of parameters:
  - `filter` to specify what is included in the search
  - `exclude` to specify what is not included in the search
  - `order` to specify the order of the record in the resultset

List of parameters allowed:
  - `filter[appearance]`=loud

    one of: normal, attention, loud, invisible
  - `filter[assignee_id]`=123
  - `filter[channels]=`[23,38,42]
  - `filter[channel_type]=`generic
  - `filter[created_after]=`2018-12-31T23:45:45+13:00
  - `filter[created_before]=`2018-12-31T23:45:45+13:00

    one of: generic, audit, fire_check, forklift_check, hazard, incident, induction, near_miss, plant_machinery_check, toolbox_talk, vehicle_check

  - `filter[id]`[id_array]=1,2,3
  - `filter[id]`[report_search_id]=87654321
  - `filter[new_report]`=true

    one of: true, false

  - `filter[report_states]`=[22,56]
  - `filter[resolved]`=true

    one of: true, false

  - `filter[team_id]`=123
  - `filter[title_query]`=title starts with
  - `filter[tile_id]`=ZmZmZmbWZUBmZmZmZqZEwJqZmZmZmak/
  - `filter[tile][latitude]`=23.234
  - `filter[tile][longitude]`=177.432
  - `filter[tile][scale]`=0.5
  - `filter[updated_after]`=2018-12-31T23:45:45+13:00
  - `filter[updated_before]`=2019-01-15T23:45:58+13:00
  - `filter[user_id]`=342
  - `filter[user_query]`=user name
  - `exclude[team_id]`=123
  - `exclude[tile_id]`=ZmZmZmbWZUBmZmZmZqZEwJqZmZmZmak/
  - `exclude[tile][latitude]`=23.234
  - `exclude[tile][longitude]`=177.432
  - `exclude[tile][scale]`=0.5
  - `exclude[channels]=`[23,38,42]
  - `exclude[updated_after]`=2018-12-31T23:45:45+13:00
  - `exclude[updated_before]`=2019-01-15T23:45:58+13:00
  - `exclude[appearance]`=normal
  - `exclude[id][id_array]`=1,2,3
  - `exclude[id][report_search_id]`=87654321
  - `order[assigned_at]`=asc
  - `order[created_at]`=asc
  - `order[id]`=asc
  - `order[updated_at]`=asc

  - `preset_filter`=syncable_reports

    will include reports unresolved, resolved over the last 7 days, reports current user made and reports assigned to current user.

where:
- `tile_id` is the id returned from tiles search api.
- `tile[latitude]`, `tile[longitude]` and `tile[scale]` can be used in combination as alternative to `tile_id` above.
- `channels` contain a list of channel ids comma separated and wrapped in square brackets.
- `updated_before` and `updated_after` are dates in ISO8601 format.
- `appearance` is one of "invisible", "normal", "attention" or "loud"
- `id_array` is a comma separated list of report_ids
- `report_search_id` is the id resulting from a previous report_search
- `order[any_field]` allowed values are "asc" or "desc"

Combining the fields above a report search can be created as follows:
```
GET /api/v4/reports/search?filter[channels]=[1,2]&filter[updated_after]=2018-12-31T23:45:45+13:00

{
  id: 12345678,
  url: "https://api1.safer.me/api/v4/report_searches/12345678"
}
```

This `id` or `url` will be used to retrieve the search result using [Report Searches API](report_searches.md).


### Filling FileUpload and Image fields
The `content_type` of the attachment matters when attaching images to reports.
`Image` fields will only allow image attachments be made. `FileUpload` fields
accepts not only images but some other file formats.
```
{
  "f_1_8_6": [1,2,3],
  "f_1_18_9": [7,8,9],
  // ...
}
```
> **Notes:**
> - The same attachment_id cannot be specified in more than one field.
> - File types supported on `Image` fields:
>   * png
>   * jpeg
>   * gif
>
>
> - File types supported on `FileUpload` fields:
>   * all the images formats above
>   * plain text
>   * PDFs
>   * MS-Office files (Word, Excel)
>   * iWork files (Numbers, Keynote, Pages)

### Response fields
You can use the `fields` query parameter in any of the Reports API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **account_id**
- account_name
- **account_uuid**
- **address**
- **appearance**
- assigned_at
- assignee
- assignee_id
- assignment_due_at
- **category_id**
- comment_count
- form_fields
- **is_anonymous**
- is_manageable_by
- **location**
- **report_state_id**
- report_state_name
- report_state_uuid
- **shape_id**
- **title**
- **user_id**
- user_image
- user_short_name
- **iso_created_at**
- **updated_at**
