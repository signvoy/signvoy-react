
# CreateEmbedSessionDto


## Properties

Name | Type
------------ | -------------
`documentId` | string
`documentRecipientId` | string
`expiresInSeconds` | number

## Example

```typescript
import type { CreateEmbedSessionDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "documentId": null,
  "documentRecipientId": null,
  "expiresInSeconds": null,
} satisfies CreateEmbedSessionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEmbedSessionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


