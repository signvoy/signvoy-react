# SignaturesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userSignaturesCreate**](SignaturesApi.md#usersignaturescreate) | **POST** /v1/users/me/signatures | Save a signature |
| [**userSignaturesList**](SignaturesApi.md#usersignatureslist) | **GET** /v1/users/me/signatures | List the current user\&#39;s saved signatures |
| [**userSignaturesRemove**](SignaturesApi.md#usersignaturesremove) | **DELETE** /v1/users/me/signatures/{id} | Delete a signature |
| [**userSignaturesUpdate**](SignaturesApi.md#usersignaturesupdate) | **PATCH** /v1/users/me/signatures/{id} | Update a signature |



## userSignaturesCreate

> UserSignatureDto userSignaturesCreate(createUserSignatureDto)

Save a signature

Stores a signature for reuse. Up to 10 per user; the first one saved becomes the default.

### Example

```ts
import {
  Configuration,
  SignaturesApi,
} from '@signvoy/react';
import type { UserSignaturesCreateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignaturesApi(config);

  const body = {
    // CreateUserSignatureDto
    createUserSignatureDto: ...,
  } satisfies UserSignaturesCreateRequest;

  try {
    const data = await api.userSignaturesCreate(body);
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
| **createUserSignatureDto** | [CreateUserSignatureDto](CreateUserSignatureDto.md) |  | |

### Return type

[**UserSignatureDto**](UserSignatureDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **409** | The per-user signature limit is reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userSignaturesList

> Array&lt;UserSignatureDto&gt; userSignaturesList()

List the current user\&#39;s saved signatures

Default first, then newest — the order the signing picker uses.

### Example

```ts
import {
  Configuration,
  SignaturesApi,
} from '@signvoy/react';
import type { UserSignaturesListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignaturesApi(config);

  try {
    const data = await api.userSignaturesList();
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

[**Array&lt;UserSignatureDto&gt;**](UserSignatureDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userSignaturesRemove

> userSignaturesRemove(id)

Delete a signature

Deleting the default promotes the next most recent signature. Documents already signed with it are unaffected — the image is copied into each submission at signing time.

### Example

```ts
import {
  Configuration,
  SignaturesApi,
} from '@signvoy/react';
import type { UserSignaturesRemoveRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignaturesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies UserSignaturesRemoveRequest;

  try {
    const data = await api.userSignaturesRemove(body);
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

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Signature deleted |  -  |
| **404** | Signature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userSignaturesUpdate

> UserSignatureDto userSignaturesUpdate(id, updateUserSignatureDto)

Update a signature

Promotes it to default, replaces its image, or both. &#x60;isDefault: false&#x60; is a no-op — a user who owns signatures always has exactly one default, so the way to move it is to promote another. Replacing the image leaves already-signed documents untouched, since the image is copied into each submission at signing time.

### Example

```ts
import {
  Configuration,
  SignaturesApi,
} from '@signvoy/react';
import type { UserSignaturesUpdateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignaturesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateUserSignatureDto
    updateUserSignatureDto: ...,
  } satisfies UserSignaturesUpdateRequest;

  try {
    const data = await api.userSignaturesUpdate(body);
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
| **updateUserSignatureDto** | [UpdateUserSignatureDto](UpdateUserSignatureDto.md) |  | |

### Return type

[**UserSignatureDto**](UserSignatureDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Signature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

