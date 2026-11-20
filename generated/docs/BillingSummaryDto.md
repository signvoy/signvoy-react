
# BillingSummaryDto


## Properties

Name | Type
------------ | -------------
`plan` | string
`effectivePlan` | string
`status` | string
`interval` | string
`cancelAtPeriodEnd` | boolean
`currentPeriodEnd` | Date
`hasBillingHistory` | boolean
`seats` | [BillingSeatsDto](BillingSeatsDto.md)
`documents` | [BillingDocumentsDto](BillingDocumentsDto.md)
`workspaces` | [BillingWorkspacesDto](BillingWorkspacesDto.md)
`features` | [BillingFeaturesDto](BillingFeaturesDto.md)
`extraSeatMonthlyUsd` | number
`extraSeatAnnualUsd` | number
`availablePlans` | [Array&lt;BillingPlanOptionDto&gt;](BillingPlanOptionDto.md)

## Example

```typescript
import type { BillingSummaryDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "plan": pro,
  "effectivePlan": pro,
  "status": active,
  "interval": month,
  "cancelAtPeriodEnd": null,
  "currentPeriodEnd": null,
  "hasBillingHistory": null,
  "seats": null,
  "documents": null,
  "workspaces": null,
  "features": null,
  "extraSeatMonthlyUsd": 8,
  "extraSeatAnnualUsd": 6,
  "availablePlans": null,
} satisfies BillingSummaryDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingSummaryDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


