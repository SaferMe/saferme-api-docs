## Categories API
With Report api V4 you can fetch categories.

### List categories of a channel
```
GET /api/v4/channels/:channel_id/categories?fields=id,name,label_name,depth,max_subtree_extra_depth,pin_color,pin_appearance,pin_urls,position,account,parent,children
```

```
[  
  {  
    "id":1,
    "name":"Cleaner streams",
    "label_name":"Main category",
    "depth":0,
    "max_subtree_extra_depth":3,
    "pin_color":"green",
    "pin_appearance":"default",
    "pin_urls":{  
      "at1x":"http://localhost:3000/assets/maps/pins/default/pin-green@1x.png",
      "at2x":"http://localhost:3000/assets/maps/pins/default/pin-green@2x.png",
      "at3x":"http://localhost:3000/assets/maps/pins/default/pin-green@3x.png"
    },
    "position":1,
    "account_id":1,
    "parent_id":null,
    "child_ids":[  
      2
    ]
  },
  {  
    "id":2,
    "name":"Effluent runoff",
    "label_name":"Secondary category",
    "depth":1,
    "max_subtree_extra_depth":2,
    "pin_color":"green",
    "pin_appearance":"default",
    "pin_urls":{  
      "at1x":"http://localhost:3000/assets/maps/pins/default/pin-green@1x.png",
      "at2x":"http://localhost:3000/assets/maps/pins/default/pin-green@2x.png",
      "at3x":"http://localhost:3000/assets/maps/pins/default/pin-green@3x.png"
    },
    "position":1,
    "account_id":1,
    "parent_id":1,
    "child_ids":[  
      3
    ]
  },
  {  
    "id":3,
    "name":"From effluent pond",
    "label_name":"Tertiary category",
    "depth":2,
    "max_subtree_extra_depth":1,
    "pin_color":"green",
    "pin_appearance":"default",
    "pin_urls":{  
      "at1x":"http://localhost:3000/assets/maps/pins/default/pin-green@1x.png",
      "at2x":"http://localhost:3000/assets/maps/pins/default/pin-green@2x.png",
      "at3x":"http://localhost:3000/assets/maps/pins/default/pin-green@3x.png"
    },
    "position":1,
    "account_id":1,
    "parent_id":2,
    "child_ids":[  
    ]
  }
]
```

### Get one category of a channel
```
/api/v4/channels/:channel_id/categories/3
```

```
{  
  "id":3,
  "name":"From effluent pond",
  "label_name":"Tertiary category",
  "depth":2,
  "max_subtree_extra_depth":1,
  "pin_color":"green",
  "pin_appearance":"default",
  "pin_urls":{  
    "at1x":"http://localhost:3000/assets/maps/pins/default/pin-green@1x.png",
    "at2x":"http://localhost:3000/assets/maps/pins/default/pin-green@2x.png",
    "at3x":"http://localhost:3000/assets/maps/pins/default/pin-green@3x.png"
  },
  "position":1,
  "account_id":1,
  "parent_id":2,
  "child_ids":[  
  ]
}
```

### Available category fields
You can use the fields parameter with `List` and `Get` methods of the categories
API. The requested method will respond with the required fields accordingly.
The `id` field is default for `List` method and you have to specify it if you
send the fields parameter. All fields are returned from the `Get` method unless
you specify the fields parameter.

* **id**
* name
* label_name
* depth
* max_subtree_extra_depth
* pin_color
* pin_appearance
* pin_urls
* position
* account
* parent
* children
