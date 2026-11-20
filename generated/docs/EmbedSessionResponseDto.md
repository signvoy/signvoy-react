
# EmbedSessionResponseDto


## Properties

Name | Type
------------ | -------------
`url` | string
`expiresAt` | Date
`documentId` | string
`documentRecipientId` | string

## Example

```typescript
import type { EmbedSessionResponseDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "url": https://signvoy.com/sign/abc123?embed=1,
  "expiresAt": null,
  "documentId": null,
  "documentRecipientId": null,
} satisfies EmbedSessionResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbedSessionResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


