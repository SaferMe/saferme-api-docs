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

## Form API
You can get information about what are the currently available fields at one
account form and their details from channels form api.

```
GET /api/v4/channels/:channel_id/form
```

> Description and Category fields can be read both via their respective
`description` and `category_id` properties or through value on their specific
field information on form_fields list of the report.

## Report API
With Report api V4 you can create, fetch and update a report.

### Fetch a report
Default
```
GET /api/v4/reports/49
```

Get report excluding default [fields](#available-fields)
```
GET /api/v4/reports/49?fields=-address,-title,-is_anonimous
```

Get report adding optional [fields](#available-fields)
```
GET /api/v4/reports/49?fields=account_logo,account_name,user_image,user_short_name
```

Get report combining addition and exclusion of [fields](#available-fields)
```
GET /api/v4/reports/49?fields=account_logo,-address,user_image,-title
```


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
> Note: the comments included above are for illustrative purpose only and must
not be used on real requests.

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

* _id_
* _account_id_
* account_logo
* account_name
* _address_
* _category_id_
* _description_
* extension_fields
* form_fields
* integrated_forms
* _is_anonymous_
* is_manageable_by
* _iso_created_at_
* _location_
* map_url
* note_comments
* report_comments
* _report_state_id_
* report_state_name
* _title_
* _user_id_
* user_image
* user_short_name

> Note: the highlighted fields by default included on the response.
> Note: User fields are not returned if report is anonymous
