## Channels API
With Channels api V4 you can:

- [List Channel](#list-channels)
- [Fetch a Channel](#fetch-a-channel)
- [Create a Channel](#create-a-channel)
- [Update a Channel](#update-a-channel)
- [Delete a Channel](#delete-a-channel)
- [Available fields](#available-channel-fields)


### List channels
Fetch a paginated list of channels for the current user sorted by name.

Optional params:
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.
- ...

```
GET /api/v4/channels?fields=updated_after=2022-02-28T10:45:35.081+13:00&fields=-description,hazard_channel
```

```
[  
  {  
    "id": 14,
    "name": "Channel Name 1",
    "hazard_channel": false,
    ...
  },
  {  
    "id": 2,
    "name": "Channel Name 2",
    "hazard_channel": true,
    ...
  },
  ...
]
```

### Fetch a channel

Get a channel. See the optional [available fields](#available-channel-fields).
```
GET /api/v4/channels/14
```

```
{
  "id": 14,
  ...
}
```


### Create a channel
Creates one channel.
Allowed fields:
  - `name`
  - ...

```
POST /api/v4/channels
{
  "channel": {
    "name": "New channel name",
    ...
  }
}
```

```
201 Created
{
  id: 15,
  name: "New channel name",
  ...
}
```


### Update a channel
Updates the allowed fields of one single channel.
Allowed fields:
  - `name`
  - ...

```
PATCH /api/v4/channels/14
{
  "channel": {
    "name": "New name"
  }
}
```

```
204 No Content
```


### Delete a channel
Deletes one single channel.

```
DELETE /api/v4/channels/14
```

```
204 No Content
```

### Available channel fields
You can use the fields parameter in any of the Channel API methods. The requested
method will respond with the required fields accordingly. All fields are
included by default but you can opt-out from them on request.

- **id**
- **additional_fields**
- **allow_public_comments**
- allow_public_reporters
- **allow_public_viewers**
- **allow_user_delete_own_reports**
- **are_new_reports_anonymous**
- attach_pdf_to_emails
- **banners_enabled**
- **category_id**
- **description**
- display_report_state
- display_reporter
- display_workflow_notes
- fatigue_channel
- **form_locked**
- hazard_channel
- **is_addon_channel**
- is_deletable_by
- **is_manageable_by**
- **is_operable_by**
- **is_reportable_by**
- last_report_date
- **logo**
- member_count
- **moderated**
- **name**
- num_non_team_users
- phone_number
- pin_urls
- public_requested
- **reports_count**
- **risk_controls_editability**
- **slug**
- **standard_channel**
- **team_id**
- tune_in_count
- www
