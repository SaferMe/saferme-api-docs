## Authentication
Any of the requests to the v4 api need to be Authenticated.
To do so you will have to inform an `Authorization` header with a api_key (token)
provided by SaferMe. To get your token (api key) go to Integrations page on
channel's control panel and select ThunderBot option. You will see there your
channel's name and id besides your API Key.

```
Authorization: Token token=user_api_token
X-AppId: com.thundermaps.main
X-InstallationId: somethingUniqueForThisClientAppAndApiKey
```
