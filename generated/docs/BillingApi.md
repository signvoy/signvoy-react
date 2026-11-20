# BillingApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**billingChangePlan**](BillingApi.md#billingchangeplan) | **PATCH** /v1/billing/plan | Change plan or interval |
| [**billingCheckout**](BillingApi.md#billingcheckout) | **POST** /v1/billing/checkout | Start a checkout |
| [**billingDescribeCheckout**](BillingApi.md#billingdescribecheckout) | **GET** /v1/billing/checkout/{sessionId} | Describe a completed checkout |
| [**billingPortal**](BillingApi.md#billingportal) | **POST** /v1/billing/portal | Open the customer portal |
| [**billingSummary**](BillingApi.md#billingsummary) | **GET** /v1/billing | Get billing summary |
| [**billingUpdateSeats**](BillingApi.md#billingupdateseats) | **PATCH** /v1/billing/seats | Set the seat count |
| [**publicCheckoutCheckout**](BillingApi.md#publiccheckoutcheckout) | **POST** /v1/billing/public/checkout | Start a checkout without an account |
| [**publicCheckoutStatus**](BillingApi.md#publiccheckoutstatus) | **GET** /v1/billing/public/checkout/{sessionId} | Describe an anonymous checkout |



## billingChangePlan

> BillingSummaryDto billingChangePlan(selectPlanDto)

Change plan or interval

Moves an existing subscription to another plan or billing interval. Upgrades are prorated and take effect at once. Downgrades issue no credit and the lower price applies from the next renewal. Seats already paid for carry over; pass &#x60;seats&#x60; to change that number at the same time.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingChangePlanRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  const body = {
    // SelectPlanDto
    selectPlanDto: ...,
  } satisfies BillingChangePlanRequest;

  try {
    const data = await api.billingChangePlan(body);
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
| **selectPlanDto** | [SelectPlanDto](SelectPlanDto.md) |  | |

### Return type

[**BillingSummaryDto**](BillingSummaryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated billing summary |  -  |
| **403** | Not the workspace owner |  -  |
| **404** | No subscription to change |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## billingCheckout

> BillingRedirectDto billingCheckout(selectPlanDto)

Start a checkout

Creates a Stripe-hosted Checkout Session for the chosen plan and returns its URL. Redirect the browser to it with a full-page navigation. Pass &#x60;seats&#x60; to buy more than the plan bundles in the same transaction. Seats already in use beyond what the plan bundles are included in the first invoice, so nobody loses access on upgrade.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingCheckoutRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  const body = {
    // SelectPlanDto
    selectPlanDto: ...,
  } satisfies BillingCheckoutRequest;

  try {
    const data = await api.billingCheckout(body);
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
| **selectPlanDto** | [SelectPlanDto](SelectPlanDto.md) |  | |

### Return type

[**BillingRedirectDto**](BillingRedirectDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout URL |  -  |
| **403** | Not the workspace owner |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## billingDescribeCheckout

> CheckoutReceiptDto billingDescribeCheckout(sessionId)

Describe a completed checkout

Amount, currency, plan, and payment status of a Checkout Session this account started. The billing page reads it once after Stripe redirects back, to report the purchase to analytics.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingDescribeCheckoutRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies BillingDescribeCheckoutRequest;

  try {
    const data = await api.billingDescribeCheckout(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CheckoutReceiptDto**](CheckoutReceiptDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout receipt |  -  |
| **403** | Not the workspace owner |  -  |
| **404** | Unknown checkout session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## billingPortal

> BillingRedirectDto billingPortal()

Open the customer portal

Creates a Stripe-hosted Customer Portal session for managing the payment method, downloading invoices, and cancelling. Plan and seat changes are deliberately not available there — use this API, which checks changes against actual workspace membership.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingPortalRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  try {
    const data = await api.billingPortal();
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

[**BillingRedirectDto**](BillingRedirectDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portal URL |  -  |
| **403** | Not the workspace owner |  -  |
| **404** | Account has no billing history yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## billingSummary

> BillingSummaryDto billingSummary()

Get billing summary

Current plan, entitlements, seat and document usage, and the available upgrade prices. Readable by any workspace member so the UI can show why an action was blocked; only the owner can change anything.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingSummaryRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  try {
    const data = await api.billingSummary();
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

[**BillingSummaryDto**](BillingSummaryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## billingUpdateSeats

> BillingSummaryDto billingUpdateSeats(updateSeatsDto)

Set the seat count

Sets how many seats the account pays for. Never called implicitly by inviting someone — adding a teammate returns 402 with &#x60;SEAT_LIMIT_REACHED&#x60; so the owner confirms the charge first.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { BillingUpdateSeatsRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new BillingApi(config);

  const body = {
    // UpdateSeatsDto
    updateSeatsDto: ...,
  } satisfies BillingUpdateSeatsRequest;

  try {
    const data = await api.billingUpdateSeats(body);
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
| **updateSeatsDto** | [UpdateSeatsDto](UpdateSeatsDto.md) |  | |

### Return type

[**BillingSummaryDto**](BillingSummaryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated billing summary |  -  |
| **403** | Not the workspace owner |  -  |
| **404** | No subscription to add seats to |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicCheckoutCheckout

> BillingRedirectDto publicCheckoutCheckout(anonymousCheckoutDto)

Start a checkout without an account

Creates a Stripe-hosted Checkout Session for a visitor who has not signed up, and returns its URL for a full-page redirect. Stripe collects the email; the resulting subscription is attached to an account provisioned for that address when the webhook arrives, and the buyer proves ownership of it by signing in afterwards. Seats are charged as requested, floored at what the plan bundles.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { PublicCheckoutCheckoutRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new BillingApi();

  const body = {
    // AnonymousCheckoutDto
    anonymousCheckoutDto: ...,
  } satisfies PublicCheckoutCheckoutRequest;

  try {
    const data = await api.publicCheckoutCheckout(body);
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
| **anonymousCheckoutDto** | [AnonymousCheckoutDto](AnonymousCheckoutDto.md) |  | |

### Return type

[**BillingRedirectDto**](BillingRedirectDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout URL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicCheckoutStatus

> AnonymousCheckoutStatusDto publicCheckoutStatus(sessionId)

Describe an anonymous checkout

Returns the plan, seat count, and email for a checkout started without an account, so the post-payment page can confirm what was bought and point the buyer at the right sign-in address. Sessions that were not started anonymously are reported as not found.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@signvoy/react';
import type { PublicCheckoutStatusRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const api = new BillingApi();

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies PublicCheckoutStatusRequest;

  try {
    const data = await api.publicCheckoutStatus(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AnonymousCheckoutStatusDto**](AnonymousCheckoutStatusDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout summary |  -  |
| **404** | Unknown checkout session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

