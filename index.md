# Api workflows for SaferMe V4
This document put some information together to exemplify how to use api/v4 of
SaferMe to create, fetch and update reports

- [Alert Areas API](alert_areas.md)
- [Analytics API](analytics.md)
- [Categories API](categories.md)
- [Channel Selections API](channel_selections.md)
- [File Attachments API](file_attachments.md)
- [Forms API](forms.md)
- [Note Comments API](note_comments.md)
- [Notifications API](notifications.md)
- [Report Searches API](report_searches.md)
- [Report Signatures API](report_signatures.md)
- [Report States API](report_states.md)
- [Reports API](reports.md)
- [Reset Passwords API](reset_passwords.md)
- [Shapes API](shapes.md)
- [Tasks API](tasks.md)
- [Team Users API](team_users.md)
- [Teams API](teams.md)
- [Users API](users.md)

## Base URL for Api endpoints

```
https://api.safer.me
```

## Authentication
Any of the requests to the v4 api need to be Authenticated.
To do so you will have to inform an `Authorization` header with a api_key (token)
provided by SaferMe. To get your token (api key) go to Integrations page on
channel's control panel and select ThunderBot option. You will see there your
channel's name and id besides your API Key. X-TeamID header need to be added with
respective team_id to enable the team in the context of any request.

```
Authorization: Token token=user_api_token
X-AppId: com.thundermaps.saferme
X-TeamId: 1234
X-InstallationId: something-unique-for-this-client-this-app-and-this-api-key
```


## Paginated endpoints

Most of index endpoints will provide the result in a paginated manner. Generally,
page sizes default to 60 and max page size default to 100. To specify pagination
ranges you will need to use the HTTP header `Range`.
Examples:

To request the first 100 items on a resource:
`Range: objects=0-99`

To request the second page of 100 records:
`Range: objects=100-199`

To request the first single items on a resource:
`Range: objects=0-0`

Paginated responses will include `Content-Range` http header from which you can
get the range of the current result and usually also the total number of records
in the listed resource. Its format is as follows:

```
Content-Range: item_identifier 0-99/233
```
The object_identifier will change with the resource fetched. First number is the
index of the first listed item included in the which it appears in the whole list.
Second number is the index of the last listed item included in the which it appears in the whole list. Third Number, the one after the slash is the total size
of the whole listed resource considering the params given on the request.

Examples:

```
Content-Range: team_users 0-0/25
```
First team member of 25.

```
Content-Range: reports 100-199/1330
```
List from 101st to 199th report of a total of 1330

```
Content-Range: reports */0
```
Empty list, zero items.

```
Content-Range: reports */5
```
Zero items returned of 5. Probably request out of range.

```
Content-Range: reports 10-29/*
```
List from 11th to 30th report of an undefined sized list. (Uncountable)
