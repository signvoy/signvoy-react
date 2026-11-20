# ContactsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**contactsCreate**](ContactsApi.md#contactscreate) | **POST** /v1/contacts | Create a contact |
| [**contactsFindOne**](ContactsApi.md#contactsfindone) | **GET** /v1/contacts/{id} | Get a contact |
| [**contactsList**](ContactsApi.md#contactslist) | **GET** /v1/contacts | List contacts |
| [**contactsListDocuments**](ContactsApi.md#contactslistdocuments) | **GET** /v1/contacts/{id}/documents | List documents involving a contact |
| [**contactsRemove**](ContactsApi.md#contactsremove) | **DELETE** /v1/contacts/{id} | Delete a contact permanently |
| [**contactsSearch**](ContactsApi.md#contactssearch) | **GET** /v1/contacts/search | Search contacts for a recipient picker |
| [**contactsUpdate**](ContactsApi.md#contactsupdate) | **PATCH** /v1/contacts/{id} | Update, archive or restore a contact |



## contactsCreate

> ContactDto contactsCreate(createContactDto)

Create a contact

Email is the only required field. Contacts are also created automatically for every recipient whenever a document is sent, so this is for entries you want to curate ahead of time.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsCreateRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // CreateContactDto
    createContactDto: ...,
  } satisfies ContactsCreateRequest;

  try {
    const data = await api.contactsCreate(body);
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
| **createContactDto** | [CreateContactDto](CreateContactDto.md) |  | |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created contact |  -  |
| **409** | A contact with this email already exists in the workspace |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsFindOne

> ContactDto contactsFindOne(id)

Get a contact

Returns a single contact from the workspace address book. An id belonging to another workspace returns 404 rather than 403.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsFindOneRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // string | Contact ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ContactsFindOneRequest;

  try {
    const data = await api.contactsFindOne(body);
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
| **id** | `string` | Contact ID | [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contact |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsList

> ContactListDto contactsList(archived, q, limit, offset)

List contacts

Returns a page of the workspace address book, ordered with named contacts first. The address book is shared by every member of the workspace.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsListRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // boolean | Include archived contacts instead of live ones (optional)
    archived: true,
    // string | Case-insensitive substring matched against name, email and company (optional)
    q: acme,
    // number | Max contacts to return (optional)
    limit: 8.14,
    // number | Zero-based offset for pagination (optional)
    offset: 8.14,
  } satisfies ContactsListRequest;

  try {
    const data = await api.contactsList(body);
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
| **archived** | `boolean` | Include archived contacts instead of live ones | [Optional] [Defaults to `false`] |
| **q** | `string` | Case-insensitive substring matched against name, email and company | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max contacts to return | [Optional] [Defaults to `50`] |
| **offset** | `number` | Zero-based offset for pagination | [Optional] [Defaults to `0`] |

### Return type

[**ContactListDto**](ContactListDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of contacts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsListDocuments

> Array&lt;ContactDocumentDto&gt; contactsListDocuments(id)

List documents involving a contact

The 50 most recent documents this contact was a recipient on. Members see only documents they own; owners and admins see every document in the workspace — the same visibility rule &#x60;GET /documents&#x60; applies.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsListDocumentsRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // string | Contact ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ContactsListDocumentsRequest;

  try {
    const data = await api.contactsListDocuments(body);
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
| **id** | `string` | Contact ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;ContactDocumentDto&gt;**](ContactDocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Documents this contact appears on |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsRemove

> contactsRemove(id)

Delete a contact permanently

Removes the row outright. Documents already sent to this person are unaffected — they carry their own copy of the name and email — so this is safe to use for an erasure request. Owners and admins only; members should archive instead.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsRemoveRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // string | Contact ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ContactsRemoveRequest;

  try {
    const data = await api.contactsRemove(body);
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
| **id** | `string` | Contact ID | [Defaults to `undefined`] |

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
| **204** | Contact deleted |  -  |
| **403** | Not a workspace owner or admin |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsSearch

> Array&lt;ContactSuggestionDto&gt; contactsSearch(q, limit)

Search contacts for a recipient picker

Case-insensitive substring match on name and email, excluding archived contacts. Returns a lean projection intended for a typeahead; use &#x60;GET /contacts&#x60; for the full records. At most &#x60;limit&#x60; matches come back and there is no total or cursor, so a query with more matches than that is answered with the best of them and is meant to be narrowed rather than paged.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsSearchRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // string | Substring matched case-insensitively against name and email. An empty or whitespace-only value returns no results rather than the whole book.
    q: pri,
    // number | Max suggestions to return (optional)
    limit: 8.14,
  } satisfies ContactsSearchRequest;

  try {
    const data = await api.contactsSearch(body);
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
| **q** | `string` | Substring matched case-insensitively against name and email. An empty or whitespace-only value returns no results rather than the whole book. | [Defaults to `undefined`] |
| **limit** | `number` | Max suggestions to return | [Optional] [Defaults to `10`] |

### Return type

[**Array&lt;ContactSuggestionDto&gt;**](ContactSuggestionDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Matching contacts, best match first |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## contactsUpdate

> ContactDto contactsUpdate(id, updateContactDto)

Update, archive or restore a contact

Pass &#x60;archived: true&#x60; to hide the contact from the recipient picker and the default listing without deleting it, or &#x60;archived: false&#x60; to restore it. A nullable field set to &#x60;null&#x60; is cleared.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@signvoy/react';
import type { ContactsUpdateRequest } from '@signvoy/react';

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
  const api = new ContactsApi(config);

  const body = {
    // string | Contact ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateContactDto
    updateContactDto: ...,
  } satisfies ContactsUpdateRequest;

  try {
    const data = await api.contactsUpdate(body);
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
| **id** | `string` | Contact ID | [Defaults to `undefined`] |
| **updateContactDto** | [UpdateContactDto](UpdateContactDto.md) |  | |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated contact |  -  |
| **404** | Contact not found |  -  |
| **409** | Another contact in this workspace already has that email |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

