## Users API
> NOTE: You might actually be after [Team Users API](team_users.md) for organization member related operations.

With Users api V4 you can:

- [Create a User](#create-a-user)
- [Fetch a User](#fetch-a-user)
- [Update a User](#update-a-user)
- [Available fields](#available-user-fields)


### Create a user
Signs up and creates one user.
> NOTE: this request returns session information to be used in further requests instead of created user data.

Allowed fields:
- first_name: `string` (required if gdpr_accept == true)
- last_name: `string` (required if gdpr_accept == true)
- **email**: `string`
- contact_number: `string`
- **password**: `string`
- password_confirmation: `string`
- **accepted_terms_version**: `integer`
- **gdpr_version**: `integer`
- **gdpr_accept**: `boolean`
- **app_bundle_id**: `string`
- team_name: `string` (required if setup mode creates a team)
- team_location**: `string`
- setup_modes: `array<string>` allow any combination of values `"contact_trace"`, `"with_team"`


```
POST /api/v4/users
{
  "user": {
    "email": "john@doe-admin.com",
    "first_name": "John",
    "last_name": "Single Doe",
    "password": "ThatImpossibleToGuessPassword",
    "password_confirmation": "ThatImpossibleToGuessPassword",
    "accepted_terms_version": 4,
    "gdpr_version": 3,
    "gdpr_accept": true,
    "app_bundle_id": "com.thundermaps.saferme"
  }
}
```

```
201 Created
{
  "session": {
    "access_token": "usersaccesstokentobeusedinfurtherrequestsforauthentication",
    "app_bundle_id": "com.thundermaps.saferme",
    "branded_app_id": 24,
    "client_uuid": "eeeeeeee-dddd-cccc-bbbb-aaaaaaaaaaaa",
    "profile": {
      "user_id": 14,
      "user_uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "preferred_team_id": -1,
      "personal_account_option": false,
      "consent_required": false,
      "profile_details_pending": false,
      "password_update_pending": false
    },
    "refresh_token": "tokentogetfreshaccesstoken",
    "token_expire_at": "2023-06-02T16:15:24.824+12:00"
  }
}
```


### Fetch a user

Get a user. See the optional [available fields](#available-users-fields).

> NOTE: To get information about the user's own profile it is recommended
to use their id provided in the session response from user's [signIn](../sessions.html#create-session), [signUp](../users.html#create-a-user) or [fetching current session](../sessions.html#fetch-current-session) details. There is a special id `me` you can use if you don't have such information but it is not likely to be supported in the future.

```
GET /api/v4/users/14
```

```
200 OK
{
  "id": 14,
  "email_notifications_enabled": true,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@admin-doe.com",
  "avatar":{
    "mini": "https://userfiles.prod.saferme.io/url_for_mini.jpg",
    "small": "https://userfiles.prod.saferme.io/url_for_small.jpg",
    "medium": "https://userfiles.prod.saferme.io/url_for_medium.jpg",
    "large": "https://userfiles.prod.saferme.io/url_for_large.jpg",
    "huge": "https://userfiles.prod.saferme.io/url_for_huge.jpg"
  },
  "accepted_terms_version": 4
}

```


### Update a user

Updates a user. Fields not sent are not updated. Fields sent as null will attempt to clear its values.

Allowed fields:
- email_notifications_enabled: `boolean`
- email: `string`
- first_name: `string`
- gdpr_accept: `boolean`
- gdpr_version: `integer`
- last_name: `string`
- password_confirmation: `string`
- password: `string`
- avatar: `file` (Requires data to be submited using `content-type: multipart/form-data`. It is not possible to send it using JSON payload)

```
PATCH /api/v4/users/14
{
  "user": {
    "first_name": "Jonh",
    "last_name": "Married Doe"
  }
}
```

```
202 No Content
```


### Available user fields
You can use the fields parameter in any of the User API methods. The requested
method will respond with the required fields accordingly. All fields are
included by default but you can opt-out from them on request.

- **id**
- **email_notifications_enabled**
- **first_name**
- **last_name**
- **email**
- **avatar**
- **accepted_terms_version**
