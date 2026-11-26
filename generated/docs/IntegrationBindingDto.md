
# IntegrationBindingDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`connectionId` | string
`action` | string
`events` | Array&lt;string&gt;
`config` | { [key: string]: any; }
`enabled` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { IntegrationBindingDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "connectionId": null,
  "action": null,
  "events": null,
  "config": null,
  "enabled": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies IntegrationBindingDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationBindingDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


