
# AnonymousCheckoutStatusDto


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`value` | number
`currency` | string
`plan` | string
`interval` | string
`seats` | number
`paid` | boolean
`email` | string

## Example

```typescript
import type { AnonymousCheckoutStatusDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "transactionId": cs_test_a1b2c3,
  "value": 29,
  "currency": USD,
  "plan": team,
  "interval": month,
  "seats": 10,
  "paid": true,
  "email": alex@example.com,
} satisfies AnonymousCheckoutStatusDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnonymousCheckoutStatusDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


