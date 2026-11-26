
# IntegrationConnectionDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`provider` | string
`externalAccountLabel` | string
`status` | string
`lastError` | string
`lastErrorAt` | Date
`createdBy` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { IntegrationConnectionDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "provider": null,
  "externalAccountLabel": null,
  "status": null,
  "lastError": null,
  "lastErrorAt": null,
  "createdBy": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies IntegrationConnectionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationConnectionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


