
# NotificationDefinitionDto


## Properties

Name | Type
------------ | -------------
`type` | string
`category` | string
`channels` | object
`locked` | boolean
`labelKey` | string
`descriptionKey` | string

## Example

```typescript
import type { NotificationDefinitionDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "category": null,
  "channels": {"email":{"default":true},"in_app":{"default":true}},
  "locked": null,
  "labelKey": null,
  "descriptionKey": null,
} satisfies NotificationDefinitionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationDefinitionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


