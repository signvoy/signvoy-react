# EmbedApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**embedCreateSession**](EmbedApi.md#embedcreatesession) | **POST** /v1/embed/session | Create an embed session |



## embedCreateSession

> EmbedSessionResponseDto embedCreateSession(createEmbedSessionDto)

Create an embed session

Mints a scoped, short-lived signing URL for a specific document recipient. Pass the returned &#x60;url&#x60; to an &#x60;&lt;iframe src&#x3D;{url}&gt;&#x60; or to the &#x60;@signvoy/react&#x60; &#x60;&lt;SignvoyEmbed url&#x3D;{url} /&gt;&#x60; component. The document must be in &#x60;sent&#x60; state and the recipient must be &#x60;pending&#x60;.

### Example

```ts
import {
  Configuration,
  EmbedApi,
} from '@signvoy/react';
import type { EmbedCreateSessionRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new EmbedApi(config);

  const body = {
    // CreateEmbedSessionDto
    createEmbedSessionDto: ...,
  } satisfies EmbedCreateSessionRequest;

  try {
    const data = await api.embedCreateSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmbedSessionDto** | [CreateEmbedSessionDto](CreateEmbedSessionDto.md) |  | |

### Return type

[**EmbedSessionResponseDto**](EmbedSessionResponseDto.md)

### Authorization

[api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Embed session created — includes the signing URL |  -  |
| **400** | Document not in \&#39;sent\&#39; state or recipient already signed |  -  |
| **403** | Document does not belong to this workspace |  -  |
| **404** | Document or recipient not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

