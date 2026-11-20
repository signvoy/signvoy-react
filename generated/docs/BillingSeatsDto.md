
# BillingSeatsDto


## Properties

Name | Type
------------ | -------------
`included` | number
`purchased` | number
`allowed` | number
`used` | number

## Example

```typescript
import type { BillingSeatsDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "included": 3,
  "purchased": 1,
  "allowed": 4,
  "used": 4,
} satisfies BillingSeatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingSeatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


