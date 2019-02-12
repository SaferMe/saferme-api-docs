## Authentication
Any of the requests to the v4 api need to be Authenticated.
To do so you will have to inform an `Authorization` header with a api_key (token)
provided by SaferMe. To get your token (api key) go to Integrations page on
channel's control panel and select ThunderBot option. You will see there your
channel's name and id besides your API Key. X-TeamID header need to be added with 
respective team_id to enable the team in the context of any request.

```
Authorization: Token token=user_api_token
X-AppId: com.thundermaps.main
X-TeamId: 1234
X-InstallationId: something-unique-for-this-client-this-app-and-this-api-key
```
