# WorkspacesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workspaceBrandingGetAsset**](WorkspacesApi.md#workspacebrandinggetasset) | **GET** /v1/workspaces/{id}/branding/{asset} | Get a workspace branding image |
| [**workspaceBrandingRemoveAsset**](WorkspacesApi.md#workspacebrandingremoveasset) | **DELETE** /v1/workspaces/{id}/branding/{asset} | Remove a workspace branding image |
| [**workspaceBrandingUploadAsset**](WorkspacesApi.md#workspacebrandinguploadasset) | **POST** /v1/workspaces/{id}/branding/{asset} | Upload a workspace branding image |
| [**workspacesCreate**](WorkspacesApi.md#workspacescreate) | **POST** /v1/workspaces | Create a new workspace |
| [**workspacesFindOne**](WorkspacesApi.md#workspacesfindone) | **GET** /v1/workspaces/{id} | Get workspace by ID |
| [**workspacesInvite**](WorkspacesApi.md#workspacesinvite) | **POST** /v1/workspaces/{id}/members | Invite member to workspace |
| [**workspacesList**](WorkspacesApi.md#workspaceslist) | **GET** /v1/workspaces | List workspaces |
| [**workspacesListInvitations**](WorkspacesApi.md#workspaceslistinvitations) | **GET** /v1/workspaces/{id}/invitations | List pending invitations |
| [**workspacesListMembers**](WorkspacesApi.md#workspaceslistmembers) | **GET** /v1/workspaces/{id}/members | List workspace members |
| [**workspacesRemove**](WorkspacesApi.md#workspacesremove) | **DELETE** /v1/workspaces/{id} | Delete workspace |
| [**workspacesRemoveMember**](WorkspacesApi.md#workspacesremovemember) | **DELETE** /v1/workspaces/{id}/members/{userId} | Remove member from workspace |
| [**workspacesRevokeInvitation**](WorkspacesApi.md#workspacesrevokeinvitation) | **DELETE** /v1/workspaces/{id}/invitations/{invitationId} | Revoke invitation |
| [**workspacesUpdate**](WorkspacesApi.md#workspacesupdate) | **PATCH** /v1/workspaces/{id} | Update workspace |
| [**workspacesUpdateMember**](WorkspacesApi.md#workspacesupdatemember) | **PATCH** /v1/workspaces/{id}/members/{userId} | Update member role |



## workspaceBrandingGetAsset

> workspaceBrandingGetAsset(id, asset)

Get a workspace branding image

Public. Serves the logo or favicon shown to recipients. Cached as immutable; clients version the URL with &#x60;?v&#x3D;&#x60;.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspaceBrandingGetAssetRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new WorkspacesApi();

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'logo' | 'favicon' | Which branding image
    asset: asset_example,
  } satisfies WorkspaceBrandingGetAssetRequest;

  try {
    const data = await api.workspaceBrandingGetAsset(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **asset** | `logo`, `favicon` | Which branding image | [Defaults to `undefined`] [Enum: logo, favicon] |

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
| **200** | Image bytes |  -  |
| **404** | No image configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspaceBrandingRemoveAsset

> workspaceBrandingRemoveAsset(id, asset)

Remove a workspace branding image

Owner/admin only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspaceBrandingRemoveAssetRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'logo' | 'favicon' | Which branding image
    asset: asset_example,
  } satisfies WorkspaceBrandingRemoveAssetRequest;

  try {
    const data = await api.workspaceBrandingRemoveAsset(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **asset** | `logo`, `favicon` | Which branding image | [Defaults to `undefined`] [Enum: logo, favicon] |

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
| **200** | Image removed; returns the workspace branding |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspaceBrandingUploadAsset

> workspaceBrandingUploadAsset(id, asset, file)

Upload a workspace branding image

Replaces the logo (PNG, JPEG, WebP, SVG) or favicon (PNG, ICO, SVG). Up to 2 MB. Owner/admin only; requires a plan with custom branding.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspaceBrandingUploadAssetRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'logo' | 'favicon' | Which branding image
    asset: asset_example,
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies WorkspaceBrandingUploadAssetRequest;

  try {
    const data = await api.workspaceBrandingUploadAsset(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **asset** | `logo`, `favicon` | Which branding image | [Defaults to `undefined`] [Enum: logo, favicon] |
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Image stored; returns the workspace branding |  -  |
| **402** | Plan does not include custom branding |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesCreate

> workspacesCreate(createWorkspaceDto)

Create a new workspace

Creates a team workspace for collaborative document management

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesCreateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // CreateWorkspaceDto
    createWorkspaceDto: ...,
  } satisfies WorkspacesCreateRequest;

  try {
    const data = await api.workspacesCreate(body);
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
| **createWorkspaceDto** | [CreateWorkspaceDto](CreateWorkspaceDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Workspace created successfully |  -  |
| **400** | Invalid input data |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesFindOne

> workspacesFindOne(id)

Get workspace by ID

Retrieves detailed information about a specific workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesFindOneRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspacesFindOneRequest;

  try {
    const data = await api.workspacesFindOne(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

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
| **200** | Workspace retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesInvite

> workspacesInvite(id, inviteMemberDto)

Invite member to workspace

Sends an invitation to join the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesInviteRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // InviteMemberDto
    inviteMemberDto: ...,
  } satisfies WorkspacesInviteRequest;

  try {
    const data = await api.workspacesInvite(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **inviteMemberDto** | [InviteMemberDto](InviteMemberDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Invitation sent successfully |  -  |
| **400** | Invalid email or user already a member |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesList

> workspacesList()

List workspaces

Retrieves all workspaces the user has access to. Automatically provisions personal workspace if needed.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesListRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  try {
    const data = await api.workspacesList();
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

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of workspaces retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesListInvitations

> workspacesListInvitations(id)

List pending invitations

Retrieves all pending invitations for a workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesListInvitationsRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspacesListInvitationsRequest;

  try {
    const data = await api.workspacesListInvitations(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

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
| **200** | List of invitations retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesListMembers

> workspacesListMembers(id)

List workspace members

Retrieves all active members of a workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesListMembersRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspacesListMembersRequest;

  try {
    const data = await api.workspacesListMembers(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

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
| **200** | List of members retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesRemove

> workspacesRemove(id)

Delete workspace

Permanently deletes a workspace (owner only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesRemoveRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspacesRemoveRequest;

  try {
    const data = await api.workspacesRemove(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

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
| **204** | Workspace deleted successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Only owner can delete workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesRemoveMember

> workspacesRemoveMember(id, userId)

Remove member from workspace

Removes a member from the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesRemoveMemberRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID of the member to remove
    userId: userId_example,
  } satisfies WorkspacesRemoveMemberRequest;

  try {
    const data = await api.workspacesRemoveMember(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **userId** | `string` | User ID of the member to remove | [Defaults to `undefined`] |

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
| **204** | Member removed successfully |  -  |
| **400** | Cannot remove workspace owner |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesRevokeInvitation

> workspacesRevokeInvitation(id, invitationId)

Revoke invitation

Cancels a pending workspace invitation (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesRevokeInvitationRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Invitation UUID
    invitationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspacesRevokeInvitationRequest;

  try {
    const data = await api.workspacesRevokeInvitation(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **invitationId** | `string` | Invitation UUID | [Defaults to `undefined`] |

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
| **204** | Invitation revoked successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesUpdate

> workspacesUpdate(id, updateWorkspaceDto)

Update workspace

Updates workspace name (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesUpdateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWorkspaceDto
    updateWorkspaceDto: ...,
  } satisfies WorkspacesUpdateRequest;

  try {
    const data = await api.workspacesUpdate(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **updateWorkspaceDto** | [UpdateWorkspaceDto](UpdateWorkspaceDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workspace updated successfully |  -  |
| **400** | Invalid input data |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesUpdateMember

> workspacesUpdateMember(id, userId, updateMemberDto)

Update member role

Changes a member\&#39;s role in the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/react';
import type { WorkspacesUpdateMemberRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID of the member to update
    userId: userId_example,
    // UpdateMemberDto
    updateMemberDto: ...,
  } satisfies WorkspacesUpdateMemberRequest;

  try {
    const data = await api.workspacesUpdateMember(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **userId** | `string` | User ID of the member to update | [Defaults to `undefined`] |
| **updateMemberDto** | [UpdateMemberDto](UpdateMemberDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Member role updated successfully |  -  |
| **400** | Invalid role or cannot modify owner |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

