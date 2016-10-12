{
  // This is the currently recommended format accepted by the V4 Reports API.
  
  "account_id": 123, // required
  
  // location or address are alternatively required: you must provide at least one of them
  "location": { 
    "latitude": 12,
    "longitude": 34.56,
  },
  "address": "123 Somewhere rd. In the World",
    
  "report_state_id": 123 // optional and only available on update
  
  // Description and category_id fields:
  // They have their update-ability controlled by custom form fields like the other custom fields.
  // In fact they will also have a alternative field key associated that will work as you where accessing them directly.
  "description": 'asdfg',
  "category_id": 22,
  
  // Custom fields:
  // They have their key using the following format and might accept:
  // strings, numbers, arrays of strings and array of numbers.
  "f_1_1_1": 'custom',
  "f_1_1_2": 4,
  "f_1_1_3": ['1','2','3'],
  "f_1_1_4": [1,2,3],

  // Integrated forms
  // those fields are plugged in from extensions added to the account.
  // Impac, for example, will have those extra fields.
  "integrated_forms": {
      "impac_form": {
        "event_type_id": 234, 
        "category_id": 345,
      }
    }
  }
}