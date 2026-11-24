
# EffectivePreferenceDto


## Properties

Name | Type
------------ | -------------
`type` | string
`channel` | string
`enabled` | boolean
`source` | string
`locked` | boolean

## Example

```typescript
import type { EffectivePreferenceDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "channel": null,
  "enabled": null,
  "source": null,
  "locked": null,
} satisfies EffectivePreferenceDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EffectivePreferenceDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


