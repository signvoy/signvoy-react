# TemplateGalleryApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**templateGalleryFindOne**](TemplateGalleryApi.md#templategalleryfindone) | **GET** /v1/template-gallery/{slug} | Get a single gallery template |
| [**templateGalleryInstantiate**](TemplateGalleryApi.md#templategalleryinstantiate) | **POST** /v1/template-gallery/{slug}/instantiate | Instantiate a gallery template into the workspace |
| [**templateGalleryList**](TemplateGalleryApi.md#templategallerylist) | **GET** /v1/template-gallery | List gallery templates |



## templateGalleryFindOne

> GalleryTemplateDto templateGalleryFindOne(slug)

Get a single gallery template

Includes the full normalized &#x60;content&#x60; so the client can render the template itself, plus a short-lived presigned PDF preview URL for &#x60;sourceKind: \&#39;pdf\&#39;&#x60; templates only.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
} from '@signvoy/react';
import type { TemplateGalleryFindOneRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateGalleryApi(config);

  const body = {
    // string
    slug: slug_example,
  } satisfies TemplateGalleryFindOneRequest;

  try {
    const data = await api.templateGalleryFindOne(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GalleryTemplateDto**](GalleryTemplateDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateGalleryInstantiate

> templateGalleryInstantiate(slug, body)

Instantiate a gallery template into the workspace

Clones the gallery template (PDF + content) into a new workspace template. Use mode&#x3D;\&quot;customize\&quot; to open the editor, or mode&#x3D;\&quot;send\&quot; to auto-publish and send immediately.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
} from '@signvoy/react';
import type { TemplateGalleryInstantiateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateGalleryApi(config);

  const body = {
    // string
    slug: slug_example,
    // object
    body: Object,
  } satisfies TemplateGalleryInstantiateRequest;

  try {
    const data = await api.templateGalleryInstantiate(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | New workspace template created. |  -  |
| **403** | Plan tier does not allow this template. |  -  |
| **404** | Gallery template not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templateGalleryList

> Array&lt;GalleryTemplateDto&gt; templateGalleryList(category)

List gallery templates

Returns the curated gallery catalog. Optionally filter by category. Card-sized: includes recipients and a field count, but not &#x60;fields&#x60;, &#x60;body&#x60;, or a preview URL — fetch a single template for those.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
} from '@signvoy/react';
import type { TemplateGalleryListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateGalleryApi(config);

  const body = {
    // string (optional)
    category: category_example,
  } satisfies TemplateGalleryListRequest;

  try {
    const data = await api.templateGalleryList(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;GalleryTemplateDto&gt;**](GalleryTemplateDto.md)

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

