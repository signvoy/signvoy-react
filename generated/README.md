# @signvoy/react@0.1.0

A TypeScript SDK client for the api.signvoy.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @signvoy/react --save
```

Next, try it out.


```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/react';
import type { ApiKeysCreateRequest } from '@signvoy/react';

async function example() {
  console.log("🚀 Testing @signvoy/react SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  const body = {
    // CreateApiKeyDto
    createApiKeyDto: ...,
  } satisfies ApiKeysCreateRequest;

  try {
    const data = await api.apiKeysCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.signvoy.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*APIKeysApi* | [**apiKeysCreate**](docs/APIKeysApi.md#apikeyscreate) | **POST** /v1/api-keys | Create an API key
*APIKeysApi* | [**apiKeysList**](docs/APIKeysApi.md#apikeyslist) | **GET** /v1/api-keys | List API keys
*APIKeysApi* | [**apiKeysRevoke**](docs/APIKeysApi.md#apikeysrevoke) | **DELETE** /v1/api-keys/{id} | Revoke an API key
*AgentApi* | [**agentChat**](docs/AgentApi.md#agentchat) | **POST** /v1/agent/chat | Stream a chat turn (Server-Sent Events)
*AgentApi* | [**agentCreateSession**](docs/AgentApi.md#agentcreatesession) | **POST** /v1/agent/sessions | Create a new agent conversation
*AgentApi* | [**agentDeleteSession**](docs/AgentApi.md#agentdeletesession) | **DELETE** /v1/agent/sessions/{id} | Delete a conversation
*AgentApi* | [**agentDetectFields**](docs/AgentApi.md#agentdetectfields) | **POST** /v1/agent/detect-fields | Detect fields on a draft PDF (AcroForm + text)
*AgentApi* | [**agentGenerate**](docs/AgentApi.md#agentgenerate) | **POST** /v1/agent/generate | Generate a new template draft from a prompt
*AgentApi* | [**agentGetSession**](docs/AgentApi.md#agentgetsession) | **GET** /v1/agent/sessions/{id} | Load a conversation with rehydrated messages
*AgentApi* | [**agentListSessions**](docs/AgentApi.md#agentlistsessions) | **GET** /v1/agent/sessions | List agent conversations (optionally by template)
*BillingApi* | [**billingChangePlan**](docs/BillingApi.md#billingchangeplan) | **PATCH** /v1/billing/plan | Change plan or interval
*BillingApi* | [**billingCheckout**](docs/BillingApi.md#billingcheckout) | **POST** /v1/billing/checkout | Start a checkout
*BillingApi* | [**billingDescribeCheckout**](docs/BillingApi.md#billingdescribecheckout) | **GET** /v1/billing/checkout/{sessionId} | Describe a completed checkout
*BillingApi* | [**billingPortal**](docs/BillingApi.md#billingportal) | **POST** /v1/billing/portal | Open the customer portal
*BillingApi* | [**billingSummary**](docs/BillingApi.md#billingsummary) | **GET** /v1/billing | Get billing summary
*BillingApi* | [**billingUpdateSeats**](docs/BillingApi.md#billingupdateseats) | **PATCH** /v1/billing/seats | Set the seat count
*BillingApi* | [**publicCheckoutCheckout**](docs/BillingApi.md#publiccheckoutcheckout) | **POST** /v1/billing/public/checkout | Start a checkout without an account
*BillingApi* | [**publicCheckoutStatus**](docs/BillingApi.md#publiccheckoutstatus) | **GET** /v1/billing/public/checkout/{sessionId} | Describe an anonymous checkout
*ContactsApi* | [**contactsCreate**](docs/ContactsApi.md#contactscreate) | **POST** /v1/contacts | Create a contact
*ContactsApi* | [**contactsFindOne**](docs/ContactsApi.md#contactsfindone) | **GET** /v1/contacts/{id} | Get a contact
*ContactsApi* | [**contactsList**](docs/ContactsApi.md#contactslist) | **GET** /v1/contacts | List contacts
*ContactsApi* | [**contactsListDocuments**](docs/ContactsApi.md#contactslistdocuments) | **GET** /v1/contacts/{id}/documents | List documents involving a contact
*ContactsApi* | [**contactsRemove**](docs/ContactsApi.md#contactsremove) | **DELETE** /v1/contacts/{id} | Delete a contact permanently
*ContactsApi* | [**contactsSearch**](docs/ContactsApi.md#contactssearch) | **GET** /v1/contacts/search | Search contacts for a recipient picker
*ContactsApi* | [**contactsUpdate**](docs/ContactsApi.md#contactsupdate) | **PATCH** /v1/contacts/{id} | Update, archive or restore a contact
*DocumentsApi* | [**documentsAudit**](docs/DocumentsApi.md#documentsaudit) | **GET** /v1/documents/{id}/audit | Get document audit trail
*DocumentsApi* | [**documentsCertificate**](docs/DocumentsApi.md#documentscertificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL
*DocumentsApi* | [**documentsCreate**](docs/DocumentsApi.md#documentscreate) | **POST** /v1/documents | Create a new document
*DocumentsApi* | [**documentsFindOne**](docs/DocumentsApi.md#documentsfindone) | **GET** /v1/documents/{id} | Get document by ID
*DocumentsApi* | [**documentsList**](docs/DocumentsApi.md#documentslist) | **GET** /v1/documents | List documents
*DocumentsApi* | [**documentsRemind**](docs/DocumentsApi.md#documentsremind) | **POST** /v1/documents/{id}/remind | Send a manual reminder
*DocumentsApi* | [**documentsRemindRecipient**](docs/DocumentsApi.md#documentsremindrecipient) | **POST** /v1/documents/{id}/recipients/{recipientId}/remind | Send a reminder to a specific recipient
*DocumentsApi* | [**documentsRemove**](docs/DocumentsApi.md#documentsremove) | **DELETE** /v1/documents/{id} | Delete document
*DocumentsApi* | [**documentsSend**](docs/DocumentsApi.md#documentssend) | **POST** /v1/documents/{id}/send | Send document for signing
*DocumentsApi* | [**documentsSignedPdf**](docs/DocumentsApi.md#documentssignedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL
*DocumentsApi* | [**documentsUpdate**](docs/DocumentsApi.md#documentsupdate) | **PATCH** /v1/documents/{id} | Update document
*DocumentsApi* | [**documentsVoidDoc**](docs/DocumentsApi.md#documentsvoiddoc) | **POST** /v1/documents/{id}/void | Void document
*EmbedApi* | [**embedCreateSession**](docs/EmbedApi.md#embedcreatesession) | **POST** /v1/embed/session | Create an embed session
*HealthApi* | [**healthCheck**](docs/HealthApi.md#healthcheck) | **GET** /v1/health | Health check
*MCPApi* | [**mcpGrantsCreate**](docs/MCPApi.md#mcpgrantscreate) | **POST** /v1/mcp-grants | Authorise an OAuth client to call the MCP endpoint
*MCPApi* | [**mcpGrantsList**](docs/MCPApi.md#mcpgrantslist) | **GET** /v1/mcp-grants | List active MCP grants for the current user
*MCPApi* | [**mcpGrantsRevoke**](docs/MCPApi.md#mcpgrantsrevoke) | **DELETE** /v1/mcp-grants/{id} | Revoke an MCP grant
*NotificationsApi* | [**notificationsList**](docs/NotificationsApi.md#notificationslist) | **GET** /v1/notifications | List notifications for the current user
*NotificationsApi* | [**notificationsMarkAllRead**](docs/NotificationsApi.md#notificationsmarkallread) | **POST** /v1/notifications/read-all | Mark all notifications as read
*NotificationsApi* | [**notificationsMarkRead**](docs/NotificationsApi.md#notificationsmarkread) | **PATCH** /v1/notifications/{id}/read | Mark a notification as read
*NotificationsApi* | [**notificationsUnreadCount**](docs/NotificationsApi.md#notificationsunreadcount) | **GET** /v1/notifications/unread-count | Get the unread notification count
*SignaturesApi* | [**userSignaturesCreate**](docs/SignaturesApi.md#usersignaturescreate) | **POST** /v1/users/me/signatures | Save a signature
*SignaturesApi* | [**userSignaturesList**](docs/SignaturesApi.md#usersignatureslist) | **GET** /v1/users/me/signatures | List the current user\&#39;s saved signatures
*SignaturesApi* | [**userSignaturesRemove**](docs/SignaturesApi.md#usersignaturesremove) | **DELETE** /v1/users/me/signatures/{id} | Delete a signature
*SignaturesApi* | [**userSignaturesUpdate**](docs/SignaturesApi.md#usersignaturesupdate) | **PATCH** /v1/users/me/signatures/{id} | Update a signature
*SigningApi* | [**signingDecline**](docs/SigningApi.md#signingdecline) | **POST** /v1/sign/{token}/decline | Decline to sign
*SigningApi* | [**signingDocumentUrl**](docs/SigningApi.md#signingdocumenturl) | **GET** /v1/sign/{token}/document | Get a download link for the document
*SigningApi* | [**signingGetContext**](docs/SigningApi.md#signinggetcontext) | **GET** /v1/sign/{token} | Get signing context
*SigningApi* | [**signingGetDraft**](docs/SigningApi.md#signinggetdraft) | **GET** /v1/sign/{token}/draft | Get saved draft
*SigningApi* | [**signingSaveDraft**](docs/SigningApi.md#signingsavedraft) | **POST** /v1/sign/{token}/draft | Save draft
*SigningApi* | [**signingSubmit**](docs/SigningApi.md#signingsubmit) | **POST** /v1/sign/{token}/submit | Submit signature
*SubmissionsApi* | [**submissionsList**](docs/SubmissionsApi.md#submissionslist) | **GET** /v1/submissions | List submissions for a document
*TemplateGalleryApi* | [**templateGalleryFindOne**](docs/TemplateGalleryApi.md#templategalleryfindone) | **GET** /v1/template-gallery/{slug} | Get a single gallery template
*TemplateGalleryApi* | [**templateGalleryInstantiate**](docs/TemplateGalleryApi.md#templategalleryinstantiate) | **POST** /v1/template-gallery/{slug}/instantiate | Instantiate a gallery template into the workspace
*TemplateGalleryApi* | [**templateGalleryList**](docs/TemplateGalleryApi.md#templategallerylist) | **GET** /v1/template-gallery | List gallery templates
*TemplateVersionsApi* | [**templateVersionsDiscardDraft**](docs/TemplateVersionsApi.md#templateversionsdiscarddraft) | **DELETE** /v1/templates/{templateId}/draft | Discard the current draft
*TemplateVersionsApi* | [**templateVersionsEnsureDraft**](docs/TemplateVersionsApi.md#templateversionsensuredraft) | **POST** /v1/templates/{templateId}/draft/ensure | Lazily create a draft from the published version (or empty)
*TemplateVersionsApi* | [**templateVersionsFindOne**](docs/TemplateVersionsApi.md#templateversionsfindone) | **GET** /v1/templates/{templateId}/versions/{versionId} | Get a specific version (read-only)
*TemplateVersionsApi* | [**templateVersionsGetDraft**](docs/TemplateVersionsApi.md#templateversionsgetdraft) | **GET** /v1/templates/{templateId}/draft | Get current draft version
*TemplateVersionsApi* | [**templateVersionsListVersions**](docs/TemplateVersionsApi.md#templateversionslistversions) | **GET** /v1/templates/{templateId}/versions | List all published + draft versions
*TemplateVersionsApi* | [**templateVersionsPublish**](docs/TemplateVersionsApi.md#templateversionspublish) | **POST** /v1/templates/{templateId}/draft/publish | Publish the draft
*TemplateVersionsApi* | [**templateVersionsUpsertDraft**](docs/TemplateVersionsApi.md#templateversionsupsertdraft) | **PATCH** /v1/templates/{templateId}/draft | Upsert draft content
*TemplatesApi* | [**templatesArchive**](docs/TemplatesApi.md#templatesarchive) | **POST** /v1/templates/{id}/archive | Archive template
*TemplatesApi* | [**templatesCreate**](docs/TemplatesApi.md#templatescreate) | **POST** /v1/templates | Create a new template
*TemplatesApi* | [**templatesFindOne**](docs/TemplatesApi.md#templatesfindone) | **GET** /v1/templates/{id} | Get template by id
*TemplatesApi* | [**templatesGetPdfUrl**](docs/TemplatesApi.md#templatesgetpdfurl) | **GET** /v1/templates/{id}/pdf | Get a presigned PDF URL for the latest version
*TemplatesApi* | [**templatesList**](docs/TemplatesApi.md#templateslist) | **GET** /v1/templates | List templates in the workspace
*TemplatesApi* | [**templatesRemove**](docs/TemplatesApi.md#templatesremove) | **DELETE** /v1/templates/{id} | Delete template
*TemplatesApi* | [**templatesUnarchive**](docs/TemplatesApi.md#templatesunarchive) | **POST** /v1/templates/{id}/unarchive | Unarchive template
*TemplatesApi* | [**templatesUpdate**](docs/TemplatesApi.md#templatesupdate) | **PATCH** /v1/templates/{id} | Update template metadata (name only)
*UsersApi* | [**usersMe**](docs/UsersApi.md#usersme) | **GET** /v1/users/me | Get the current user\&#39;s profile, creating it on first call
*UsersApi* | [**usersUpdateMe**](docs/UsersApi.md#usersupdateme) | **PATCH** /v1/users/me | Update the current user\&#39;s profile and onboarding progress
*WebhooksApi* | [**webhooksCreate**](docs/WebhooksApi.md#webhookscreate) | **POST** /v1/webhooks | Create a webhook endpoint
*WebhooksApi* | [**webhooksGet**](docs/WebhooksApi.md#webhooksget) | **GET** /v1/webhooks/{id} | Get a single webhook endpoint
*WebhooksApi* | [**webhooksList**](docs/WebhooksApi.md#webhookslist) | **GET** /v1/webhooks | List webhook endpoints for the workspace
*WebhooksApi* | [**webhooksListDeliveries**](docs/WebhooksApi.md#webhookslistdeliveries) | **GET** /v1/webhooks/{id}/deliveries | List recent deliveries for an endpoint
*WebhooksApi* | [**webhooksPing**](docs/WebhooksApi.md#webhooksping) | **POST** /v1/webhooks/{id}/ping | Send a test event
*WebhooksApi* | [**webhooksRemove**](docs/WebhooksApi.md#webhooksremove) | **DELETE** /v1/webhooks/{id} | Delete a webhook endpoint
*WebhooksApi* | [**webhooksRetryDelivery**](docs/WebhooksApi.md#webhooksretrydelivery) | **POST** /v1/webhooks/{id}/deliveries/{deliveryId}/retry | Manually retry a failed delivery
*WebhooksApi* | [**webhooksRotateSecret**](docs/WebhooksApi.md#webhooksrotatesecret) | **POST** /v1/webhooks/{id}/rotate-secret | Rotate the signing secret
*WebhooksApi* | [**webhooksUpdate**](docs/WebhooksApi.md#webhooksupdate) | **PATCH** /v1/webhooks/{id} | Update a webhook endpoint
*WorkspacesApi* | [**workspaceBrandingGetAsset**](docs/WorkspacesApi.md#workspacebrandinggetasset) | **GET** /v1/workspaces/{id}/branding/{asset} | Get a workspace branding image
*WorkspacesApi* | [**workspaceBrandingRemoveAsset**](docs/WorkspacesApi.md#workspacebrandingremoveasset) | **DELETE** /v1/workspaces/{id}/branding/{asset} | Remove a workspace branding image
*WorkspacesApi* | [**workspaceBrandingUploadAsset**](docs/WorkspacesApi.md#workspacebrandinguploadasset) | **POST** /v1/workspaces/{id}/branding/{asset} | Upload a workspace branding image
*WorkspacesApi* | [**workspacesCreate**](docs/WorkspacesApi.md#workspacescreate) | **POST** /v1/workspaces | Create a new workspace
*WorkspacesApi* | [**workspacesFindOne**](docs/WorkspacesApi.md#workspacesfindone) | **GET** /v1/workspaces/{id} | Get workspace by ID
*WorkspacesApi* | [**workspacesInvite**](docs/WorkspacesApi.md#workspacesinvite) | **POST** /v1/workspaces/{id}/members | Invite member to workspace
*WorkspacesApi* | [**workspacesList**](docs/WorkspacesApi.md#workspaceslist) | **GET** /v1/workspaces | List workspaces
*WorkspacesApi* | [**workspacesListInvitations**](docs/WorkspacesApi.md#workspaceslistinvitations) | **GET** /v1/workspaces/{id}/invitations | List pending invitations
*WorkspacesApi* | [**workspacesListMembers**](docs/WorkspacesApi.md#workspaceslistmembers) | **GET** /v1/workspaces/{id}/members | List workspace members
*WorkspacesApi* | [**workspacesRemove**](docs/WorkspacesApi.md#workspacesremove) | **DELETE** /v1/workspaces/{id} | Delete workspace
*WorkspacesApi* | [**workspacesRemoveMember**](docs/WorkspacesApi.md#workspacesremovemember) | **DELETE** /v1/workspaces/{id}/members/{userId} | Remove member from workspace
*WorkspacesApi* | [**workspacesRevokeInvitation**](docs/WorkspacesApi.md#workspacesrevokeinvitation) | **DELETE** /v1/workspaces/{id}/invitations/{invitationId} | Revoke invitation
*WorkspacesApi* | [**workspacesUpdate**](docs/WorkspacesApi.md#workspacesupdate) | **PATCH** /v1/workspaces/{id} | Update workspace
*WorkspacesApi* | [**workspacesUpdateMember**](docs/WorkspacesApi.md#workspacesupdatemember) | **PATCH** /v1/workspaces/{id}/members/{userId} | Update member role


### Models

- [AnonymousCheckoutDto](docs/AnonymousCheckoutDto.md)
- [AnonymousCheckoutStatusDto](docs/AnonymousCheckoutStatusDto.md)
- [ApiKeyDto](docs/ApiKeyDto.md)
- [AuditEventDto](docs/AuditEventDto.md)
- [BillingDocumentsDto](docs/BillingDocumentsDto.md)
- [BillingFeaturesDto](docs/BillingFeaturesDto.md)
- [BillingPlanOptionDto](docs/BillingPlanOptionDto.md)
- [BillingRedirectDto](docs/BillingRedirectDto.md)
- [BillingSeatsDto](docs/BillingSeatsDto.md)
- [BillingSummaryDto](docs/BillingSummaryDto.md)
- [BillingWorkspacesDto](docs/BillingWorkspacesDto.md)
- [CheckoutReceiptDto](docs/CheckoutReceiptDto.md)
- [ContactDocumentDto](docs/ContactDocumentDto.md)
- [ContactDto](docs/ContactDto.md)
- [ContactListDto](docs/ContactListDto.md)
- [ContactSuggestionDto](docs/ContactSuggestionDto.md)
- [CreateApiKeyDto](docs/CreateApiKeyDto.md)
- [CreateContactDto](docs/CreateContactDto.md)
- [CreateDocumentDto](docs/CreateDocumentDto.md)
- [CreateDocumentRecipientDto](docs/CreateDocumentRecipientDto.md)
- [CreateEmbedSessionDto](docs/CreateEmbedSessionDto.md)
- [CreateTemplateDto](docs/CreateTemplateDto.md)
- [CreateTemplateResponseDto](docs/CreateTemplateResponseDto.md)
- [CreateUserSignatureDto](docs/CreateUserSignatureDto.md)
- [CreateWebhookDto](docs/CreateWebhookDto.md)
- [CreateWorkspaceDto](docs/CreateWorkspaceDto.md)
- [CreatedApiKeyDto](docs/CreatedApiKeyDto.md)
- [DeclineDto](docs/DeclineDto.md)
- [DocumentDto](docs/DocumentDto.md)
- [DocumentDtoPreviewPinsInner](docs/DocumentDtoPreviewPinsInner.md)
- [DocumentDtoSendBlockersInner](docs/DocumentDtoSendBlockersInner.md)
- [DocumentRecipientDto](docs/DocumentRecipientDto.md)
- [EmbedSessionResponseDto](docs/EmbedSessionResponseDto.md)
- [ErrorResponseDto](docs/ErrorResponseDto.md)
- [ErrorResponseDtoMessage](docs/ErrorResponseDtoMessage.md)
- [ExpirySettingsDto](docs/ExpirySettingsDto.md)
- [GalleryRecipientDto](docs/GalleryRecipientDto.md)
- [GalleryTemplateDto](docs/GalleryTemplateDto.md)
- [HealthCheck200Response](docs/HealthCheck200Response.md)
- [InviteMemberDto](docs/InviteMemberDto.md)
- [NotificationDto](docs/NotificationDto.md)
- [ReminderSettingsDto](docs/ReminderSettingsDto.md)
- [SaveDraftDto](docs/SaveDraftDto.md)
- [SelectPlanDto](docs/SelectPlanDto.md)
- [SubmitSigningDto](docs/SubmitSigningDto.md)
- [TemplateUrlResponseDto](docs/TemplateUrlResponseDto.md)
- [TemplateVersionDto](docs/TemplateVersionDto.md)
- [TemplateWithVersionsDto](docs/TemplateWithVersionsDto.md)
- [UnreadCountDto](docs/UnreadCountDto.md)
- [UpdateContactDto](docs/UpdateContactDto.md)
- [UpdateDocumentDto](docs/UpdateDocumentDto.md)
- [UpdateMemberDto](docs/UpdateMemberDto.md)
- [UpdateSeatsDto](docs/UpdateSeatsDto.md)
- [UpdateTemplateDto](docs/UpdateTemplateDto.md)
- [UpdateUserDto](docs/UpdateUserDto.md)
- [UpdateUserSignatureDto](docs/UpdateUserSignatureDto.md)
- [UpdateWebhookDto](docs/UpdateWebhookDto.md)
- [UpdateWorkspaceDto](docs/UpdateWorkspaceDto.md)
- [UrlResponseDto](docs/UrlResponseDto.md)
- [UserDemographicsDto](docs/UserDemographicsDto.md)
- [UserProfileDto](docs/UserProfileDto.md)
- [UserSignatureDto](docs/UserSignatureDto.md)
- [WebhookDeliveryDto](docs/WebhookDeliveryDto.md)
- [WebhookEndpointDto](docs/WebhookEndpointDto.md)
- [WebhookEndpointWithSecretDto](docs/WebhookEndpointWithSecretDto.md)

### Authorization


Authentication schemes defined for the API:
<a id="api-key"></a>
#### api-key


- **Type**: HTTP Bearer Token authentication (API key)
<a id="clerk-jwt"></a>
#### clerk-jwt


- **Type**: HTTP Bearer Token authentication (Clerk JWT)
<a id="workspace-id"></a>
#### workspace-id


- **Type**: API key
- **API key parameter name**: `X-Workspace-Id`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
- Package version: `0.1.0`
- Generator version: `7.27.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
