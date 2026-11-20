# MCPApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpGrantsCreate**](MCPApi.md#mcpgrantscreate) | **POST** /v1/mcp-grants | Authorise an OAuth client to call the MCP endpoint |
| [**mcpGrantsList**](MCPApi.md#mcpgrantslist) | **GET** /v1/mcp-grants | List active MCP grants for the current user |
| [**mcpGrantsRevoke**](MCPApi.md#mcpgrantsrevoke) | **DELETE** /v1/mcp-grants/{id} | Revoke an MCP grant |



## mcpGrantsCreate

> mcpGrantsCreate(body)

Authorise an OAuth client to call the MCP endpoint

Creates or un-revokes a grant so the specified Clerk OAuth client can access the MCP endpoint on behalf of the authenticated user. The clerkClientId is the client_id returned by Clerk\&#39;s Dynamic Client Registration endpoint when an MCP client connects for the first time. A grant carries no workspace — each tool call names the workspace it acts on and is authorised against the user\&#39;s membership of it.

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '@signvoy/react';
import type { McpGrantsCreateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new MCPApi();

  const body = {
    // object
    body: Object,
  } satisfies McpGrantsCreateRequest;

  try {
    const data = await api.mcpGrantsCreate(body);
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
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpGrantsList

> mcpGrantsList()

List active MCP grants for the current user

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '@signvoy/react';
import type { McpGrantsListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new MCPApi();

  try {
    const data = await api.mcpGrantsList();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpGrantsRevoke

> mcpGrantsRevoke(id)

Revoke an MCP grant

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '@signvoy/react';
import type { McpGrantsRevokeRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new MCPApi();

  const body = {
    // string
    id: id_example,
  } satisfies McpGrantsRevokeRequest;

  try {
    const data = await api.mcpGrantsRevoke(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

