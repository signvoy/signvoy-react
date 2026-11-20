
# DocumentDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`templateId` | string
`templateVersionId` | string
`ownerId` | string
`name` | string
`status` | string
`routingMode` | string
`message` | string
`emailSubject` | string
`createdAt` | number
`sentAt` | number
`completedAt` | number
`voidedAt` | number
`expiresAt` | number
`documentHash` | string
`certifiedAt` | number
`reminderEnabled` | boolean
`reminderIntervalDays` | number
`reminderMaxCount` | number
`reminderCount` | number
`lastReminderAt` | number
`recipients` | [Array&lt;DocumentRecipientDto&gt;](DocumentRecipientDto.md)
`sendBlockers` | [Array&lt;DocumentDtoSendBlockersInner&gt;](DocumentDtoSendBlockersInner.md)

## Example

```typescript
import type { DocumentDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "templateId": null,
  "templateVersionId": null,
  "ownerId": null,
  "name": null,
  "status": null,
  "routingMode": null,
  "message": null,
  "emailSubject": null,
  "createdAt": null,
  "sentAt": null,
  "completedAt": null,
  "voidedAt": null,
  "expiresAt": null,
  "documentHash": null,
  "certifiedAt": null,
  "reminderEnabled": null,
  "reminderIntervalDays": null,
  "reminderMaxCount": null,
  "reminderCount": null,
  "lastReminderAt": null,
  "recipients": null,
  "sendBlockers": null,
} satisfies DocumentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


