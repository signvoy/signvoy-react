
# UpdateContactDto


## Properties

Name | Type
------------ | -------------
`email` | string
`name` | string
`company` | string
`jobTitle` | string
`phone` | string
`notes` | string
`archived` | boolean

## Example

```typescript
import type { UpdateContactDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "email": priya@acme.com,
  "name": null,
  "company": null,
  "jobTitle": null,
  "phone": null,
  "notes": null,
  "archived": null,
} satisfies UpdateContactDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateContactDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


