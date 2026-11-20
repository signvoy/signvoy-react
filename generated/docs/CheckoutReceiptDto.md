
# CheckoutReceiptDto


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

## Example

```typescript
import type { CheckoutReceiptDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "transactionId": cs_test_a1b2c3,
  "value": 29,
  "currency": USD,
  "plan": team,
  "interval": month,
  "seats": 10,
  "paid": true,
} satisfies CheckoutReceiptDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckoutReceiptDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


