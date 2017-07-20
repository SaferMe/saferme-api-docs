## Alert Areas API
With Alert Areas api V4 you can:

- [List Alert Areas](#list-alert-areas)
- [Create Alert Area](#create-alert-area)
- [Fetch Alert Area](#fetch-alert-area)
- [Update Alert Area](#update-alert-area)
- [Delete Alert Area](#delete-alert-area)

### List Alert Areas

```
GET /api/v4/alert_areas
```

```
[
  {
    "id": 11,
    "shape_type": "circle",
    "radius": 1660,
    "area": "POINT (174.737 -41.287306)",
    "latitude": -41.2873,
    "longitude": 174.737
  },
  {
    "id": 12,
    "shape_type": "poly",
    "radius": null,
    "area": "POLYGON ((174.7639 -41.2701, 174.7778 -41.2584, 174.785 -41.2798, 174.7639 -41.270130))",
    "latitude": -41.269129,
    "longitude": 174.77479
  },
  ...
```

### Create Alert Area

```
POST /api/v4/alert_areas

{
  "alert_area": {
    "area": "POINT(174.344 -44.876543)",
    "radius": 200
  }
}
```

### Fetch Alert Area

```
GET /api/v4/alert_areas/14
```
```
{
  "alert_area": {
    "id": 12,
    "shape_type": "poly",
    "radius": null,
    "area": "POLYGON ((174.7639 -41.2701, 174.7778 -41.2584, 174.785 -41.2798, 174.7639 -41.270130))",
    "latitude": -41.269129,
    "longitude": 174.77479
  }
}
```

### Update Alert Area

```
PATCH /api/v4/alert_areas/14

{
  "alert_area": {
    "area": "POLYGON((40 40, 20 45, 45 30, 40 40))",
    "radius": nil
  }
}
```

```
204 No Content
```

### Delete Alert Area

```
DELETE /api/v4/alert_areas/14
```

```
204 No Content
```
