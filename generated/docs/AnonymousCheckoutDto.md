
# AnonymousCheckoutDto


## Properties

Name | Type
------------ | -------------
`plan` | string
`interval` | string
`seats` | number

## Example

```typescript
import type { AnonymousCheckoutDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "plan": team,
  "interval": month,
  "seats": 10,
} satisfies AnonymousCheckoutDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnonymousCheckoutDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


