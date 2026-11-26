
# IntegrationProviderInfoDto


## Properties

Name | Type
------------ | -------------
`provider` | string
`configured` | boolean
`connection` | [IntegrationConnectionDto](IntegrationConnectionDto.md)
`bindings` | [Array&lt;IntegrationBindingDto&gt;](IntegrationBindingDto.md)
`waitingJobCount` | number
`folderPicker` | boolean

## Example

```typescript
import type { IntegrationProviderInfoDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "configured": null,
  "connection": null,
  "bindings": null,
  "waitingJobCount": null,
  "folderPicker": null,
} satisfies IntegrationProviderInfoDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationProviderInfoDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


