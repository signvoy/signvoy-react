# NotificationPreferencesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**notificationPreferencesGet**](NotificationPreferencesApi.md#notificationpreferencesget) | **GET** /v1/users/me/notification-preferences | Get the current user\&#39;s notification preferences |
| [**notificationPreferencesUpdate**](NotificationPreferencesApi.md#notificationpreferencesupdate) | **PATCH** /v1/users/me/notification-preferences | Change notification preferences |
| [**unsubscribePreview**](NotificationPreferencesApi.md#unsubscribepreview) | **GET** /v1/notification-preferences/unsubscribe/preview | Describe what an unsubscribe token would turn off |
| [**unsubscribeUnsubscribe**](NotificationPreferencesApi.md#unsubscribeunsubscribe) | **POST** /v1/notification-preferences/unsubscribe | Unsubscribe from one email notification |



## notificationPreferencesGet

> PreferencesResponseDto notificationPreferencesGet(workspaceId)

Get the current user\&#39;s notification preferences

Returns the catalog together with the effective value of every supported (type, channel) pair and where that value came from.

### Example

```ts
import {
  Configuration,
  NotificationPreferencesApi,
} from '@signvoy/react';
import type { NotificationPreferencesGetRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationPreferencesApi(config);

  const body = {
    // string | Resolve with this workspace\'s overrides applied. Omit for account-wide values. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies NotificationPreferencesGetRequest;

  try {
    const data = await api.notificationPreferencesGet(body);
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
| **workspaceId** | `string` | Resolve with this workspace\&#39;s overrides applied. Omit for account-wide values. | [Optional] [Defaults to `undefined`] |

### Return type

[**PreferencesResponseDto**](PreferencesResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Called with an API key |  -  |
| **404** | Not a member of the workspace |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## notificationPreferencesUpdate

> PreferencesResponseDto notificationPreferencesUpdate(updatePreferencesDto)

Change notification preferences

Applies every change atomically at one scope. &#x60;enabled: null&#x60; resets a pair to its inherited value.

### Example

```ts
import {
  Configuration,
  NotificationPreferencesApi,
} from '@signvoy/react';
import type { NotificationPreferencesUpdateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationPreferencesApi(config);

  const body = {
    // UpdatePreferencesDto
    updatePreferencesDto: ...,
  } satisfies NotificationPreferencesUpdateRequest;

  try {
    const data = await api.notificationPreferencesUpdate(body);
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
| **updatePreferencesDto** | [UpdatePreferencesDto](UpdatePreferencesDto.md) |  | |

### Return type

[**PreferencesResponseDto**](PreferencesResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Called with an API key |  -  |
| **404** | Not a member of the workspace |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unsubscribePreview

> UnsubscribePreviewDto unsubscribePreview(token)

Describe what an unsubscribe token would turn off

### Example

```ts
import {
  Configuration,
  NotificationPreferencesApi,
} from '@signvoy/react';
import type { UnsubscribePreviewRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new NotificationPreferencesApi();

  const body = {
    // string | Signed unsubscribe token from the email
    token: token_example,
  } satisfies UnsubscribePreviewRequest;

  try {
    const data = await api.unsubscribePreview(body);
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
| **token** | `string` | Signed unsubscribe token from the email | [Defaults to `undefined`] |

### Return type

[**UnsubscribePreviewDto**](UnsubscribePreviewDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid unsubscribe link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unsubscribeUnsubscribe

> unsubscribeUnsubscribe(token)

Unsubscribe from one email notification

RFC 8058 one-click endpoint. Idempotent; turns the notification off account-wide.

### Example

```ts
import {
  Configuration,
  NotificationPreferencesApi,
} from '@signvoy/react';
import type { UnsubscribeUnsubscribeRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new NotificationPreferencesApi();

  const body = {
    // string | Signed unsubscribe token from the email
    token: token_example,
  } satisfies UnsubscribeUnsubscribeRequest;

  try {
    const data = await api.unsubscribeUnsubscribe(body);
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
| **token** | `string` | Signed unsubscribe token from the email | [Defaults to `undefined`] |

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
| **200** | Unsubscribed |  -  |
| **400** | Invalid unsubscribe link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

