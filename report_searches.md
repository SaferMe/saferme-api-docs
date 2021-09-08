## Report Searches API
With Report Searches api V4 you can:

- [Fetch a report search results](#fetch-a-report-search-results)


### Fetch a report search results

As a report search is performed asynchronously when you call this api you may
receive different status codes depending on the state of the requested search.

List of status codes and their respective meaning related to report search.
- `202 Accepted` - Search not finished, try again after a few seconds.
- `500 Internal Server Error` - Search failed.
- `200 OK` - Search successfully finished. Results ready and possibly inlined.

Bellow you can see an example of a request and its result when the search is ready to be read.
```
GET /api/v4/report_searches/12345678
```

```
[
  {
    "id": 5454545,
    "cache_key": "fdf84f8aaf78abc34ce7b61e309870d7",
    "pin": "https://api1.prod.safer.me/assets/maps/pins/fire/pin-red@2x.png",
    "channel_id":725,
    "appearance":"normal",
    "latitude":-40.94895,
    "longitude":175.66298
  },
  ...
]
```

- `id` id of the report
- `cache_key` hash for the current state of the report: it is updated when the report is changed.
- `pin` image to represent the report pin on a map
- `channel_id` refers to the channel used to make this report
- `appearance` reflects the current visibility state of the report pin in a map
- `latitude` geographic coordinate component for the report
- `longitude` geographic coordinate component for the report
