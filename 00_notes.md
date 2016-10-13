# Authentication
Any of the requests bellow will need to be Authenticated. To do so you will have to add Authorization header.
```
Authorization: Token token=user_api_token
```

# GET
## default get report
GET /api/v4/reports/49

## get report excluding default fields
GET /api/v4/reports/49?fields=-address,-title,-is_anonimous

## get report adding optional fields
GET /api/v4/reports/49?fields=account_logo,account_name,user_image,user_short_name

## get report combining addition and exclusion of fields
GET /api/v4/reports/49?fields=account_logo,-address,user_image,-title

### Available fields
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

## Note: user fields are not returned if report is anonymous

# POST
POST /api/v4/reports
