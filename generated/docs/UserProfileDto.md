
# UserProfileDto


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`name` | string
`firstName` | string
`lastName` | string
`imageUrl` | string
`phone` | string
`demographics` | [UserDemographicsDto](UserDemographicsDto.md)
`onboardingStep` | number
`onboardingCompletedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { UserProfileDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "name": null,
  "firstName": null,
  "lastName": null,
  "imageUrl": null,
  "phone": null,
  "demographics": null,
  "onboardingStep": null,
  "onboardingCompletedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies UserProfileDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfileDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


