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
