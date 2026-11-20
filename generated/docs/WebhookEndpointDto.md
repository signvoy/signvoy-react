
# WebhookEndpointDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`url` | string
`description` | object
`enabledEvents` | Array&lt;string&gt;
`status` | string
`consecutiveFailures` | number
`disabledAt` | Date
`successRate` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { WebhookEndpointDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "url": null,
  "description": null,
  "enabledEvents": ["document.completed","document.declined"],
  "status": null,
  "consecutiveFailures": null,
  "disabledAt": null,
  "successRate": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies WebhookEndpointDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEndpointDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


