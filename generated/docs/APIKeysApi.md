# APIKeysApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeysCreate**](APIKeysApi.md#apikeyscreate) | **POST** /v1/api-keys | Create an API key |
| [**apiKeysList**](APIKeysApi.md#apikeyslist) | **GET** /v1/api-keys | List API keys |
| [**apiKeysRevoke**](APIKeysApi.md#apikeysrevoke) | **DELETE** /v1/api-keys/{id} | Revoke an API key |



## apiKeysCreate

> CreatedApiKeyDto apiKeysCreate(createApiKeyDto)

Create an API key

Creates a new secret API key scoped to this workspace. The plaintext key is returned **once** in this response and cannot be retrieved again — store it securely.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/react';
import type { ApiKeysCreateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  const body = {
    // CreateApiKeyDto
    createApiKeyDto: ...,
  } satisfies ApiKeysCreateRequest;

  try {
    const data = await api.apiKeysCreate(body);
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
| **createApiKeyDto** | [CreateApiKeyDto](CreateApiKeyDto.md) |  | |

### Return type

[**CreatedApiKeyDto**](CreatedApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key created (includes the plaintext secret, shown once) |  -  |
| **403** | Not a workspace owner or admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiKeysList

> Array&lt;ApiKeyDto&gt; apiKeysList()

List API keys

Returns all API keys for the workspace. Secrets are never included — only the prefix and last 4 characters.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/react';
import type { ApiKeysListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  try {
    const data = await api.apiKeysList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ApiKeyDto&gt;**](ApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of API keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiKeysRevoke

> ApiKeyDto apiKeysRevoke(id)

Revoke an API key

Immediately and permanently revokes the key. Any request using it will start failing at once. This cannot be undone.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/react';
import type { ApiKeysRevokeRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  const body = {
    // string | API key ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiKeysRevokeRequest;

  try {
    const data = await api.apiKeysRevoke(body);
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
| **id** | `string` | API key ID | [Defaults to `undefined`] |

### Return type

[**ApiKeyDto**](ApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The revoked key |  -  |
| **403** | Not a workspace owner or admin |  -  |
| **404** | API key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

