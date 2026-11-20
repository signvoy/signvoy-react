
# UserDemographicsDto


## Properties

Name | Type
------------ | -------------
`role` | string
`useCases` | Array&lt;string&gt;
`monthlyVolume` | string
`teamSize` | string
`referralSource` | string
`previousTool` | string

## Example

```typescript
import type { UserDemographicsDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "useCases": null,
  "monthlyVolume": null,
  "teamSize": null,
  "referralSource": null,
  "previousTool": null,
} satisfies UserDemographicsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserDemographicsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


