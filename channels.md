## Channels API
With Channels api V4 you can:

- [List Channels](#list-channels)
- [Fetch a Channel](#fetch-a-channel)
- [Create a Channel](#create-a-channel)
- [Update a Channel](#update-a-channel)
- [Delete a Channel](#delete-a-channel)
- [Available fields](#available-channel-fields)


### List channels
Fetch a paginated list of channels for the current user sorted by name.

Optional params:
- `ids`: if present filter entries by the given list of ids.
- `team_id`: if present filter entries by the given team_id.
- `only_operable_by_me`: if `true` is given then it returns entries the authenticated user is admin or operator of.
- `include_addon_channels`:
  - if `false` (default) is given it return only non-addon channels.
  - if `true` is given then it returns both addon and non-addon channel entries.
  - if `only` is given it returns only addon channel entries.
- `reportable`: if `true` is given then it returns entries the authenticated user can create reports on.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.

```
GET /api/v4/channels?updated_after=2022-02-28T10:45:35.081+13:00&fields=-description,hazard_channel
```

```
[
  {
    "id": 2,
    "uuid": "f0bea8fb-6dc8-5cd3-ac32-74de4dd36dae",
    "additional_fields":[],
    "allow_public_comments": true,
    "allow_public_viewers": true,
    "allow_user_delete_own_reports": false,
    "are_new_reports_anonymous": false,
    "banners_enabled": false,
    "category_id": 2,
    "form_locked": false,
    "hazard_channel": false,
    "is_addon_channel": false,
    "is_manageable_by": true,
    "is_operable_by": true,
    "is_reportable_by": true,
    "logo":{
      "mini": "missing/logos/mini.png",
      "small": "missing/logos/small.png",
      "medium": "missing/logos/medium.png",
      "large": "missing/logos/large.png",
      "huge": "missing/logos/huge.png",
      },
    "moderated": false,
    "name": "Hazards on a leash",
    "reports_count": 0,
    "risk_controls_editability": "admins_only",
    "slug": "Cleaner streams",
    "standard_channel": false,
    "team_id": 2
  },
  ...
]
```

### Fetch a channel

Get a channel. See the optional [available fields](#available-channel-fields).
```
GET /api/v4/channels/14&fields=-description,hazard_channel
```

```
{
  "id": 2,
  "uuid": "f0bea8fb-6dc8-5cd3-ac32-74de4dd36dae",
  "additional_fields":[],
  "allow_public_comments": true,
  "allow_public_viewers": true,
  "allow_user_delete_own_reports": false,
  "are_new_reports_anonymous": false,
  "banners_enabled": false,
  "category_id": 2,
  "form_locked": false,
  "hazard_channel": false,
  "is_addon_channel": false,
  "is_manageable_by": true,
  "is_operable_by": true,
  "is_reportable_by": true,
  "logo":{
    "mini": "missing/logos/mini.png",
    "small": "missing/logos/small.png",
    "medium": "missing/logos/medium.png",
    "large": "missing/logos/large.png",
    "huge": "missing/logos/huge.png",
    },
  "moderated": false,
  "name": "Hazards on a leash",
  "reports_count": 0,
  "risk_controls_editability": "admins_only",
  "slug": "Cleaner streams",
  "standard_channel": false,
  "team_id": 2
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
- **uuid**
- **allow_public_comments**
- **are_new_reports_anonymous**
- attach_pdf_to_emails
- **category_id**
- **description**
- display_report_state
- display_reporter
- display_workflow_notes
- **form_locked**
- hazard_channel
- **is_addon_channel**
- is_deletable_by
- **is_manageable_by**
- **is_operable_by**
- **is_reportable_by**
- **logo**
- member_count
- **name**
- pin_urls
- **reports_count**
- **risk_controls_editability**
- **standard_channel**
- **team_id**
- tune_in_count
