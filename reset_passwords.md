# Reset Passwords API
With Reset Passwords api V4 you can reset user's password using these endpoints:

- [Request a Password Reset Code](#request-a-password-reset-token)
- [Change User's password with a Reset Token](#change-users-password-with-a-reset-token)


## Request a Password Reset Token
This will send an email to the user with a Password Reset Code and link to change their password.
These codes expire in 24 hours after which a new call to this endpoint will be required to generate a new code.

```
POST api/v4/reset_passwords/request_token
```

Required Headers:
```
X-AppID
```

Body:
```
{
  "email": "test@example.com"
}
```
Responses:
**200** Success. Response body:
```
{
  "email": "test@example.com"
}
```
> Note: This endpoint will respond successfully even when no user is found for the email given in the request.

## Change User's password with a Reset Token
```
PATCH api/v4/reset_passwords/update_password
PUT api/v4/reset_passwords/update_password
```

Required Headers:
```
X-AppID
```

Body:
```
{
  "email": "test@example.com",
  "reset_token": "ABCDE",
  "password": "newpassword",
  "password_confirmation": "newpassword"
}
```
Responses:
**422** Invalid parameters / Passwords don't match / Incorrect token
Missing Parameter:
```
{
  "message": "client error",
  "param": "reset_token"
}
```
Invalid Parameter:
```
{
  "failures": {
    "email": [],
    "reset_token": [
      "Reset token Invalid Token"
    ]
  },
  "errors": {
    "email": [],
    "reset_token": [
      "Reset token Invalid Token"
    ]
  }
}
```
**420** Enhance your calm - too many retries too quickly. Wait a moment before tryig again. Backoff strategy:
```
TimeToWait: (TimeOfLastTry + (0.1) * 2^NumberOfAttempts) - CurrentTime
```
**200** Success. response:
```
{
  "status": "ok"
}
```
