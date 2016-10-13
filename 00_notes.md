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

> Description and Category fields are accessible both via their respective
`description` and `category_id` properties or through a field key like the other
field types.

## Report API
With Report api V4 you can create, fetch and update a report.

### Fetch a report
Default
```
GET /api/v4/reports/49
```

Get report excluding default fields
```
GET /api/v4/reports/49?fields=-address,-title,-is_anonimous
```

Get report adding optional fields
```
GET /api/v4/reports/49?fields=account_logo,account_name,user_image,user_short_name
```

Get report combining addition and exclusion of fields
```
GET /api/v4/reports/49?fields=account_logo,-address,user_image,-title
```


### Create a Report
```
POST /api/v4/reports
```

### Available fields
You can use the fields parameter in any of the Report API methods. The requested
method will respond accordingly. Obviously, It will make no difference on
`204-No Content` responses.

* id
* account_id
* account_logo
* account_name
* address
* category_id
* description
* extension_fields
* form_fields
* integrated_forms
* is_anonymous
* is_manageable_by
* iso_created_at
* location
* map_url
* note_comments
* report_comments
* report_state_id
* report_state_name
* title
* user_id
* user_image
* user_short_name

> Note: user fields are not returned if report is anonymous
