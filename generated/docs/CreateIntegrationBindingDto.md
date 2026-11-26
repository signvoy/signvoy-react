
# CreateIntegrationBindingDto


## Properties

Name | Type
------------ | -------------
`connectionId` | string
`action` | string
`events` | Array&lt;string&gt;
`config` | { [key: string]: any; }
`enabled` | boolean

## Example

```typescript
import type { CreateIntegrationBindingDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "action": null,
  "events": null,
  "config": null,
  "enabled": null,
} satisfies CreateIntegrationBindingDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateIntegrationBindingDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


