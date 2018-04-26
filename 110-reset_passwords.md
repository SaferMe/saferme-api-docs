## Reset Passwords API
This API can be used for resetting a userts password. There are two steps:
1. Generate a reset code
2. Submit a new password

# Request Token
This will send an email and (if able) a text message to the user with a Reset Code and link to change thier password.
Tokens expire after 24 hours, and a new call to this endpoint will be required to generate a new one.

```
GET api/v4/reset_passwords/request_token
```

Required Headers:
```
X-AppID
```

Body:
```
{  "email": "test@example.com" }
```
Responses:
404: Email does not exist
422: Invalid email provided
200: Sucess. Response body:
```
{ "email": "test@example.com"  }
```
Or, If user has a valid SMS number associated with thier account:
```
{ 
  "email": "test@example.com", 
  "sms_number": "+12******789"
}
```

# Update Password
```
PATCH api/v4/reset_passwords/update_pasword
PUT api/v4/reset_passwords/update_pasword
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
  "password" : "newpassword",
  "password_confirmation" : "newpassword"
}
```
Responses:
422: Invalid parameters / Passwords don't match / Incorrect token
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
420: Enhance your calm - too many retries too quickly. Wait a moment before tryig again. Backoff strategy:
```
TimeToWait: (TimeOfLastTry + (0.1) * 2^NumberOfAttempts) - CurrentTime
```
200: Success. response:
```
{
    "user_id": 6,
    "auth_token": "6e68...c023c"
}
```
