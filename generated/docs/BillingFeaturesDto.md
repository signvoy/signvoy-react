
# BillingFeaturesDto


## Properties

Name | Type
------------ | -------------
`customBranding` | boolean
`customEmailSender` | boolean
`sharedTemplates` | boolean
`workspaceWideVisibility` | boolean

## Example

```typescript
import type { BillingFeaturesDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "customBranding": null,
  "customEmailSender": null,
  "sharedTemplates": null,
  "workspaceWideVisibility": null,
} satisfies BillingFeaturesDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingFeaturesDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


