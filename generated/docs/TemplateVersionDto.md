
# TemplateVersionDto


## Properties

Name | Type
------------ | -------------
`id` | string
`templateId` | string
`version` | number
`status` | string
`fileName` | string
`pageCount` | number
`createdAt` | number
`publishedAt` | number
`publishedBy` | string
`pdfUrl` | string

## Example

```typescript
import type { TemplateVersionDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "templateId": null,
  "version": null,
  "status": null,
  "fileName": null,
  "pageCount": null,
  "createdAt": null,
  "publishedAt": null,
  "publishedBy": null,
  "pdfUrl": null,
} satisfies TemplateVersionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemplateVersionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


