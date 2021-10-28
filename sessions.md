## Sessions API
With Sessions api V3 you can:

- [Create Session](#create-session)

### Create Session
You will be required to add X-AppID and Content-Type headers but attention:
**Do NOT INCLUDE the X-InstallationID header.**

```
POST /api/v3/sessions
Content-Type: application/json
X-AppID: com.thundermaps.saferme

{
  "user": {
    "email": "youruser@email.com",
    "password": "yourSecretAndSecurePassword"
  }
}
```

```
{
  "auth_token": "abcDEFghijklMNOpqrstUVXVwz123456",
  "consent_required": false,
  "team_id": null,
  "user_id": 1234,
  "personal_account_option": false,
  "profile_details_pending": false,
  "password_update_pending": false
}
```

> Note: This api is deprecated and it will be soon be superseded by a V4 Session API that is currently under development.
