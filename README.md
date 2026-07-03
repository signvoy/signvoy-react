# @signvoy/react

Official React SDK for the [Signvoy](https://signvoy.com) e-signature API. Drop
the embedded signing experience into any React app and react to signing events
with typed callbacks.

[![npm](https://img.shields.io/npm/v/@signvoy/react)](https://www.npmjs.com/package/@signvoy/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Installation

```bash
npm install @signvoy/react
# or
pnpm add @signvoy/react
```

`react >= 18` is a peer dependency.

## How it works

`@signvoy/react` is **browser-safe** — it never handles your secret API key.
The flow is:

1. On your **server**, mint a scoped, single-use signing URL with
   [`@signvoy/node`](https://github.com/signvoy/signvoy-node) via
   `POST /v1/embed/session`.
2. Send that `url` to the browser.
3. Render `<SignvoyEmbed url={url} />` and handle lifecycle events.

## Quick start

```tsx
import { SignvoyEmbed } from "@signvoy/react";

export function SignRoom({ sessionUrl }: { sessionUrl: string }) {
  return (
    <SignvoyEmbed
      url={sessionUrl}
      style={{ height: 720, borderRadius: 12 }}
      onReady={() => console.log("signing UI loaded")}
      onComplete={(e) => {
        console.log("signed!", e.documentId);
      }}
      onDecline={(e) => console.log("declined", e.reason)}
      onError={(e) => console.error(e.message)}
    />
  );
}
```

### Minting the session URL (server side)

```ts
import Signvoy from "@signvoy/node";

const signvoy = new Signvoy({
  apiKey: process.env.SIGNVOY_API_KEY!,
  workspaceId: process.env.SIGNVOY_WORKSPACE_ID!,
});

// e.g. in an API route
const session = await signvoy.request("POST", "/embed/session", {
  documentId,
  documentRecipientId,
});
// → { url, expiresAt, documentId, documentRecipientId }
```

## Headless usage

Render your own iframe and drive it with the hook:

```tsx
import { useSignvoyEmbed } from "@signvoy/react";

function CustomEmbed({ url }: { url: string }) {
  const { status, error } = useSignvoyEmbed({
    url,
    onComplete: (e) => console.log("done", e.documentId),
  });

  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "error" && <p>{error?.message}</p>}
      <iframe src={url} title="Signing" />
    </>
  );
}
```

## Shared configuration (optional)

```tsx
import { SignvoyProvider } from "@signvoy/react";

<SignvoyProvider signingOrigin="https://sign.acme.com">
  <App />
</SignvoyProvider>;
```

`signingOrigin` restricts which origin may post events to your page. It's only
needed when you self-host the signing UI; for signvoy.com-hosted signing the
origin is derived from each session URL automatically.

## Documentation

- [Embedded signing guide](https://www.signvoy.com/developers/embed)
- [Quickstart guide](https://www.signvoy.com/developers/quickstart)
- [API Reference](https://www.signvoy.com/developers/reference)

## Get an API key

Sign up at [signvoy.com](https://signvoy.com) → Workspace Settings → API Keys.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The `generated/` directory is
auto-generated from the OpenAPI spec — edit `src/` instead.

## License

MIT — see [LICENSE](LICENSE).
