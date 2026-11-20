
# CreateWebhookDto


## Properties

Name | Type
------------ | -------------
`url` | string
`description` | string
`enabledEvents` | Array&lt;string&gt;

## Example

```typescript
import type { CreateWebhookDto } from '@signvoy/react'

// TODO: Update the object below with actual values
const example = {
  "url": https://example.com/webhooks/signvoy,
  "description": Production webhook,
  "enabledEvents": ["document.completed","document.declined"],
} satisfies CreateWebhookDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhookDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


