
# UpdatePreferencesDto


## Properties

Name | Type
------------ | -------------
`workspaceId` | object
`changes` | [Array&lt;PreferenceChangeDto&gt;](PreferenceChangeDto.md)

## Example

```typescript
import type { UpdatePreferencesDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "workspaceId": null,
  "changes": null,
} satisfies UpdatePreferencesDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePreferencesDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


