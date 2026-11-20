# UsersApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersMe**](UsersApi.md#usersme) | **GET** /v1/users/me | Get the current user\&#39;s profile, creating it on first call |
| [**usersUpdateMe**](UsersApi.md#usersupdateme) | **PATCH** /v1/users/me | Update the current user\&#39;s profile and onboarding progress |



## usersMe

> UserProfileDto usersMe()

Get the current user\&#39;s profile, creating it on first call

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@signvoy/react';
import type { UsersMeRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.usersMe();
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

[**UserProfileDto**](UserProfileDto.md)

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


## usersUpdateMe

> UserProfileDto usersUpdateMe(updateUserDto)

Update the current user\&#39;s profile and onboarding progress

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@signvoy/react';
import type { UsersUpdateMeRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // UpdateUserDto
    updateUserDto: ...,
  } satisfies UsersUpdateMeRequest;

  try {
    const data = await api.usersUpdateMe(body);
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
| **updateUserDto** | [UpdateUserDto](UpdateUserDto.md) |  | |

### Return type

[**UserProfileDto**](UserProfileDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

