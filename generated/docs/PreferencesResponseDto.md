
# PreferencesResponseDto


## Properties

Name | Type
------------ | -------------
`workspaceId` | string
`channels` | Array&lt;string&gt;
`catalog` | [Array&lt;NotificationDefinitionDto&gt;](NotificationDefinitionDto.md)
`preferences` | [Array&lt;EffectivePreferenceDto&gt;](EffectivePreferenceDto.md)

## Example

```typescript
import type { PreferencesResponseDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "workspaceId": null,
  "channels": null,
  "catalog": null,
  "preferences": null,
} satisfies PreferencesResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PreferencesResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


