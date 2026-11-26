
# UpdateIntegrationBindingDto


## Properties

Name | Type
------------ | -------------
`events` | Array&lt;string&gt;
`config` | { [key: string]: any; }
`enabled` | boolean

## Example

```typescript
import type { UpdateIntegrationBindingDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "events": null,
  "config": null,
  "enabled": null,
} satisfies UpdateIntegrationBindingDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateIntegrationBindingDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


