
# NotificationDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`userId` | string
`type` | string
`title` | string
`body` | string
`documentId` | string
`data` | { [key: string]: any; }
`readAt` | Date
`createdAt` | Date

## Example

```typescript
import type { NotificationDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "userId": null,
  "type": null,
  "title": null,
  "body": null,
  "documentId": null,
  "data": null,
  "readAt": null,
  "createdAt": null,
} satisfies NotificationDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


