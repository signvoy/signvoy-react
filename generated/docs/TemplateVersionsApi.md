# TemplateVersionsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**templateVersionsDiscardDraft**](TemplateVersionsApi.md#templateversionsdiscarddraft) | **DELETE** /v1/templates/{templateId}/draft | Discard the current draft |
| [**templateVersionsEnsureDraft**](TemplateVersionsApi.md#templateversionsensuredraft) | **POST** /v1/templates/{templateId}/draft/ensure | Lazily create a draft from the published version (or empty) |
| [**templateVersionsFindOne**](TemplateVersionsApi.md#templateversionsfindone) | **GET** /v1/templates/{templateId}/versions/{versionId} | Get a specific version (read-only) |
| [**templateVersionsGetDraft**](TemplateVersionsApi.md#templateversionsgetdraft) | **GET** /v1/templates/{templateId}/draft | Get current draft version |
| [**templateVersionsListVersions**](TemplateVersionsApi.md#templateversionslistversions) | **GET** /v1/templates/{templateId}/versions | List all published + draft versions |
| [**templateVersionsPublish**](TemplateVersionsApi.md#templateversionspublish) | **POST** /v1/templates/{templateId}/draft/publish | Publish the draft |
| [**templateVersionsUpsertDraft**](TemplateVersionsApi.md#templateversionsupsertdraft) | **PATCH** /v1/templates/{templateId}/draft | Upsert draft content |



## templateVersionsDiscardDraft

> templateVersionsDiscardDraft(templateId)

Discard the current draft

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsDiscardDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsDiscardDraftRequest;

  try {
    const data = await api.templateVersionsDiscardDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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


## templateVersionsEnsureDraft

> templateVersionsEnsureDraft(templateId)

Lazily create a draft from the published version (or empty)

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsEnsureDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsEnsureDraftRequest;

  try {
    const data = await api.templateVersionsEnsureDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateVersionsFindOne

> templateVersionsFindOne(templateId, versionId)

Get a specific version (read-only)

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsFindOneRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
    // string
    versionId: versionId_example,
  } satisfies TemplateVersionsFindOneRequest;

  try {
    const data = await api.templateVersionsFindOne(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateVersionsGetDraft

> templateVersionsGetDraft(templateId)

Get current draft version

Returns the current draft version\&#39;s content, or 200 with &#x60;null&#x60; if none exists.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsGetDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsGetDraftRequest;

  try {
    const data = await api.templateVersionsGetDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Draft retrieved (or null). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateVersionsListVersions

> templateVersionsListVersions(templateId)

List all published + draft versions

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsListVersionsRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsListVersionsRequest;

  try {
    const data = await api.templateVersionsListVersions(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateVersionsPublish

> templateVersionsPublish(templateId)

Publish the draft

Strict engine validation gate. Returns the published version; or throws RuleEngineException with structured diagnostics.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsPublishRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsPublishRequest;

  try {
    const data = await api.templateVersionsPublish(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateVersionsUpsertDraft

> templateVersionsUpsertDraft(templateId)

Upsert draft content

Writes the full version content. Always allowed; returns engine diagnostics for the editor to render (warning-tolerant).

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/react';
import type { TemplateVersionsUpsertDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies TemplateVersionsUpsertDraftRequest;

  try {
    const data = await api.templateVersionsUpsertDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

