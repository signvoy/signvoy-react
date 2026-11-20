
# GalleryRecipientDto


## Properties

Name | Type
------------ | -------------
`key` | string
`name` | string
`color` | string
`order` | number

## Example

```typescript
import type { GalleryRecipientDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "name": null,
  "color": null,
  "order": null,
} satisfies GalleryRecipientDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GalleryRecipientDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


