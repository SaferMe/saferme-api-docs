# Api workflows for Thundermaps V4
This document put some information together to exemplify how to use api/v4 of
Thundermaps to create, fetch and update reports

## Authentication
Any of the requests to the v4 api need to be Authenticated.
To do so you will have to inform an `Authorization` header with a api_key (token)
provided by Thundermaps at https://staging.thundermaps.com/api/keys/show.

```
Authorization: Token token=user_api_token
```

## Forms API
You can get information about what are the currently available fields at one
account form and their details from channels form api.

```
GET /api/v4/channels/:channel_id/form
```

```
{  
  "id":1,
  "name":"Cleaner streams Form",
  "version":52,
  "fields":[  
    {  
      "id":13,
      "label":"Category",
      "key":"f_1_36_13",
      "field_type":"Category",
      "form_order":0,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":14,
      "label":"A Check Box field",
      "key":"f_1_38_14",
      "field_type":"CheckBox",
      "form_order":1,
      "data":"{\"multi_select\":true,\"options\":[{\"label\":\"First Option\",\"value\":\"f_1_38_14_38_1\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":0,\"is_default\":false},{\"label\":\"Another Option\",\"value\":\"f_1_38_14_39_2\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":1,\"is_default\":false}]}",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":17,
      "label":"Drop Down",
      "key":"f_1_48_17",
      "field_type":"DropDown",
      "form_order":2,
      "data":"{\"multi_select\":false,\"options\":[{\"label\":\"Drop down option one\",\"value\":\"f_1_48_17_48_1\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":0,\"is_default\":false},{\"label\":\"And the last option of the drop down\",\"value\":\"f_1_48_17_50_3\",\"enabled\":true,\"multi_option_id\":null,\"display_order\":1,\"is_default\":false}]}",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":15,
      "label":"Date and time field",
      "key":"f_1_42_15",
      "field_type":"DateAndTime",
      "form_order":3,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":12,
      "label":"Description",
      "key":"f_1_35_12",
      "field_type":"Description",
      "form_order":4,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":11,
      "label":"Short Text Box",
      "key":"f_1_29_11",
      "field_type":"ShortTextBox",
      "form_order":5,
      "data":"",
      "mandatory":true,
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
      "form_order":6,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":9,
      "label":"Awesome files",
      "key":"f_1_18_9",
      "field_type":"FileUpload",
      "form_order":7,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    },
    {  
      "id":10,
      "label":"Important files",
      "key":"f_1_19_10",
      "field_type":"FileUpload",
      "form_order":8,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":null,
      "editable":true
    }
  ]
}
```

## Reports API
With Report api V4 you can create, fetch and update a report.

### Fetch a report
Default
```
GET /api/v4/reports/49
```

```
{  
  "id":49,
  "account_id":1,
  "address":"New York, NY, USA",
  "category_id":2,
  "description":"descripa",
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

Get report adding **all** optional [fields](#available-fields)
```
GET /api/v4/reports/49?fields=account_logo,account_name,extension_fields,form_fields,integrated_forms,is_manageable_by,map_url,note_comments,report_comments,report_state_name,user_image,user_short_name
```

```
{
  "id":49,
  "account_id":1,
  "account_logo":"missing/logos/original.png",
  "account_name":"Cleaner streams",
  "address":"New York, NY, USA",
  "category_id":2,
  "description":"descripa",
  "integrated_forms":{  
    "impac_form":{  
      "incident_id":455726,
      "event_type_id":59439,
      "category_id":230
    }
  },
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
  "extension_fields":[  
    {  
      "namespace":"integrated_forms__impac_form",
      "key":"incident_id",
      "label":"RM Incident ID",
      "value":455726,
      "value_label":455726
    },
    {  
      "namespace":"integrated_forms__impac_form",
      "key":"event_type_id",
      "label":"RM Event Type",
      "value":59439,
      "value_label":"Near Miss"
    },
    {  
      "namespace":"integrated_forms__impac_form",
      "key":"category_id",
      "label":"RM Category",
      "value":230,
      "value_label":"Equipment or Plant Damage"
    }
  ],
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
      "id":8,
      "label":"Description",
      "key":"f_1_17_8",
      "field_type":"Description",
      "form_order":3,
      "data":"",
      "mandatory":null,
      "visibility":"public",
      "field_visibility":"public",
      "value":"descripa",
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

Get report selecting only desired [fields](#available-fields) can be achieved using the `-` prefix on the default field names to exclude them from the request in combination with addition of optional fields.
```
GET /api/v4/reports/49?fields=account_logo,-address,user_image,-title
```

> **Note:** Description and Category fields can be read both via their respective
`description` and `category_id` properties or through value on their specific
field information on form_fields list of the report.

### Create a Report
```
POST /api/v4/reports
Content-Type: application/json

{
  "account_id": 123, // required

  // location or address are alternatively required: you must provide at least one of them
  "location": {
    "latitude": 12,
    "longitude": 34.56,
  },
  "address": "123 Somewhere rd. In the World",

  // Description and category_id fields:
  // They have their update-ability controlled by custom form fields like the other custom fields.
  // In fact they will also have a alternative field key associated that will work as you where accessing them directly.
  "description": 'asdfg',
  "category_id": 22,

  // Custom fields:
  // They have their key using the following format and might accept:
  // strings, numbers, arrays of strings and array of numbers.
  "f_1_1_1": 'custom',
  "f_1_1_2": 4,
  "f_1_1_3": ['1','2','3'],
  "f_1_1_4": [1,2,3],

  // Integrated forms
  // those fields are plugged in from extensions added to the account.
  // Impac, for example, will have the extra fields bellow.
  "integrated_forms": {
      "impac_form": {
        "event_type_id": 234,
        "category_id": 345,
      }
    }
  }
}
```
> **Note:** The comments included in the `JSON` above are for illustrative purpose
 only and must not be used on real requests.

> Description and Category can be set both via their respective
`description` and `category_id` properties or through their specific field key
like any other kind of field.

### Update a Report
Excluding `account_id` and with addition of `report_state_id` the same fields
should be available on a update request.
```
PATCH /api/v4/reports/:report_id
Content-Type: application/json

{
  "report_state_id": 123 // optional and only available on update
  // ...
}
```

### Available fields
You can use the fields parameter in any of the Report API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request. Obviously, this
will make no difference on `204-No Content` responses.

* **id**
* **account_id**
* account_logo
* account_name
* **address**
* **category_id**
* **description**
* extension_fields
* form_fields
* integrated_forms
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

> **Note:** The highlighted fields by default included on the response.

> User fields are not returned if report is anonymous
