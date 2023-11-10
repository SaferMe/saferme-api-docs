## Forms API
With Forms api V4 you can:

- [Fetch a Form](#fetch-a-form)
- [List Forms](#list-forms)


### Fetch a Form

Get a report_state. See the optional [available fields](#available-fields).
```
GET /api/v4/forms/:id
```

```
{
  "id":1,
  "uuid": "9c21c96e-4ce5-59e6-95d5-eb475fd03440",
  "name":"Hazard on leash",
  "updated_at": "2022-04-17T11:30:27.045+12:00",
  "team_id": 1,
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

### List Forms

Fetch a paginated list of report states.
Optional params:
- `ids`: if present filter entries by the given list of ids.
- `team_id`: if present filter entries by the given team_id.
- `only_operable_by_me`: if `true` is given then it returns entries the authenticated user is admin or operator of.
- `include_addon_channels`:
  - if `false` (default) is given it return only non-addon channels.
  - if `true` is given then it returns both addon and non-addon channel entries.
  - if `only` is given it returns only addon channel entries.
- `reportable`: if `true` is given then it returns entries the authenticated user can create reports on.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.

```
GET /api/v4/forms?team_id=2&updated_after=2022-02-28T10:45:35.081+13:00
```

```
[
  {
    "id": 1,
    "uuid": "9c21c96e-4ce5-59e6-95d5-eb475fd03440",
    "name": "Hazard on a leash",
    "team_id": 3,
    "version": 1,
    "updated_at": "2022-04-17T11:30:27.045+12:00",
    "fields": [
      {
        "id": 1,
        "label": "Field label #1",
        "key": "key_1",
        "field_type": "ShortTextBox",
        "form_order": 0,
        "data": null,
        "mandatory": false,
        "visibility": "public",
        "field_visibility": "public",
        "value": null,
        "editable": true,
        "is_summary": false
      }
    ]
  },
  ...
]
```

### Available fields
You can use the fields parameter in any of the Forms API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

- **id**
- **uuid**
- **name**
- **version**
- **team_id**
- **updated_at**
- **fields**
