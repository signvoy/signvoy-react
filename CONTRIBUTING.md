# Contributing to @signvoy/react

Thank you for your interest! Here's how the repo is structured:

## Repository layout

```
src/           Hand-authored React surface — <SignvoyEmbed />, hooks, provider
generated/     Auto-generated from the OpenAPI spec (do NOT edit manually)
.openapi-generator-ignore  Protects src/ from being overwritten during generation
```

## What to edit

- **`src/`** — the embed component, hooks, provider, and event types. PRs here welcome.
- **`generated/`** — regenerated automatically when the Signvoy API spec changes. Don't edit; your changes will be overwritten on the next generation run.

## Development

```bash
pnpm install
pnpm build     # tsc
pnpm test      # vitest
pnpm lint      # eslint
```

## Reporting bugs

Open an issue using the **Bug report** template. Include:
- SDK version (`@signvoy/react@x.y.z`)
- React version
- Minimal reproduction

## Requesting features / API gaps

If the gap is in the generated client surface, it may be an OpenAPI spec issue — file it against the API docs at [signvoy.com/developers](https://www.signvoy.com/developers).

## Pull requests

- Target `main`
- Run `pnpm test && pnpm lint` before opening the PR
- Keep PRs focused; one feature / fix per PR
