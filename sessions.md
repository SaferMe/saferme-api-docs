## Sessions API
With Sessions api you can:

- [Create a Session](#create-session)
- [Fetch current Session](#fetch-current-session)
- [Refresh Access Token for a Session](#refresh-access-token-for-a-session)
- [Delete current Session](#delete-current-session)

### Create a Session
Only Content-Type headers is required. The value for `app_bundle_id` will always be `"com.thundermaps.saferme"` for SaferMe users.

The `access_token` returned will be used in the `Authorization` headers to authenticate
requests acros this API.


```
POST /api/v4/session
Content-Type: application/json

{
  "session": {
    "app_bundle_id": "com.thundermaps.saferme",
    "email": "youruser@email.com",
    "password": "yourSecretAndSecurePassword"
  }
}
```

```
{
  "session": {
    "access_token": "smt_1j_WVuWRBzUo5S2SEL6iY_Yf69Ejg692BDJHLCFreVcKrY",
    "refresh_token": "OZnN3WvUmcFxkyCjRmk5UTpOXUSX77H-89xlrt5qh9U",
    "token_expire_at": "2023-02-24T19:05:16.949+13:00",

    "app_bundle_id": "com.thundermaps.saferme",
    "branded_app_id": 1,
    "client_uuid": "2afe4503-91fb-4afd-a9a7-abccdca0f4d3",

    "profile": {
      "user_id": 6,
      "preferred_team_id": 2,

      "user_uuid": "43b9153a-900b-5c07-b4e4-5121333b23ef",
      "personal_account_option": false,
      "consent_required": false,
      "profile_details_pending": false,
      "password_update_pending": false
    }
  }
}
```

### Fetch current Session
Use this endpoint to check the current details and status of your session.

You will be required to authenticate using your current token using the `Authorization` header to make this operation.

```
GET /api/v4/session
Authorization: Token token=smt_1j_WVuWRBzUo5S2SEL6iY_Yf69Ejg692BDJHLCFreVcKrY
```

```
{
  "session": {
    "token_expire_at": "2023-02-24T19:05:16.949+13:00",

    "app_bundle_id": "com.thundermaps.saferme",
    "branded_app_id": 1,
    "client_uuid": "2afe4503-91fb-4afd-a9a7-abccdca0f4d3",

    "profile": {
      "user_id": 6,
      "preferred_team_id": 2,

      "user_uuid": "43b9153a-900b-5c07-b4e4-5121333b23ef",
      "personal_account_option": false,
      "consent_required": false,
      "profile_details_pending": false,
      "password_update_pending": false
    }
  }
}
```

> NOTE: access_token or refresh_token cannot be retrieved again and they won't appear on the result of this request


### Refresh Access Token for a Session
Use this endpoint to update an `access_token`.
You will get a new set of `access_token` and `refresh_token` and the previous one
will be made invalid immediately.

This can be done even before the token expiration to avoid completely the need
to handle retries in case of expired token failures.

Bear in mind the `refresh_token` has also a expiry_date and it will not work'
if the token has been left expired for too long.

```
PATCH /api/v4/session
Content-Type: application/json

{
  "session": {
    "access_token": "smt_1h_2nnFNKInDJ7Jx_qZLKrJbL-3rE1R-z2Tzq2q240Ny38",
    "refresh_token": "IrLHc2tb9uxiyeTcAfoxZ6aNtXJWe16Bv7DOxv-Dpgs"
  }
}
```

```
{
  "session": {
    "access_token": "smt_1h_E510IPwg4w6I9pReWOKAx2PkxuRiipMcvj36yHTrbSI",
    "refresh_token": "sNsfhRCn4t-V56ZCIv2H99Lj1Ag1BjIV8MqOts1BBfE",
    "token_expire_at": "2023-02-24T19:34:23.811+13:00",

    "app_bundle_id": "com.thundermaps.saferme",
    "branded_app_id": 1,
    "client_uuid": "2afe36bc-567f-400d-8642-1639abf49077",

    "profile": {
      "user_id": 6,
      "preferred_team_id": 2,

      "user_uuid": "43b9153a-900b-5c07-b4e4-5121333b23ef",
      "personal_account_option": false,
      "consent_required": false,
      "profile_details_pending": false,
      "password_update_pending": false
    }
  }
}
```


### Delete current Session
Use this endpoint to delete a session. This will invalidate your set of tokens and
prevent any future use of them.

You will be required to authenticate using your current token using the `Authorization` header to make this operation.

```
DELETE /api/v4/session
Authorization: Token token=smt_1h_E510IPwg4w6I9pReWOKAx2PkxuRiipMcvj36yHTrbSI
```

```
{}
```
