
# SaveDraftDto


## Properties

Name | Type
------------ | -------------
`values` | object

## Example

```typescript
import type { SaveDraftDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "values": {"field-1":"John Doe","field-2":"john@example.com","field-3":true},
} satisfies SaveDraftDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaveDraftDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


