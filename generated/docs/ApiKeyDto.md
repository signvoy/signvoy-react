
# ApiKeyDto


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`prefix` | string
`last4` | string
`lastUsedAt` | Date
`expiresAt` | Date
`revoked` | boolean
`createdAt` | Date

## Example

```typescript
import type { ApiKeyDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "prefix": sk_live_x7Kf9aB2,
  "last4": a1b2,
  "lastUsedAt": null,
  "expiresAt": null,
  "revoked": null,
  "createdAt": null,
} satisfies ApiKeyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


