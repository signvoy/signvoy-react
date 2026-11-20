
# AuditEventDto


## Properties

Name | Type
------------ | -------------
`id` | string
`documentId` | string
`documentRecipientId` | string
`type` | string
`actorName` | string
`actorEmail` | string
`apiKeyId` | string
`apiKeyName` | string
`ipAddress` | string
`userAgent` | string
`metadata` | { [key: string]: any; }
`createdAt` | Date

## Example

```typescript
import type { AuditEventDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "documentId": null,
  "documentRecipientId": null,
  "type": signed,
  "actorName": null,
  "actorEmail": null,
  "apiKeyId": null,
  "apiKeyName": null,
  "ipAddress": null,
  "userAgent": null,
  "metadata": null,
  "createdAt": null,
} satisfies AuditEventDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditEventDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


