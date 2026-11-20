# SubmissionsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**submissionsList**](SubmissionsApi.md#submissionslist) | **GET** /v1/submissions | List submissions for a document |



## submissionsList

> submissionsList(documentId)

List submissions for a document

Retrieves all recipient submissions for a specific document including their signature data

### Example

```ts
import {
  Configuration,
  SubmissionsApi,
} from '@signvoy/react';
import type { SubmissionsListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new SubmissionsApi(config);

  const body = {
    // string | Document UUID to get submissions for
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SubmissionsListRequest;

  try {
    const data = await api.submissionsList(body);
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
| **documentId** | `string` | Document UUID to get submissions for | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of submissions retrieved successfully |  -  |
| **400** | Missing or invalid documentId |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not authorized to view this document |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

