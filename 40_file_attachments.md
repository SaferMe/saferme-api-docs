## File Attachments API
With Report api V4 you can create file attachments.

### Attachments creation workflow
1. Get a upload authorization
1. Upload file using data from **upload authorization** step
1. Create file attachment using key from response of **upload file** step.

### Get a upload authorization
You must provide a `content_type` param.
```
GET /api/v4/file_attachments/upload_authorization?content_type=image/png
```

```
{  
  "upload_authorization":{  
    "method":"POST",
    "key":"async_uploads/a251225f-308e-49f5-a064-7d0c54894666",
    "key_prefix":"async_uploads/a251225f-308e-49f5-a064-7d0c54894666/",
    "url":"https://staging-thundermaps-uploads.s3.eu-central-1.amazonaws.com",
    "fields":{  
      "key":"async_uploads/a251225f-308e-49f5-a064-7d0c54894666",
      "success_action_status":"201",
      "Content-Type": "image/png"
      "policy":"eyJleHBpcmF0aW9uIjoiMjAxNi0xMC0xNFQwMDozNzozNVoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzdGFnaW5nLXRodW5kZXJtYXBzLXVwbG9hZHMifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImFzeW5jX3VwbG9hZHMvYTI1MTIyNWYtMzA4ZS00OWY1LWEwNjQtN2QwYzU0ODk0NjY2Il0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCIiXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotY3JlZGVudGlhbCI6IkFLSUFKNFFaQ0NXVEhDUVlNS0xBLzIwMTYxMDEzL2V1LWNlbnRyYWwtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDE2MTAxM1QyMzM3MzVaIn1dfQ==",
      "x-amz-credential":"AKIAJ4QZCCWTHCQYMKLA/20161013/eu-central-1/s3/aws4_request",
      "x-amz-algorithm":"AWS4-HMAC-SHA256",
      "x-amz-date":"20161013T233735Z",
      "x-amz-signature":"4903be8f334ca3a6cb4b43ff3aecd98b86bf8050e2559ec5c3a7c544e9b21687"
    },
    "required_fields":[  
      "Content-Type",
      "file"
    ]
  }
}
```
> **Notes:**
> - Bear in mind that not every content_type is allowed.

### Upload a file
Differently from the rest of this document a `curl` command is used as an
example here to create a practical example of what request should look like.
The parameters bellow wll be filled using the parameters from the response of
the upload authorization above.

```
curl -i \
'https://staging-thundermaps-uploads.s3.eu-central-1.amazonaws.com' \
-F 'key=async_uploads/a251225f-308e-49f5-a064-7d0c54894666/${filename}' \
-F 'success_action_status=201' \
-F 'Content-Type=image/png' \
-F 'policy=eyJleHBpcmF0aW9uIjoiMjAxNi0xMC0xNFQwMDozNzozNVoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzdGFnaW5nLXRodW5kZXJtYXBzLXVwbG9hZHMifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImFzeW5jX3VwbG9hZHMvYTI1MTIyNWYtMzA4ZS00OWY1LWEwNjQtN2QwYzU0ODk0NjY2Il0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCIiXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotY3JlZGVudGlhbCI6IkFLSUFKNFFaQ0NXVEhDUVlNS0xBLzIwMTYxMDEzL2V1LWNlbnRyYWwtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDE2MTAxM1QyMzM3MzVaIn1dfQ==' \
-F 'x-amz-credential=AKIAJ4QZCCWTHCQYMKLA/20161013/eu-central-1/s3/aws4_request' \
-F 'x-amz-algorithm=AWS4-HMAC-SHA256' \
-F 'x-amz-date=20161013T233735Z' \
-F 'x-amz-signature=4903be8f334ca3a6cb4b43ff3aecd98b86bf8050e2559ec5c3a7c544e9b21687' \
-F 'file=@/path/to/picture.png;filename="picture.png"' \
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PostResponse>
    <Location>https://staging-thundermaps-uploads.s3.eu-central-1.amazonaws.com/async_uploads%2Fa251225f-308e-49f5-a064-7d0c54894666%2Fpicture.png</Location>
    <Bucket>staging-thundermaps-uploads</Bucket>
    <Key>async_uploads/a251225f-308e-49f5-a064-7d0c54894666/picture.png</Key>
    <ETag>"eae75ff8500185245d286dce1f8b745e"</ETag>
</PostResponse>
```
> **Notes:**
> - The key provided can be used as is from the authorization but be aware the
> filename will be lost and set to the provided key.
> - Using the `${filename}` placeholder will make the filename be set from the
> filename sent on the file field. The filename can be arbitrarily set by
> replacing appending it to `key_prefix` and providing this result on the key
> field.
> - The file field **must** be the last field from the request.

### Create a file attachment
The content from the key tag from the response of the file upload will be used
here as a parameter.
```
POST /api/v4/file_attachments

{
  "file_attachment": {
    key: "async_uploads/a251225f-308e-49f5-a064-7d0c54894666/picture.png"
  }
}
```

```
{
  "id": 21,
  "original_url": "https://host.com/where/the/file/can/be/found.ext",
  "filename": null,
  "style_url": {
  }
}
```

> **Notes:**
> - The id returned here will be used when creating or updating a report.
> - This endpoint might return 202 or 200 depending whether or not the file has had its initial processig done.
> - TODO: explain better the 202 status and use of it. Add docs for /file/attachment/:id endpoint.
