
# SubmitSigningDto


## Properties

Name | Type
------------ | -------------
`values` | object
`signerName` | string
`signerEmail` | string
`consentAcceptedAt` | number

## Example

```typescript
import type { SubmitSigningDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "values": {"field-1":"data:image/png;base64,iVBORw0KGgoAAAANS...","field-2":"John Doe","field-3":"2025-05-13"},
  "signerName": John Doe,
  "signerEmail": john.doe@example.com,
  "consentAcceptedAt": 1715607600000,
} satisfies SubmitSigningDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitSigningDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


