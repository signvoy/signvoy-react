
# UpdateUserSignatureDto


## Properties

Name | Type
------------ | -------------
`isDefault` | boolean
`source` | string
`dataUrl` | string
`typedName` | string
`fontKey` | string

## Example

```typescript
import type { UpdateUserSignatureDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "isDefault": null,
  "source": null,
  "dataUrl": null,
  "typedName": null,
  "fontKey": null,
} satisfies UpdateUserSignatureDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateUserSignatureDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


