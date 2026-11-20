
# DeclineDto


## Properties

Name | Type
------------ | -------------
`reason` | string

## Example

```typescript
import type { DeclineDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "reason": I need more time to review,
} satisfies DeclineDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeclineDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


