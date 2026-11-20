
# ContactDto


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`name` | string
`company` | string
`jobTitle` | string
`phone` | string
`notes` | string
`source` | string
`archivedAt` | Date
`createdBy` | string
`createdByName` | string
`createdByImageUrl` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ContactDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": priya@acme.com,
  "name": Priya Raman,
  "company": Acme Inc.,
  "jobTitle": Head of Legal,
  "phone": +1 555 0123,
  "notes": null,
  "source": null,
  "archivedAt": null,
  "createdBy": null,
  "createdByName": Priya Raman,
  "createdByImageUrl": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ContactDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


