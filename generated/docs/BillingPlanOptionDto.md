
# BillingPlanOptionDto


## Properties

Name | Type
------------ | -------------
`plan` | string
`monthlyUsd` | number
`annualMonthlyUsd` | number
`includedSeats` | number

## Example

```typescript
import type { BillingPlanOptionDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "plan": pro,
  "monthlyUsd": 10,
  "annualMonthlyUsd": 8,
  "includedSeats": 1,
} satisfies BillingPlanOptionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingPlanOptionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


