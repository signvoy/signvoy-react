# SigningApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**signingDecline**](SigningApi.md#signingdecline) | **POST** /v1/sign/{token}/decline | Decline to sign |
| [**signingDocumentUrl**](SigningApi.md#signingdocumenturl) | **GET** /v1/sign/{token}/document | Get a download link for the document |
| [**signingGetContext**](SigningApi.md#signinggetcontext) | **GET** /v1/sign/{token} | Get signing context |
| [**signingGetDraft**](SigningApi.md#signinggetdraft) | **GET** /v1/sign/{token}/draft | Get saved draft |
| [**signingSaveDraft**](SigningApi.md#signingsavedraft) | **POST** /v1/sign/{token}/draft | Save draft |
| [**signingSubmit**](SigningApi.md#signingsubmit) | **POST** /v1/sign/{token}/submit | Submit signature |



## signingDecline

> signingDecline(token, declineDto)

Decline to sign

Allows recipient to decline signing the document with a reason

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningDeclineRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // DeclineDto
    declineDto: ...,
  } satisfies SigningDeclineRequest;

  try {
    const data = await api.signingDecline(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **declineDto** | [DeclineDto](DeclineDto.md) |  | |

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
| **204** | Document declined successfully |  -  |
| **400** | Invalid decline reason or document already processed |  -  |
| **401** | Invalid or expired signing token |  -  |
| **403** | Recipient\&#39;s role does not permit declining |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signingDocumentUrl

> signingDocumentUrl(token)

Get a download link for the document

Presigned URL for the document as it stands for this recipient. A CC or viewer placed mid-order receives the snapshot as of their step; once the document is complete, everyone gets the certified final PDF.

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningDocumentUrlRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
  } satisfies SigningDocumentUrlRequest;

  try {
    const data = await api.signingDocumentUrl(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |

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
| **200** | Download URL issued |  -  |
| **401** | Invalid or expired signing token |  -  |
| **409** | No rendered PDF exists for this document yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signingGetContext

> signingGetContext(token)

Get signing context

Retrieves document and field information for a recipient using their signing token

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningGetContextRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
  } satisfies SigningGetContextRequest;

  try {
    const data = await api.signingGetContext(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |

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
| **200** | Signing context retrieved successfully |  -  |
| **401** | Invalid or expired signing token |  -  |
| **404** | Document or recipient not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signingGetDraft

> signingGetDraft(token)

Get saved draft

Retrieves previously saved draft values for the recipient

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningGetDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
  } satisfies SigningGetDraftRequest;

  try {
    const data = await api.signingGetDraft(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |

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
| **200** | Draft retrieved successfully |  -  |
| **204** | No draft exists |  -  |
| **401** | Invalid or expired signing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signingSaveDraft

> signingSaveDraft(token, saveDraftDto)

Save draft

Saves recipient\&#39;s progress without submitting the document

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningSaveDraftRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // SaveDraftDto
    saveDraftDto: ...,
  } satisfies SigningSaveDraftRequest;

  try {
    const data = await api.signingSaveDraft(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **saveDraftDto** | [SaveDraftDto](SaveDraftDto.md) |  | |

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
| **204** | Draft saved successfully |  -  |
| **400** | Invalid field values |  -  |
| **401** | Invalid or expired signing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signingSubmit

> signingSubmit(token, submitSigningDto)

Submit signature

Submits the completed document with recipient\&#39;s signatures and data

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/react';
import type { SigningSubmitRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // SubmitSigningDto
    submitSigningDto: ...,
  } satisfies SigningSubmitRequest;

  try {
    const data = await api.signingSubmit(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **submitSigningDto** | [SubmitSigningDto](SubmitSigningDto.md) |  | |

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
| **201** | Document submitted successfully |  -  |
| **400** | Invalid or incomplete field values |  -  |
| **401** | Invalid or expired signing token |  -  |
| **403** | Recipient\&#39;s role does not permit signing (a CC recipient holds a read-only copy link) |  -  |
| **409** | Document already submitted or in invalid state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

