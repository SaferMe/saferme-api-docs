GET api/v4/reset_passwords/request_token
Paramaters: email
Headers: Requires X-AppID Header

Response:
Invalid Email: 404
Valid Email, User does not have an SMS number on their account:
200: { email: <email_address_provided> }
Valid Email, User DOES have an SMS number on their account:
200: {email: <email_address_provided>, sms_number: +12*****345 }
Missing email param or required headers: 422

This will send an email and (if able) a text message to the user with a Reset Code and link to change thier password.


PUT/PATCH api/v4/reset_passwords/update_password
Parameters: email, reset_code, password, password_confirmation
Headers: Requires X-AppID Header

Response:
Invalid params/ Passwords dont match: 422 with details in the body
Successful change: 200, With userID and API Key for login
Throttling: 420

Throttling uses the following equation: TimeOfLastTry + (0.1) * 2^NumberOfAttempts
This means users will get about 5 attempts before they start to notice throttling, and 19 attempts within a 24 hour period.

Tokens expire after 24 hours
