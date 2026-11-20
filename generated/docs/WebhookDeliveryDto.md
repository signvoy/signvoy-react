
# WebhookDeliveryDto


## Properties

Name | Type
------------ | -------------
`id` | string
`endpointId` | string
`eventType` | string
`status` | string
`responseStatus` | number
`responseBody` | object
`attempts` | number
`lastAttemptAt` | Date
`createdAt` | Date

## Example

```typescript
import type { WebhookDeliveryDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "endpointId": null,
  "eventType": document.completed,
  "status": null,
  "responseStatus": null,
  "responseBody": null,
  "attempts": null,
  "lastAttemptAt": null,
  "createdAt": null,
} satisfies WebhookDeliveryDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookDeliveryDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


