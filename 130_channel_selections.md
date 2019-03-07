## Channel Selections API
A non-existent channel_selection has the same effect as a channel_selection where
all `view`, `follow` and `alert` are set to false.
For this reason this api does not include a `create` or `delete` endpoints. The
same result can be achieved by using update api. Just remember that
`channel_selection.id == channel.id` when making requests and give the `channel.id`
when calling update endpoint to address the selection you whant to change.

With Channel Selections api V4 you can:

- [List Channel Selections](#list-channel-selections)
- [Update Channel Selection](#update-channel-selection)

### List Channel Selections
> Note: Channel selection `id` is equals to `channel_id`

```
GET /api/v4/channel_selections
```

```
[
  {
    "id": 1,
    "view": true,
    "follow": true,
    "alert": true
  },
  {
    "id": 1,
    "view": true,
    "follow": false,
    "alert": false
  },
  ...
]
```

### Update Channel Selection
> Note: `channel_selection.id == channel.id`
> Note: By setting all tree options to false the channel selection will be deleted at it will have the same result.

```
PATCH /api/v4/channel_selections/14

{
  "channel_selection": {
    "alert": true,
    "follow": true,
    "view": true
  }
}
```

```
204 No Content
```
