## Analytics API
With analytics api V4 you can get insights and metrics about the reports under specified criteria.

All api endpoints require 3 parameters:
* channel_id (integer)
* start_date (ISO8601 formatted timestamp)
* end_date (ISO8601 formatted timestamp)

### Reports per state API
```
GET /api/v4/analytics/reports_per_state?channel_id=1&start_date=2016-01-01T00:00:00Z&end_date=2016-11-11T00:00:00Z
```

```
[
  {
    id: 1,
    name: 'state name',
    account_id: 1,
    report_count: 23
  },
  ...
]
```

### Reports over time API

```
GET /api/v4/analytics/reports_over_time?channel_id=1&start_date=2016-01-01T00:00:00Z&end_date=2016-11-11T00:00:00Z
```

```
[
  {
    "account_id": 1,
    "datetime_range_start": "2016-11-07T00:00:00.000Z",
    "report_count": 2,
    "datetime_range_width": "week"
  },
  ...
]
```

### Reports per week day API

```
GET /api/v4/analytics/reports_per_week_day?channel_id=1&start_date=2016-01-01T00:00:00Z&end_date=2016-11-11T00:00:00Z
```

```
[
  {
    "account_id": 1,
    "dow": 1,
    "report_count": 6
  },
  ...
]
```

### Reports Read API

```
GET /api/v4/analytics/reports_read?channel_id=1&start_date=2016-01-01T00:00:00Z&end_date=2016-11-11T00:00:00Z&fields=total_reads,unique_reads,report_readers,reports_seen
```

```
{
  total_reads: 10,
  reports_seen: 8,
  report_readers: 3,
  unique_reads: 5,
}
```

#### Available Fields
Only `total_reads` is returned if none is selected. Otherwise only what has been asked for will be returned.

* **total_reads**
* unique_reads
* report_readers
* reports_seen
