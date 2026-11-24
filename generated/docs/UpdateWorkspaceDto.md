
# UpdateWorkspaceDto


## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`brandName` | string
`brandColor` | string

## Example

```typescript
import type { UpdateWorkspaceDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "name": Updated Corporation Name,
  "slug": updated-corp,
  "brandName": Acme Inc.,
  "brandColor": #214e92,
} satisfies UpdateWorkspaceDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWorkspaceDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


