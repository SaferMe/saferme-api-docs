## Shapes API

### List shapes
```
GET /api/v4/shapes?fields=geom,metadata
```

```
[  
  {  
    "id": 1,
    "branded_app_id": 1,
    "geom":"LINESTREAM(0 0, 1 2)",
    "metadata": {
      "color": "#ffff00"
    }
  },
  {  
    "id": 2,
    "branded_app_id": 1,
    "geom":"LINESTREAM(0 13, 14 12)",
    "metadata": {
      "color": "#ff0000"
    }
  }
  ...
]
```
