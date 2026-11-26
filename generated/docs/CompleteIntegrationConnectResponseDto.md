
# CompleteIntegrationConnectResponseDto


## Properties

Name | Type
------------ | -------------
`provider` | string
`workspaceId` | string
`returnTo` | string
`connection` | [IntegrationConnectionDto](IntegrationConnectionDto.md)
`createdBinding` | [IntegrationBindingDto](IntegrationBindingDto.md)

## Example

```typescript
import type { CompleteIntegrationConnectResponseDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "workspaceId": null,
  "returnTo": null,
  "connection": null,
  "createdBinding": null,
} satisfies CompleteIntegrationConnectResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompleteIntegrationConnectResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


