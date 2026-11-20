
# UserSignatureDto


## Properties

Name | Type
------------ | -------------
`id` | string
`source` | string
`dataUrl` | string
`typedName` | string
`fontKey` | string
`isDefault` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { UserSignatureDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "source": null,
  "dataUrl": data:image/png;base64,iVBORw0KGgo...,
  "typedName": null,
  "fontKey": null,
  "isDefault": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies UserSignatureDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserSignatureDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


