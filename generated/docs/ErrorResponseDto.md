
# ErrorResponseDto


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`timestamp` | Date
`path` | string
`message` | [ErrorResponseDtoMessage](ErrorResponseDtoMessage.md)

## Example

```typescript
import type { ErrorResponseDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "statusCode": 400,
  "timestamp": 2026-07-03T12:34:56Z,
  "path": /v1/documents,
  "message": null,
} satisfies ErrorResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


