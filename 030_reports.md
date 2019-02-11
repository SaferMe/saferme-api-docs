## Reports API
With Report api V4 you can:

- [Fetch a report](#fetch-a-report)
- [Create a Report](#create-a-report)
- [Update a Report](#update-a-report)
- [Search for Reports](#search-for-reports)
- [Create or Update a Report](#create-or-update-a-report)
- [Filling FileUpload and Image fields](#filling-fileupload-and-image-fields)
- [Available fields](#available-report-fields)


### Fetch a report

Get a report with its default [fields](#available-report-fields)
```
GET /api/v4/reports/49
```

```
{  
  "id":49,
  "account_id":1,
  "address":"New York, NY, USA",
  "category_id":2,
  "is_anonymous":false,
  "iso_created_at":"2016-10-10T16:13:27.142+13:00",
  "location":{  
    "latitude":-36.8667,
    "longitude":174.76670000000001
  },
  "report_state_id":2,
  "title":"Effluent runoff",
  "user_id": 2
}
```

Get report adding **all** optional [fields](#available-report-fields)
```
GET /api/v4/reports/49?fields=account_logo,account_name,form_fields,is_manageable_by,map_url,note_comments,report_comments,report_state_name,user_image,user_short_name
```

```
{
  "id":49,
  "account_id":1,
  "account_logo":"missing/logos/original.png",
  "account_name":"Cleaner streams",
  "address":"New York, NY, USA",
  "category_id":2,
  "is_anonymous":false,
  "is_manageable_by":true,
  "iso_created_at":"2016-10-10T16:13:27.142+13:00",
  "location":{  
    "latitude":-36.8667,
    "longitude":174.76670000000001
  },
  "map_url":"https://maps.googleapis.com/maps/api/staticmap?center=-36.8667%2C174.76670000000001\u0026maptype=roadmap\u0026markers=icon%3Ahttp%3A%2F%2Fwww.thundermaps.com%2Fassets%2Fmaps%2Fpins%2Fdefault%2Fpin-green%402x.png%7C-36.8667%2C174.76670000000001\u0026sensor=false\u0026size=640x200\u0026zoom=10",
  "report_state_id":2,
  "report_state_name":"Label",
  "title":"Effluent runoff",
  "user_id": 2
  "form_fields":[  
    {  
      "id":1,
      "label":"Category",
      "key":"f_1_1_1",
      "field_type":"Category",
      "form_order":0,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":2,
      "editable":true
    },
    {  
      "id":2,
      "label":"Time \u0026 Date Select",
      "key":"f_1_2_2",
      "field_type":"DateAndTime",
      "form_order":1,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":"2016-10-10T16:12:47.000+13:00",
      "editable":true
    },
    {  
      "id":3,
      "label":"Check Box",
      "key":"f_1_3_3",
      "field_type":"CheckBox",
      "form_order":2,
      "data":"{\"multi_select\":true,\"options\":[{\"label\":\"Label\",\"value\":\"f_1_3_3_3_1\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":0,\"is_default\":false},{\"label\":\"ok\",\"value\":\"f_1_3_3_4_2\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":1,\"is_default\":false}]}",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":[  
        "f_1_3_3_4_2"
      ],
      "editable":true
    },
    {  
      "id":4,
      "label":"public edit field",
      "key":"f_1_6_4",
      "field_type":"ShortTextBox",
      "form_order":4,
      "data":"",
      "mandatory":false,
      "visibility":"public",
      "field_visibility":"public",
      "value":"puba",
      "editable":true
    },
    {  
      "id":7,
      "label":"admin only",
      "key":"f_1_13_7",
      "field_type":"ShortTextBox",
      "form_order":5,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"private",
      "value":"admina",
      "editable":true
    },
    {  
      "id":5,
      "label":"\u003cp\u003eInstruction or Information text\u003c/p\u003e",
      "key":"f_1_7_5",
      "field_type":"FreeText",
      "form_order":6,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":6,
      "label":"Amazing pictures",
      "key":"f_1_8_6",
      "field_type":"Image",
      "form_order":1,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":[  
        {  
          "id":15,
          "original_url":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/15/original-c774896451cc165e4a3cb8f230803021391fad30.png",
          "filename":"test.png",
          "style_url":{  
            "thumb":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/15/thumb-4eab0ac0176fc1a77b6ecb775e0ae58ceaf79dc8.png",
            "medium":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/15/medium-2e7d56cb4febf5fa089cd16161da183c60d7f7f4.png"
          }
        },
        {  
          "id":16,
          "original_url":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/16/original-8b0457389fda1f73a00947f2557f57f00a12a815.png",
          "filename":"webRaf.png",
          "style_url":{  
            "thumb":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/16/thumb-2285458e0f0cbbb478aad2a9277cc66b057fc97b.png",
            "medium":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/16/medium-783d436d0479b54d3ee258a7c0c68aa8a91d674f.png"
          }
        }
      ],
      "editable":true
    },
    {  
      "id":9,
      "label":"Awesome files",
      "key":"f_1_18_9",
      "field_type":"FileUpload",
      "form_order":2,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":[  
        {  
          "id":17,
          "original_url":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/17/original-a8ee674d52823df1e371132279f502702e10d7e2.zip",
          "filename":"Archive.zip",
          "style_url":{  

          }
        }
      ],
      "editable":true
    },
    {  
      "id":10,
      "label":"Important files",
      "key":"f_1_19_10",
      "field_type":"FileUpload",
      "form_order":3,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":[  
        {  
          "id":18,
          "original_url":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/18/original-c445452ca967fd83860dea23e0917180b24ab7ba.jpg",
          "filename":"galaxy.jpg",
          "style_url":{  

          }
        },
        {  
          "id":19,
          "original_url":"https://s3-ap-southeast-2.amazonaws.com/thundermaps-developers/raf/development/paperclipped/incident_report_images-attachments/19/original-d04c6330b5cc98a49322c955aaa0cf6fa65006e6.png",
          "filename":"test.png",
          "style_url":{  

          }
        }
      ],
      "editable":true
    }
  ],
  "note_comment_ids":[1,2]
  "report_comment_ids":[2,3]
}
```

Get report selecting only desired [fields](#available-report-fields) can be achieved using the `-` prefix on the default field names to exclude them from the request in combination with addition of optional fields.
```
GET /api/v4/reports/49?fields=account_logo,-address,user_image,-title
```

> **Notes:**
> - Category field can be read via `category_id` properties on report or through
> value on its specific field information on form_fields list of the report.

### Create a Report
```
POST /api/v4/reports
Content-Type: application/json
{
  "report": {
    "account_id": 123, // required

    // location or address are alternatively required: you must provide at least one of them
    "location": {
      "latitude": 12,
      "longitude": 34.56,
    },
    "address": "123 Somewhere rd. In the World",

    // category_id field need to be changed using its value from respective form_field value.
    "category_id": 22,

    // field to have its content defined by integrations like ThunderBot
    "source_id": 'free_text',

    // Custom fields:
    // They have their key using the following format and might accept:
    // strings, numbers, arrays of strings and array of numbers.
    "f_1_1_1": 'custom',
    "f_1_1_2": 4,
    "f_1_1_3": ['1','2','3'],
    "f_1_1_4": [1,2,3],
  }
}
```
> **Notes:**
> - The comments included in the `JSON` above are for illustrative purpose
> only and must not be used on real requests.
> - Category field can be read via `category_id` properties on report or through
> value on its specific field information on form_fields list of the report.

### Update a Report
Excluding `account_id` and with addition of `report_state_id` the same fields
should be available on a update request.
```
PATCH /api/v4/reports/:report_id
Content-Type: application/json

{
  "report": {
    "report_state_id": 123 // optional and only available on update

    // field to have its content defined by integrations like ThunderBot
    // not required but must be unique per channel if provided.
    "source_id": 'free_text',

    // ...
  }
}
```

### Search for Reports
Report search is a asynchronous process and requires a couple of steps.
Here you will see the first step, how to build and start a report search.

The search accept tree groups of parameters:
  - `filter` to specify what is included in the search
  - `exclude` to specify what is not included in the search
  - `order` to specify the order of the record in the resultset

List of parameters allowed:
  - `filter[tile_id]`=ZmZmZmbWZUBmZmZmZqZEwJqZmZmZmak/
  - `filter[tile][latitude]`=23.234
  - `filter[tile][longitude]`=177.432
  - `filter[tile][scale]`=0.5
  - `filter[channels]=`[23,38,42]
  - `filter[updated_after]`=2018-12-31T23:45:45+13:00
  - `filter[updated_before]`=2019-01-15T23:45:58+13:00
  - `filter[appearance]`=loud
  - `filter[id]`[id_array]=1,2,3
  - `filter[id]`[report_search_id]=87654321
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
  - `order[updated_at]`=desc
  - `order[id]`=asc

where:
- `tile_id` is the id returned from tiles search api.
- `tile[latitude]`, `tile[longitude]` and `tile[scale]` can be used in combination as alternative to `tile_id` above.
- `channels` contain a list of channel ids comma separated and wrapped in square brackets.
- `updated_before` and `updated_after` are dates in ISO8601 format.
- `appearance` is one of "invisible", "normal", "attention" or "loud"
- `id_array` is a comma separated list of report_ids
- `report_search_id` is the id resulting from a previous report_search
- `order[updated_at]` and `order[id]` allowed values are "asc" or "desc"

Combining the fields above a report search can be created as follows:
```
GET /api/v4/reports/search?filter[channels]=[1,2]&updated_after=2018-12-31T23:45:45+13:00
Content-Type: application/json

{
  id: 12345678,
  url: "https://api1.thundermaps.com/api/v4/report_searches/12345678"
}
```

This `id` or `url` will be used to retrieve the search result using [Report Searches API](032_report_searches.md).

### Create or Update a Report
_This method is being provided for use with ThunderBot integrations, but It might
evetually get deprecated_.
This method is to be used to create a report if there is no such report and will
also update it if by any reason it already exists.
There are a few things that are worth noting about this method:

1. A `source_id` must be provided to identify the report being created.
1. A `account_id` must be provided to scope the search for `source_id`. _This
means that the key for the report will be the combination of `source_id` and
`account_id`._ **Be aware that duplicated keys might be produced via create or
update api endpoints.**
1. Fields `location` or `address` are only required (one of them) if the report
does not exist. And, obviously, if provided and a report exists it will have its
values updated.
1. For internal consistency, the `report_state_id` is ignored on report
creation. Every report will always be created on its channel defined initial
state. To set `report_status_id` another request have to be made to update the
report.
1. If `category_id` is not provided or provided as null the report category will
be set to the channel root category.
1. If `category_id` and `category_names` are both provided than `category_names`
will be completely ignored.
1. Category names not found will be created on demand following the hierarchy
provided by the order of the names on the `category_names` list.
1. You can provide from 0 to 3 names on `category_names`:
  1. `category_names: []` will set report category to its account root category.
  1. `category_names: ['primary']` will set report category to "primary".
  1. `category_names: ['primary', 'secondary']` will set report category to
  "secondary".
  1. `category_names: ['primary', 'secondary', 'tertiary']` will set report
  category to "tertiary".
```
POST /api/v4/reports/upsert
Content-Type: application/json

{
  "report": {
    "source_id": "external_identification_for_report", // required and must be unique per account
    "account_id": 123, // required

    // location or address are alternatively required for report creation: you must provide at least one of them
    "location": {
      "latitude": 12,
      "longitude": 34.56,
    },
    "address": "123 Somewhere rd. In the World",

    // category_id field need to be changed using its value from respective form_field value.
    // `category_id` will override the category `category_names` attribute
    "category_id": 22,
    "category_names": ["Some primary category name", "Fantastic secondary category name", "Specific tertiary category name"],

    // field to have its content defined by integrations like ThunderBot
    // not required but must be unique per channel if provided.
    "source_id": 'free_text',

    // Custom fields:
    // They have their key using the following format and might accept:
    // strings, numbers, arrays of strings and array of numbers.
    "f_1_1_1": 'custom',
    "f_1_1_2": 4,
    "f_1_1_3": ['1','2','3'],
    "f_1_1_4": [1,2,3],

  }
}
```
> **Notes:**
> - Category field can be read via `category_id` properties on report or through
> value on its specific field information on form_fields list of the report.
> `category_names` is a static key and this is the only available access to this property.

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

### Available report fields
You can use the fields parameter in any of the Report API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request. Obviously, this
will make no difference on `204-No Content` responses.

* **id**
* **account_id**
* account_logo
* account_name
* **address**
* assignee_id
* assignment_due_at
* **category_id**
* form_fields
* **is_anonymous**
* is_manageable_by
* **iso_created_at**
* **location**
* map_url
* note_comments
* report_comments
* **report_state_id**
* report_state_name
* **title**
* **user_id**
* user_image
* user_short_name
* users_opened
* **shape_id**

> **Notes:**
> - The highlighted fields by default included on the response.
> - User fields are not returned if report is anonymous
