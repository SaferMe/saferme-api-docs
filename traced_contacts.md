## Traced Contacts API
With Traced Contacts api V4 you can:

- [List traced contacts](#list-traced-contacts)


### List traced contacts

Fetch a paginated list of traced contacts for a given team person.
Params:
- `team_user_id`: (required) team_user_id of the subject of the contact trace report.
- `date_from`: date in iso8601 format specifying the beginning of time range. Limited to 21.days.ago.
- `date_to`: date in iso8601 format specifying the end of time range.
- `max_contact_distance`: integer distance in meters specifying the max distance of contacts to include. Limited to 20m.
- `min_contact_duration`: integer distance in minutes specifying the min duration of contacts to include.
- `trace_type`: comma-separated string of contact log methods to be used to produce the report. It defaults to all. Available
options: `bluetooth`, `gps`, `manual` and `card`.

```
GET /api/v4/teams/1234/traced_contacts?date_from=2021-08-31T12:00:00.000Z&date_to=2021-09-07T11:59:59.999Z&max_contact_distance=3&min_contact_duration=2&team_user_id=51916&trace_type=card
```

```
[
  {
    "contact_id": 84977,
    "membership": "member",
    "team_user_id": 42171,
    "contact_name": "Jung Park",
    "trace_method": "ct_card",
    "contact_degree": 1,
    "contact_count": 22,
    "first_contact_at": null,
    "last_contact_at": null,
    "contact_email": "jung.park@itrenew.com",
    "total_time": 510,
    "longest_time": 84
  },
  ...
]
```

Response fields:
- `contact_id`: user id
- `membership`: type of team member
- `team_user_id`: membership_id
- `trace_method`: trace method used to detect this contact
- `contact_degree`: degree of contact in relation to the subject of the report
