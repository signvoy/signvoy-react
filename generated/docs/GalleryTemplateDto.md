
# GalleryTemplateDto


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`name` | string
`description` | string
`category` | string
`tags` | Array&lt;string&gt;
`fileName` | string
`pageCount` | number
`planTier` | string
`sortOrder` | number
`sourceKind` | string
`recipients` | [Array&lt;GalleryRecipientDto&gt;](GalleryRecipientDto.md)
`fieldCount` | number
`previewUrl` | string
`content` | object

## Example

```typescript
import type { GalleryTemplateDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "name": null,
  "description": null,
  "category": null,
  "tags": null,
  "fileName": null,
  "pageCount": null,
  "planTier": null,
  "sortOrder": null,
  "sourceKind": null,
  "recipients": null,
  "fieldCount": null,
  "previewUrl": null,
  "content": null,
} satisfies GalleryTemplateDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GalleryTemplateDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


