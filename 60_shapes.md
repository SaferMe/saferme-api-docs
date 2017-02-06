## Shapes API
With Shapes api V4 you can:

- [Create a Shape](#create-a-shape)
- [Fetch a Shape](#fetch-a-shape)
- [List Shapes](#list-shapes)
- [Delete a Shape](#delete-a-shape)
- [Available fields](#available-shape-fields)

### Create a Shape
The created shape will be associated with the Branded App specified with header
`X-AppID`.

```
POST /api/v4/shapes

{
  "shape": {
    "geom":"LINESTRING(0 0, 1 21)",
    "metadata": {
      "display": [
        'line 1',
        ...
      ],
      "raw": {
        "info": 'here',
        ...
      },
      ...
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
      "display": [
        'line 1',
        ...
      ],
      "raw": {
        "info": 'here',
        ...
      }
    }
  }
}
```

### Fetch a shape

Get a shape. See the optional [available fields](#available-shape-fields).
```
GET /api/v4/shapes/14
```

```
{
  "id": 14,
  "geom":"LINESTRING(0 0, 1 21)"
}
```

### List shapes

Fetch a paginated list of shapes. If provided a shape_search_id param the shapes
will be filtered, and ordered accordingly with the related shape search (See
[Shape searches](#shape-searches) for details about searching for shapes).
The list of shapes will be filtered by current branded app if no shape_search_id
if provided. The current branded app is set using the required header `X-AppID`.

```
GET /api/v4/shapes?fields=branded_app,cache_key,highlight_color,metadata,normal_color
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
  ...
]
```

### Delete a shape
The branded app for the identified shape is required to match Branded App
specified with header `X-AppID`.

```
DELETE /api/v4/shapes/14
```

```
204 No Content
```

### Available shape fields
You can use the fields parameter in any of the Shapes API methods. The requested
method will respond with the required fields accordingly. Some fields are
included by default but you can opt-out from them on request.

* **id**
* cache_key
* **geom**
* highlight_color
* metadata
* normal_color
