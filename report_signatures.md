## Report Signatures API
With Report Signatures api V4 you can add signatures to reports.

### Create a report signature
Follow the steps on [File Attachments API](file_attachments.md) to get a
`attachment_id` to use here. To set a `name` for a signature send it as a
filename on the File Attachment creation step (no extension is required for the
filename).

```
POST /api/v4/reports/42/signatures

{
  "report_signature": {
    "attachment_id": 11,
    "signee_name": '-'
  }
}
```

```
{
  "id": 1,
  "original_url": "https://s3-ap-southeast-2.amazonaws.com/to-image.",
  "filename": "data",
  "style_url":{}
}
```
