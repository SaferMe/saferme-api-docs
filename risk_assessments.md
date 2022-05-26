## Risk Assessments API
With Risk Assessments api V4 you can:

- [Fetch a Risk Assessment](#fetch-a-risk-assessment)
- [List Risk Assessments](#list-risk-assessments)


### Fetch a Risk Assessment

Get a risk_assessment. See the optional [available fields](#available-fields).
```
GET /api/v4/risk_assessments/23
```

```
{
  "id": 15,
  "uuid": "5eeb0e75-530c-4263-9622-8eab44c38244",
  "user_id": 6,
  "user_image": null,
  "user_short_name": "John D.",
  "eliminated": false,
  "likelihood": {
    "key": "l2",
    "label": "Unlikely",
    "value": 2
  },
  "severity": {
    "key": "s1",
    "label": "Superficial",
    "value": 1
  },
  "risk_level": {
    "score": 2,
    "label": "Low",
    "color": "#18a45a"
  },
  "comment": "Some Comment",
  "created_at": "2022-03-03T14:43:11+13:00"
}
```

### List Risk Assessments

Fetch a paginated list of risk assessments.
Optional params:
- `team_id`: if present filter entries by team_id.
- `report_id`: if present filter entries by report_id.
- `updated_after`: if present only return entries updated after given date. Valid values are dates in ISO8601 format.

```
GET /api/v4/risk_assessments?team_id=2&updated_after=2022-02-28T10:45:35.081+13:00&fields=updated_at
```

```
[
  {
    "id": 15,
    "uuid": "5eeb0e75-530c-4263-9622-8eab44c38244",
    "user_id": 6,
    "user_image": null,
    "user_short_name": "John D.",
    "eliminated": false,
    "likelihood": {
      "key": "l2",
      "label": "Unlikely",
      "value": 2
    },
    "severity": {
      "key": "s1",
      "label": "Superficial",
      "value": 1
    },
    "risk_level": {
      "score": 2,
      "label": "Low",
      "color": "#18a45a"
    },
    "comment": "Some Comment",
    "created_at": "2022-03-03T14:43:11+13:00"
  },
  {
    "id": 16,
    "uuid": "93b0510e-4413-48cf-841f-f7a206573070",
    "user_id": 6,
    "user_image": null,
    "user_short_name": "John D.",
    "eliminated": false,
    "likelihood": {
      "key": "l2",
      "label": "Unlikely",
      "value": 2
    },
    "severity": {
      "key": "s3",
      "label": "Moderate",
      "value": 3
    },
    "risk_level": {
      "score": 6,
      "label": "Moderate",
      "color": "#f49b20"
    },
    "comment": "",
    "created_at": "2022-03-03T15:00:21+13:00"
  },
  ...
]
```

### Available fields
You can use the fields parameter in any of the Risk Assessments API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* **uuid**
* **user_id**
* **user_image**
* **user_short_name**
* **eliminated**
* **likelihood**
* **severity**
* report_uuid
* **risk_level**
* **comment**
* **created_at**
