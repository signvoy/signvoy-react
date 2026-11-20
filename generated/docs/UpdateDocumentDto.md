
# UpdateDocumentDto


## Properties

Name | Type
------------ | -------------
`name` | string
`message` | string
`emailSubject` | string
`routingMode` | string
`reminders` | [ReminderSettingsDto](ReminderSettingsDto.md)
`expiry` | [ExpirySettingsDto](ExpirySettingsDto.md)
`recipients` | [Array&lt;CreateDocumentRecipientDto&gt;](CreateDocumentRecipientDto.md)

## Example

```typescript
import type { UpdateDocumentDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "name": Q4 2025 Contract Agreement,
  "message": Please review and sign this document at your earliest convenience.,
  "emailSubject": Please sign: Acme MSA,
  "routingMode": null,
  "reminders": null,
  "expiry": null,
  "recipients": null,
} satisfies UpdateDocumentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDocumentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


