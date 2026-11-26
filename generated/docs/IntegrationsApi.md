# IntegrationsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**integrationsComplete**](IntegrationsApi.md#integrationscomplete) | **POST** /v1/integrations/oauth/complete | Finish connecting a provider |
| [**integrationsConnect**](IntegrationsApi.md#integrationsconnect) | **POST** /v1/integrations/{provider}/connect | Start connecting a provider |
| [**integrationsCreateBinding**](IntegrationsApi.md#integrationscreatebinding) | **POST** /v1/integrations/bindings | Create a binding |
| [**integrationsCreateDrivePickerSession**](IntegrationsApi.md#integrationscreatedrivepickersession) | **POST** /v1/integrations/connections/{id}/google-drive/picker | Open the Google Drive folder picker |
| [**integrationsDeleteBinding**](IntegrationsApi.md#integrationsdeletebinding) | **DELETE** /v1/integrations/bindings/{id} | Delete a binding |
| [**integrationsDisconnect**](IntegrationsApi.md#integrationsdisconnect) | **DELETE** /v1/integrations/connections/{id} | Disconnect a provider |
| [**integrationsList**](IntegrationsApi.md#integrationslist) | **GET** /v1/integrations | List providers with their connection and bindings |
| [**integrationsListJobs**](IntegrationsApi.md#integrationslistjobs) | **GET** /v1/integrations/jobs | List recent integration jobs |
| [**integrationsListSlackChannels**](IntegrationsApi.md#integrationslistslackchannels) | **GET** /v1/integrations/connections/{id}/slack/channels | List Slack channels the connection can post to |
| [**integrationsRetryJob**](IntegrationsApi.md#integrationsretryjob) | **POST** /v1/integrations/jobs/{id}/retry | Retry a job |
| [**integrationsTestBinding**](IntegrationsApi.md#integrationstestbinding) | **POST** /v1/integrations/bindings/{id}/test | Test a binding |
| [**integrationsUpdateBinding**](IntegrationsApi.md#integrationsupdatebinding) | **PATCH** /v1/integrations/bindings/{id} | Update a binding |



## integrationsComplete

> CompleteIntegrationConnectResponseDto integrationsComplete(completeIntegrationConnectDto)

Finish connecting a provider

Called by the web &#x60;/oauth/callback&#x60; page with the provider\&#39;s &#x60;code&#x60; and &#x60;state&#x60;. The workspace comes from the signed state, not the &#x60;X-Workspace-Id&#x60; header. Signed-in users only; API keys get 403.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsCompleteRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // CompleteIntegrationConnectDto
    completeIntegrationConnectDto: ...,
  } satisfies IntegrationsCompleteRequest;

  try {
    const data = await api.integrationsComplete(body);
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
| **completeIntegrationConnectDto** | [CompleteIntegrationConnectDto](CompleteIntegrationConnectDto.md) |  | |

### Return type

[**CompleteIntegrationConnectResponseDto**](CompleteIntegrationConnectResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | State expired or invalid, or the provider rejected the code |  -  |
| **403** | API key, different user, or not an owner/admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsConnect

> StartIntegrationConnectResponseDto integrationsConnect(provider, startIntegrationConnectDto)

Start connecting a provider

Returns the provider consent URL. Signed-in users only; API keys get 403.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsConnectRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // 'google_drive' | 'slack'
    provider: provider_example,
    // StartIntegrationConnectDto
    startIntegrationConnectDto: ...,
  } satisfies IntegrationsConnectRequest;

  try {
    const data = await api.integrationsConnect(body);
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
| **provider** | `google_drive`, `slack` |  | [Defaults to `undefined`] [Enum: google_drive, slack] |
| **startIntegrationConnectDto** | [StartIntegrationConnectDto](StartIntegrationConnectDto.md) |  | |

### Return type

[**StartIntegrationConnectResponseDto**](StartIntegrationConnectResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Provider not configured on this server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsCreateBinding

> IntegrationBindingDto integrationsCreateBinding(createIntegrationBindingDto)

Create a binding

Runs an action on the chosen events. &#x60;config&#x60; is validated against the action\&#39;s schema.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsCreateBindingRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // CreateIntegrationBindingDto
    createIntegrationBindingDto: ...,
  } satisfies IntegrationsCreateBindingRequest;

  try {
    const data = await api.integrationsCreateBinding(body);
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
| **createIntegrationBindingDto** | [CreateIntegrationBindingDto](CreateIntegrationBindingDto.md) |  | |

### Return type

[**IntegrationBindingDto**](IntegrationBindingDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsCreateDrivePickerSession

> GoogleDrivePickerSessionDto integrationsCreateDrivePickerSession(id)

Open the Google Drive folder picker

Returns a short-lived &#x60;drive.file&#x60; access token of the connected Google account plus the Picker key and app id, so the browser can let an admin choose a folder. Signed-in users only; API keys get 403.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsCreateDrivePickerSessionRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Google Drive connection ID
    id: id_example,
  } satisfies IntegrationsCreateDrivePickerSessionRequest;

  try {
    const data = await api.integrationsCreateDrivePickerSession(body);
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
| **id** | `string` | Google Drive connection ID | [Defaults to `undefined`] |

### Return type

[**GoogleDrivePickerSessionDto**](GoogleDrivePickerSessionDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Not a Drive connection, access expired, or the picker is not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsDeleteBinding

> integrationsDeleteBinding(id)

Delete a binding

Stops the action from running and deletes its job history. Nothing is removed at the provider.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsDeleteBindingRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Binding ID
    id: id_example,
  } satisfies IntegrationsDeleteBindingRequest;

  try {
    const data = await api.integrationsDeleteBinding(body);
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
| **id** | `string` | Binding ID | [Defaults to `undefined`] |

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


## integrationsDisconnect

> integrationsDisconnect(id)

Disconnect a provider

Revokes the token at the provider (best-effort) and deletes the connection with its bindings and job history. Files already created at the provider stay.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsDisconnectRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Connection ID
    id: id_example,
  } satisfies IntegrationsDisconnectRequest;

  try {
    const data = await api.integrationsDisconnect(body);
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
| **id** | `string` | Connection ID | [Defaults to `undefined`] |

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
| **204** | Disconnected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsList

> Array&lt;IntegrationProviderInfoDto&gt; integrationsList()

List providers with their connection and bindings

One entry per supported provider, in a fixed order, whether or not it is connected.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsListRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  try {
    const data = await api.integrationsList();
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

[**Array&lt;IntegrationProviderInfoDto&gt;**](IntegrationProviderInfoDto.md)

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


## integrationsListJobs

> Array&lt;IntegrationJobDto&gt; integrationsListJobs(provider, bindingId, limit)

List recent integration jobs

Newest first. Filter by &#x60;provider&#x60; or &#x60;bindingId&#x60;; &#x60;limit&#x60; up to 50 (default 25).

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsListJobsRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // 'google_drive' | 'slack' (optional)
    provider: provider_example,
    // string (optional)
    bindingId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
  } satisfies IntegrationsListJobsRequest;

  try {
    const data = await api.integrationsListJobs(body);
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
| **provider** | `google_drive`, `slack` |  | [Optional] [Defaults to `undefined`] [Enum: google_drive, slack] |
| **bindingId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |

### Return type

[**Array&lt;IntegrationJobDto&gt;**](IntegrationJobDto.md)

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


## integrationsListSlackChannels

> Array&lt;SlackChannelDto&gt; integrationsListSlackChannels(id)

List Slack channels the connection can post to

Public channels, plus private channels the bot can see. Private channels where the bot is not a member have &#x60;isMember: false&#x60; and cannot be posted to until it is invited.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsListSlackChannelsRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Slack connection ID
    id: id_example,
  } satisfies IntegrationsListSlackChannelsRequest;

  try {
    const data = await api.integrationsListSlackChannels(body);
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
| **id** | `string` | Slack connection ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;SlackChannelDto&gt;**](SlackChannelDto.md)

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


## integrationsRetryJob

> IntegrationJobDto integrationsRetryJob(id)

Retry a job

Resets a failed, exhausted or skipped job and runs it again immediately.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsRetryJobRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Job ID
    id: id_example,
  } satisfies IntegrationsRetryJobRequest;

  try {
    const data = await api.integrationsRetryJob(body);
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
| **id** | `string` | Job ID | [Defaults to `undefined`] |

### Return type

[**IntegrationJobDto**](IntegrationJobDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Job is not in a retryable state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## integrationsTestBinding

> IntegrationTestResultDto integrationsTestBinding(id)

Test a binding

Runs the action\&#39;s test (e.g. posts a test Slack message). Failures are reported in the body, not as an HTTP error.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsTestBindingRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Binding ID
    id: id_example,
  } satisfies IntegrationsTestBindingRequest;

  try {
    const data = await api.integrationsTestBinding(body);
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
| **id** | `string` | Binding ID | [Defaults to `undefined`] |

### Return type

[**IntegrationTestResultDto**](IntegrationTestResultDto.md)

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


## integrationsUpdateBinding

> IntegrationBindingDto integrationsUpdateBinding(id, updateIntegrationBindingDto)

Update a binding

Change events, config or the enabled flag. A new &#x60;config&#x60; is validated against the action\&#39;s schema and applied at the provider (e.g. renaming the Drive folder) before saving.

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@signvoy/react';
import type { IntegrationsUpdateBindingRequest } from '@signvoy/react';

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
  const api = new IntegrationsApi(config);

  const body = {
    // string | Binding ID
    id: id_example,
    // UpdateIntegrationBindingDto
    updateIntegrationBindingDto: ...,
  } satisfies IntegrationsUpdateBindingRequest;

  try {
    const data = await api.integrationsUpdateBinding(body);
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
| **id** | `string` | Binding ID | [Defaults to `undefined`] |
| **updateIntegrationBindingDto** | [UpdateIntegrationBindingDto](UpdateIntegrationBindingDto.md) |  | |

### Return type

[**IntegrationBindingDto**](IntegrationBindingDto.md)

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

