# TemplatesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**templatesArchive**](TemplatesApi.md#templatesarchive) | **POST** /v1/templates/{id}/archive | Archive template |
| [**templatesCreate**](TemplatesApi.md#templatescreate) | **POST** /v1/templates | Create a new template |
| [**templatesFindOne**](TemplatesApi.md#templatesfindone) | **GET** /v1/templates/{id} | Get template by id |
| [**templatesGetPdfUrl**](TemplatesApi.md#templatesgetpdfurl) | **GET** /v1/templates/{id}/pdf | Get a presigned PDF URL for the latest version |
| [**templatesList**](TemplatesApi.md#templateslist) | **GET** /v1/templates | List templates in the workspace |
| [**templatesRemove**](TemplatesApi.md#templatesremove) | **DELETE** /v1/templates/{id} | Delete template |
| [**templatesUnarchive**](TemplatesApi.md#templatesunarchive) | **POST** /v1/templates/{id}/unarchive | Unarchive template |
| [**templatesUpdate**](TemplatesApi.md#templatesupdate) | **PATCH** /v1/templates/{id} | Update template metadata (name only) |



## templatesArchive

> TemplateWithVersionsDto templatesArchive(id)

Archive template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesArchiveRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TemplatesArchiveRequest;

  try {
    const data = await api.templatesArchive(body);
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

[**TemplateWithVersionsDto**](TemplateWithVersionsDto.md)

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


## templatesCreate

> CreateTemplateResponseDto templatesCreate(createTemplateDto)

Create a new template

Reserves a template id and the initial draft version. For a PDF source (the default) the response also carries a presigned URL the browser uploads the file to. Pass a &#x60;content&#x60; body with &#x60;sourceKind: \&quot;document\&quot;&#x60; to author the template as rich text instead; there is then no file to upload, so no &#x60;uploadUrl&#x60; is returned.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesCreateRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // CreateTemplateDto
    createTemplateDto: ...,
  } satisfies TemplatesCreateRequest;

  try {
    const data = await api.templatesCreate(body);
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
| **createTemplateDto** | [CreateTemplateDto](CreateTemplateDto.md) |  | |

### Return type

[**CreateTemplateResponseDto**](CreateTemplateResponseDto.md)

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


## templatesFindOne

> TemplateWithVersionsDto templatesFindOne(id)

Get template by id

Returns the lightweight template row bundled with its current draft + published version (when each exists).

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesFindOneRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TemplatesFindOneRequest;

  try {
    const data = await api.templatesFindOne(body);
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

[**TemplateWithVersionsDto**](TemplateWithVersionsDto.md)

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


## templatesGetPdfUrl

> TemplateUrlResponseDto templatesGetPdfUrl(id)

Get a presigned PDF URL for the latest version

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesGetPdfUrlRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies TemplatesGetPdfUrlRequest;

  try {
    const data = await api.templatesGetPdfUrl(body);
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

[**TemplateUrlResponseDto**](TemplateUrlResponseDto.md)

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


## templatesList

> Array&lt;TemplateWithVersionsDto&gt; templatesList(status, kind)

List templates in the workspace

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesListRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // 'active' | 'archived' | 'all' | Filter templates by status (optional)
    status: active,
    // 'reusable' | 'oneoff' | Which kind of template to list. `reusable` (the default) is the templates library. `oneoff` returns only the single-use templates behind an unfinished \'upload and send\' — the ones still being prepared, with no document created from them yet. (optional)
    kind: reusable,
  } satisfies TemplatesListRequest;

  try {
    const data = await api.templatesList(body);
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
| **status** | `active`, `archived`, `all` | Filter templates by status | [Optional] [Defaults to `undefined`] [Enum: active, archived, all] |
| **kind** | `reusable`, `oneoff` | Which kind of template to list. &#x60;reusable&#x60; (the default) is the templates library. &#x60;oneoff&#x60; returns only the single-use templates behind an unfinished \&#39;upload and send\&#39; — the ones still being prepared, with no document created from them yet. | [Optional] [Defaults to `undefined`] [Enum: reusable, oneoff] |

### Return type

[**Array&lt;TemplateWithVersionsDto&gt;**](TemplateWithVersionsDto.md)

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


## templatesRemove

> templatesRemove(id)

Delete template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesRemoveRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TemplatesRemoveRequest;

  try {
    const data = await api.templatesRemove(body);
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

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templatesUnarchive

> TemplateWithVersionsDto templatesUnarchive(id)

Unarchive template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesUnarchiveRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TemplatesUnarchiveRequest;

  try {
    const data = await api.templatesUnarchive(body);
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

[**TemplateWithVersionsDto**](TemplateWithVersionsDto.md)

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


## templatesUpdate

> TemplateWithVersionsDto templatesUpdate(id, updateTemplateDto)

Update template metadata (name only)

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@signvoy/react';
import type { TemplatesUpdateRequest } from '@signvoy/react';

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
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTemplateDto
    updateTemplateDto: ...,
  } satisfies TemplatesUpdateRequest;

  try {
    const data = await api.templatesUpdate(body);
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
| **updateTemplateDto** | [UpdateTemplateDto](UpdateTemplateDto.md) |  | |

### Return type

[**TemplateWithVersionsDto**](TemplateWithVersionsDto.md)

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

