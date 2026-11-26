
# IntegrationJobDto


## Properties

Name | Type
------------ | -------------
`id` | string
`bindingId` | string
`action` | string
`eventType` | string
`documentId` | string
`documentName` | string
`status` | string
`attempts` | number
`lastError` | string
`resultUrl` | string
`createdAt` | Date
`completedAt` | Date

## Example

```typescript
import type { IntegrationJobDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "bindingId": null,
  "action": null,
  "eventType": null,
  "documentId": null,
  "documentName": null,
  "status": null,
  "attempts": null,
  "lastError": null,
  "resultUrl": null,
  "createdAt": null,
  "completedAt": null,
} satisfies IntegrationJobDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationJobDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


