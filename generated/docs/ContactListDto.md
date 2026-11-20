
# ContactListDto


## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;ContactDto&gt;](ContactDto.md)
`total` | number
`hasMore` | boolean

## Example

```typescript
import type { ContactListDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "results": null,
  "total": 143,
  "hasMore": true,
} satisfies ContactListDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactListDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


