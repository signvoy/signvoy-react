
# CreateDocumentRecipientDto


## Properties

Name | Type
------------ | -------------
`roleKey` | string
`name` | string
`email` | string
`type` | string
`order` | number

## Example

```typescript
import type { CreateDocumentRecipientDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "roleKey": buyer,
  "name": John Doe,
  "email": john.doe@example.com,
  "type": null,
  "order": 2,
} satisfies CreateDocumentRecipientDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDocumentRecipientDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


