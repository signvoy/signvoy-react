
# UpdateUserDto


## Properties

Name | Type
------------ | -------------
`demographics` | [UserDemographicsDto](UserDemographicsDto.md)
`phone` | string
`onboardingStep` | number
`onboardingCompleted` | boolean

## Example

```typescript
import type { UpdateUserDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "demographics": null,
  "phone": null,
  "onboardingStep": null,
  "onboardingCompleted": null,
} satisfies UpdateUserDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateUserDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


