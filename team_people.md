## Team People API
With Team People api V4 you can:

- [Fetch a Team Person](#fetch-a-team-person)
- [Update a Team Person](#update-a-team-person)
- [Response fields](#response-fields)


### Fetch a Team Person
Get a Team Person entry.
> See the optional [response fields](#response-fields).

#### Request
```
GET /api/v4/team_people/cf50c561-39af-4bed-8dfe-1c47682e02f6?fields=-visiting
````
#### Response
```
200 OK
```
```json
{
  "id": 1055,
  "uuid": "cf50c561-39af-4bed-8dfe-1c47682e02f6",
  "user_id": null,
  "team_id": 1054,
  "first_name": "Blake",
  "last_name": "Emmerich",
  "company": "Beahan, Willms and Bogan"
}
```

### Update a Team Person
Updates the allowed fields on one single Team Person. It only updates the fields sent.

##### Input fields for update:
- company: `string`
- first_name: `string`
- last_name: `string`
- email: `string`
- preferred_contact: `string`
- visiting: `string`


#### Request
```
PATCH /api/v4/team_people/cf50c561-39af-4bed-8dfe-1c47682e02f6
Content-Type application/json
```
```json
{
  "team_person": {
    "company": "Nitzsche-Farrell",
    "preferred_contact": "+64226677587"
  }
}
```
#### Response
```json
204 No Content
```


### Response fields
You can use the `fields` query parameter in any of the Team People API endpoints to
configure what fields will be included in the response. All fields in bold are
included by default but you can opt-out of them using the `-` prefix.

- **id**
- **uuid**
- **app_version**
- channel_count
- **company**
- **email**
- **first_name**
- **last_active_at**
- **last_name**
- **preferred_contact**
- **push_notification_enabled**
- report_count
- **role**
- **supervisor_id**
- **team_id**
- **user_id**
- **visiting**

