
# InviteMemberDto


## Properties

Name | Type
------------ | -------------
`email` | string
`role` | string

## Example

```typescript
import type { InviteMemberDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "email": newmember@example.com,
  "role": member,
} satisfies InviteMemberDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteMemberDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


