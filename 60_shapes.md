## Shapes API
With Shapes api V4 you can fetch shapes for a Branded App. The branded app is selected by providing the required header `X-AppID`.

### List shapes
```
GET /api/v4/shapes?fields=branded_app
```

```
[  
  {  
    "id": 1,
    "branded_app_id": 1,
    "geom":"LINESTRING(0 0, 1 2)",
    "metadata": {
      "color": "#ffff00"
    }
  },
  {
    "id": 2,
    "branded_app_id": 1,
    "geom":"LINESTRING(0 13, 14 12)",
    "metadata": {
      "color": "#ff0000"
    }
  }
  ...
]
```

### Create a Shape
The created shape will be associated with the Branded App specified with header
`X-AppID`.

```
POST /api/v4/shapes

{
  "shape": {  
    "geom":"LINESTRING(0 0, 1 21)",
    "metadata": {
      "color": "#ffffaa"
    }
  }
}
```

```
{
  {  
    "id": 3,
    "geom":"LINESTRING(0 0, 1 21)",
    "metadata": {
      "color": "#ffffaa"
    }
  }
}
```

### Available fields
You can use the fields parameter in any of the Shapes API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* branded_app
* **metadata**
* **geom**
