# NotificationsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**notificationsList**](NotificationsApi.md#notificationslist) | **GET** /v1/notifications | List notifications for the current user |
| [**notificationsMarkAllRead**](NotificationsApi.md#notificationsmarkallread) | **POST** /v1/notifications/read-all | Mark all notifications as read |
| [**notificationsMarkRead**](NotificationsApi.md#notificationsmarkread) | **PATCH** /v1/notifications/{id}/read | Mark a notification as read |
| [**notificationsUnreadCount**](NotificationsApi.md#notificationsunreadcount) | **GET** /v1/notifications/unread-count | Get the unread notification count |



## notificationsList

> Array&lt;NotificationDto&gt; notificationsList(unread, limit)

List notifications for the current user

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@signvoy/react';
import type { NotificationsListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  const body = {
    // boolean | When true, return only unread notifications (optional)
    unread: true,
    // number | Maximum number of notifications to return (optional)
    limit: 8.14,
  } satisfies NotificationsListRequest;

  try {
    const data = await api.notificationsList(body);
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
| **unread** | `boolean` | When true, return only unread notifications | [Optional] [Defaults to `false`] |
| **limit** | `number` | Maximum number of notifications to return | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;NotificationDto&gt;**](NotificationDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## notificationsMarkAllRead

> notificationsMarkAllRead()

Mark all notifications as read

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@signvoy/react';
import type { NotificationsMarkAllReadRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  try {
    const data = await api.notificationsMarkAllRead();
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

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## notificationsMarkRead

> NotificationDto notificationsMarkRead(id)

Mark a notification as read

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@signvoy/react';
import type { NotificationsMarkReadRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies NotificationsMarkReadRequest;

  try {
    const data = await api.notificationsMarkRead(body);
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

[**NotificationDto**](NotificationDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## notificationsUnreadCount

> UnreadCountDto notificationsUnreadCount()

Get the unread notification count

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@signvoy/react';
import type { NotificationsUnreadCountRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  try {
    const data = await api.notificationsUnreadCount();
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

[**UnreadCountDto**](UnreadCountDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

