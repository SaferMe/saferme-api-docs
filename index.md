# Api workflows for SaferMe V4
This document put some information together to exemplify how to use api/v4 of
SaferMe to create, fetch and update reports

- [Authentication](005_authentication.md)
- [Alert Areas API](010_alert_areas.md)
- [Forms API](020_forms.md)
- [Reports API](030_reports.md)
- [Report Searches API](032_report_searches.md)
- [Categories API](040_categories.md)
- [File Attachments API](040_file_attachments.md)
- [Report States API](050_report_states.md)
- [Shapes API](060_shapes.md)
- [Users API](070_users.md)
- [Analytics API](080_analytics.md)
- [Report Signatures API](090_report_signatures.md)
- [Note Comments API](100_note_comments.md)
- [Reset Passwords API](110_reset_passwords.md)
- [Teams API](120_teams.md)
- [Team Users API](125_team_users.md)
- [Channel Selections API](130_channel_selections.md)
- [Notifications API](140_notifications.md)
- [Tasks API](150_tasks.md)

## Base URL for Api endpoints

```
https://public-api.thundermaps.com
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
