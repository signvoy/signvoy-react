
# CreateContactDto


## Properties

Name | Type
------------ | -------------
`email` | string
`name` | string
`company` | string
`jobTitle` | string
`phone` | string
`notes` | string

## Example

```typescript
import type { CreateContactDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "email": priya@acme.com,
  "name": Priya Raman,
  "company": Acme Inc.,
  "jobTitle": Head of Legal,
  "phone": +1 555 0123,
  "notes": null,
} satisfies CreateContactDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateContactDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


