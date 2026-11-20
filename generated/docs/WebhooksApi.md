# WebhooksApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webhooksCreate**](WebhooksApi.md#webhookscreate) | **POST** /v1/webhooks | Create a webhook endpoint |
| [**webhooksGet**](WebhooksApi.md#webhooksget) | **GET** /v1/webhooks/{id} | Get a single webhook endpoint |
| [**webhooksList**](WebhooksApi.md#webhookslist) | **GET** /v1/webhooks | List webhook endpoints for the workspace |
| [**webhooksListDeliveries**](WebhooksApi.md#webhookslistdeliveries) | **GET** /v1/webhooks/{id}/deliveries | List recent deliveries for an endpoint |
| [**webhooksPing**](WebhooksApi.md#webhooksping) | **POST** /v1/webhooks/{id}/ping | Send a test event |
| [**webhooksRemove**](WebhooksApi.md#webhooksremove) | **DELETE** /v1/webhooks/{id} | Delete a webhook endpoint |
| [**webhooksRetryDelivery**](WebhooksApi.md#webhooksretrydelivery) | **POST** /v1/webhooks/{id}/deliveries/{deliveryId}/retry | Manually retry a failed delivery |
| [**webhooksRotateSecret**](WebhooksApi.md#webhooksrotatesecret) | **POST** /v1/webhooks/{id}/rotate-secret | Rotate the signing secret |
| [**webhooksUpdate**](WebhooksApi.md#webhooksupdate) | **PATCH** /v1/webhooks/{id} | Update a webhook endpoint |



## webhooksCreate

> WebhookEndpointWithSecretDto webhooksCreate(createWebhookDto)

Create a webhook endpoint

Register a new HTTPS endpoint. The signing secret is returned **once** in this response and will not be shown again — store it securely.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksCreateRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookDto
    createWebhookDto: ...,
  } satisfies WebhooksCreateRequest;

  try {
    const data = await api.webhooksCreate(body);
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
| **createWebhookDto** | [CreateWebhookDto](CreateWebhookDto.md) |  | |

### Return type

[**WebhookEndpointWithSecretDto**](WebhookEndpointWithSecretDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Endpoint created — includes signing secret (shown once) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksGet

> WebhookEndpointDto webhooksGet(id)

Get a single webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksGetRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies WebhooksGetRequest;

  try {
    const data = await api.webhooksGet(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointDto**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksList

> Array&lt;WebhookEndpointDto&gt; webhooksList()

List webhook endpoints for the workspace

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksListRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  try {
    const data = await api.webhooksList();
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

[**Array&lt;WebhookEndpointDto&gt;**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of endpoints (secrets omitted) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksListDeliveries

> Array&lt;WebhookDeliveryDto&gt; webhooksListDeliveries(id)

List recent deliveries for an endpoint

Returns the 50 most recent delivery attempts.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksListDeliveriesRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies WebhooksListDeliveriesRequest;

  try {
    const data = await api.webhooksListDeliveries(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;WebhookDeliveryDto&gt;**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksPing

> WebhookDeliveryDto webhooksPing(id)

Send a test event

Sends a &#x60;webhook.test&#x60; event to verify the endpoint is reachable. Returns the delivery result.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksPingRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies WebhooksPingRequest;

  try {
    const data = await api.webhooksPing(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryDto**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksRemove

> webhooksRemove(id)

Delete a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksRemoveRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies WebhooksRemoveRequest;

  try {
    const data = await api.webhooksRemove(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

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
| **204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksRetryDelivery

> WebhookDeliveryDto webhooksRetryDelivery(id, deliveryId)

Manually retry a failed delivery

Resets the delivery to &#x60;pending&#x60; and immediately re-attempts it. The original payload and &#x60;Signvoy-Event-Id&#x60; are preserved so receivers can deduplicate.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksRetryDeliveryRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
    // string | Delivery ID
    deliveryId: deliveryId_example,
  } satisfies WebhooksRetryDeliveryRequest;

  try {
    const data = await api.webhooksRetryDelivery(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |
| **deliveryId** | `string` | Delivery ID | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryDto**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksRotateSecret

> WebhookEndpointWithSecretDto webhooksRotateSecret(id)

Rotate the signing secret

Issues a new HMAC secret for the endpoint. The new secret is returned **once** — update your server immediately. All future deliveries will use the new secret.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksRotateSecretRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies WebhooksRotateSecretRequest;

  try {
    const data = await api.webhooksRotateSecret(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointWithSecretDto**](WebhookEndpointWithSecretDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New secret (shown once) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhooksUpdate

> WebhookEndpointDto webhooksUpdate(id, updateWebhookDto)

Update a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/react';
import type { WebhooksUpdateRequest } from '@signvoy/react';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
    // UpdateWebhookDto
    updateWebhookDto: ...,
  } satisfies WebhooksUpdateRequest;

  try {
    const data = await api.webhooksUpdate(body);
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
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |
| **updateWebhookDto** | [UpdateWebhookDto](UpdateWebhookDto.md) |  | |

### Return type

[**WebhookEndpointDto**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

