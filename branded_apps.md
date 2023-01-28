## Branded Apps API

With Branded Apps API V4 you can:

- [Fetch a Branded App](#fetch-a-branded-app)
- [About `password_requirements`](#about-password_requirements)
- [Available fields](#available-fields)


### Fetch a Branded App

Get a Branded App. See the optional [available fields](#available-fields).

> Note: X-AppID header is required to identify the BrandedApp to be fetched.

```
X-AppID: com.thundermaps.saferme
GET /api/v4/branded_app
```

```
200 OK
{
  "bundle_id": "com.thundermaps.saferme",
  "disable_sign_up": true,
  "enable_location_warning": true,
  "latest_version": "2.10.3",
  "one_tap_reporting": true,
  "password_requirements": {
    "minimum_length": 8,
    "strength_levels": {
      "weak": 100,
      "medium": 10000,
      "strong": 1000000
    }
  },
  "safety_app": true
}
```

#### About `password_requirements`
The `password_requirements` field describe what a password need to have to
be accepted as valid on user sign-up, password reset and update password.

The minimum length allowed is given by `minimum_length`.
The minimum password strength is given by `strength_levels.strong`.

To calculate the password strength follow the rules of a well known password strength estimation tool [https://github.com/dropbox/zxcvbn](https://github.com/dropbox/zxcvbn).

We use the average number of `guesses` required to guess the password to compare with the `strength_levels` given from the response.

> Note: Bear in mind we **DO NOT** use the `score` property from `zxcvbn` which seem to be the most popular method.

```
# ex:
# weak because it is lower than 100 strength_levels.weak
zxcvbn('p4s$w0rd').guesses
=> 4
```

### Available fields
You can use the fields parameter in any of the Branded App API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

- android_url
- **bundle_id**
- default_geocoding_engine_id
- default_location
- default_zoom
- **disable_sign_up**
- **enable_location_warning**
- hydra_url
- ios_url
- **latest_version**
- minimum_recommended_app_version
- name
- **one_tap_reporting**
- **password_requirements**
- **safety_app**
