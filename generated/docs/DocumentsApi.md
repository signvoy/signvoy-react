# DocumentsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**documentsAudit**](DocumentsApi.md#documentsaudit) | **GET** /v1/documents/{id}/audit | Get document audit trail |
| [**documentsCertificate**](DocumentsApi.md#documentscertificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL |
| [**documentsCreate**](DocumentsApi.md#documentscreate) | **POST** /v1/documents | Create a new document |
| [**documentsFindOne**](DocumentsApi.md#documentsfindone) | **GET** /v1/documents/{id} | Get document by ID |
| [**documentsList**](DocumentsApi.md#documentslist) | **GET** /v1/documents | List documents |
| [**documentsRemind**](DocumentsApi.md#documentsremind) | **POST** /v1/documents/{id}/remind | Send a manual reminder |
| [**documentsRemindRecipient**](DocumentsApi.md#documentsremindrecipient) | **POST** /v1/documents/{id}/recipients/{recipientId}/remind | Send a reminder to a specific recipient |
| [**documentsRemove**](DocumentsApi.md#documentsremove) | **DELETE** /v1/documents/{id} | Delete document |
| [**documentsSend**](DocumentsApi.md#documentssend) | **POST** /v1/documents/{id}/send | Send document for signing |
| [**documentsSignedPdf**](DocumentsApi.md#documentssignedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL |
| [**documentsUpdate**](DocumentsApi.md#documentsupdate) | **PATCH** /v1/documents/{id} | Update document |
| [**documentsVoidDoc**](DocumentsApi.md#documentsvoiddoc) | **POST** /v1/documents/{id}/void | Void document |



## documentsAudit

> Array&lt;AuditEventDto&gt; documentsAudit(id)

Get document audit trail

Returns the ordered chain-of-custody events (sent, viewed, signed, declined, etc.) for the document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsAuditRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsAuditRequest;

  try {
    const data = await api.documentsAudit(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**Array&lt;AuditEventDto&gt;**](AuditEventDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsCertificate

> UrlResponseDto documentsCertificate(id)

Get certificate of completion URL

Retrieves a presigned URL to download the standalone certificate of completion

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsCertificateRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsCertificateRequest;

  try {
    const data = await api.documentsCertificate(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**UrlResponseDto**](UrlResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document or certificate not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsCreate

> DocumentDto documentsCreate(createDocumentDto)

Create a new document

Creates a document from a template with recipients for signing. Reusable templates must already be published. One-off templates — the single-use containers behind the \&#39;upload and send\&#39; flow — are published implicitly here, so their draft must pass rules-engine validation.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsCreateRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // CreateDocumentDto
    createDocumentDto: ...,
  } satisfies DocumentsCreateRequest;

  try {
    const data = await api.documentsCreate(body);
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
| **createDocumentDto** | [CreateDocumentDto](CreateDocumentDto.md) |  | |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Document created successfully |  -  |
| **400** | Invalid input data, an unknown role key, an archived template, a reusable template with no published version (&#x60;NO_PUBLISHED_VERSION&#x60;), or a one-off template whose draft has blocking rule diagnostics. |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsFindOne

> DocumentDto documentsFindOne(id)

Get document by ID

Retrieves detailed information about a specific document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsFindOneRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsFindOneRequest;

  try {
    const data = await api.documentsFindOne(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsList

> Array&lt;DocumentDto&gt; documentsList(status, templateId, q)

List documents

Retrieves all documents in the workspace with optional filtering by status, template, or search query

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsListRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // 'draft' | 'sent' | 'in_progress' | 'completed' | 'declined' | 'voided' | 'expired' | Filter by document status (optional)
    status: sent,
    // string | Filter by template UUID (optional)
    templateId: 550e8400-e29b-41d4-a716-446655440000,
    // string | Search query for document name, recipient name, or email (optional)
    q: john,
  } satisfies DocumentsListRequest;

  try {
    const data = await api.documentsList(body);
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
| **status** | `draft`, `sent`, `in_progress`, `completed`, `declined`, `voided`, `expired` | Filter by document status | [Optional] [Defaults to `undefined`] [Enum: draft, sent, in_progress, completed, declined, voided, expired] |
| **templateId** | `string` | Filter by template UUID | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search query for document name, recipient name, or email | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;DocumentDto&gt;**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of documents retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsRemind

> DocumentDto documentsRemind(id)

Send a manual reminder

Immediately emails a reminder to every pending recipient with an active signing link. Does not consume the automatic reminder budget.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsRemindRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsRemindRequest;

  try {
    const data = await api.documentsRemind(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | No pending recipients, or document not in a remindable state |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsRemindRecipient

> DocumentDto documentsRemindRecipient(recipientId, id)

Send a reminder to a specific recipient

Immediately emails a reminder to a single pending recipient with an active signing link. Does not consume the automatic reminder budget.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsRemindRecipientRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Recipient UUID
    recipientId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsRemindRecipientRequest;

  try {
    const data = await api.documentsRemindRecipient(body);
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
| **recipientId** | `string` | Recipient UUID | [Defaults to `undefined`] |
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Recipient not pending or does not have an active signing link |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document or recipient not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsRemove

> documentsRemove(id)

Delete document

Permanently deletes a document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsRemoveRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsRemoveRequest;

  try {
    const data = await api.documentsRemove(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

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
| **204** | Document deleted |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsSend

> DocumentDto documentsSend(id)

Send document for signing

Sends the document to recipients and transitions it to \&#39;sent\&#39; state

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsSendRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsSendRequest;

  try {
    const data = await api.documentsSend(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Document not in valid state for sending |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsSignedPdf

> UrlResponseDto documentsSignedPdf(id, download)

Get signed PDF URL

Retrieves a presigned URL for the completed signed PDF. By default the URL renders inline (for previewing in a browser); pass &#x60;download&#x3D;true&#x60; to force an attachment download with a friendly filename.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsSignedPdfRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Force an attachment download instead of inline rendering (optional)
    download: true,
  } satisfies DocumentsSignedPdfRequest;

  try {
    const data = await api.documentsSignedPdf(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |
| **download** | `boolean` | Force an attachment download instead of inline rendering | [Optional] [Defaults to `undefined`] |

### Return type

[**UrlResponseDto**](UrlResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found or not completed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsUpdate

> DocumentDto documentsUpdate(id, updateDocumentDto)

Update document

Updates document details (only allowed in draft state)

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsUpdateRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDocumentDto
    updateDocumentDto: ...,
  } satisfies DocumentsUpdateRequest;

  try {
    const data = await api.documentsUpdate(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |
| **updateDocumentDto** | [UpdateDocumentDto](UpdateDocumentDto.md) |  | |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid input or document not in draft state |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentsVoidDoc

> DocumentDto documentsVoidDoc(id)

Void document

Cancels the document and prevents further signing

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/react';
import type { DocumentsVoidDocRequest } from '@signvoy/react';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentsVoidDocRequest;

  try {
    const data = await api.documentsVoidDoc(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Document cannot be voided in current state |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

