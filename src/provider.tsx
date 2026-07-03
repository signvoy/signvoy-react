/**
 * Optional configuration context for the Signvoy React SDK.
 *
 * A provider is NOT required to use `<SignvoyEmbed />` — the component works
 * standalone. Wrap your app in `<SignvoyProvider>` only when you want to share
 * defaults (such as a self-hosted signing origin) across many embeds.
 *
 * Note: this SDK is browser-safe by design. It never touches your secret API
 * key — mint embed session URLs on your server with `@signvoy/node`, then pass
 * the resulting `url` to `<SignvoyEmbed />`.
 */

"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

export interface SignvoyConfig {
  /**
   * Origin that serves the embedded signing UI. Incoming `postMessage` events
   * are validated against this origin. Defaults to the origin of each embed
   * session URL, which is correct for signvoy.com-hosted signing.
   */
  signingOrigin?: string;
}

const SignvoyContext = createContext<SignvoyConfig | null>(null);

export interface SignvoyProviderProps extends SignvoyConfig {
  children: ReactNode;
}

export function SignvoyProvider({ children, signingOrigin }: SignvoyProviderProps) {
  const value = useMemo<SignvoyConfig>(() => ({ signingOrigin }), [signingOrigin]);
  return <SignvoyContext.Provider value={value}>{children}</SignvoyContext.Provider>;
}

/** Read the nearest `SignvoyProvider` config, or an empty config if unwrapped. */
export function useSignvoyConfig(): SignvoyConfig {
  return useContext(SignvoyContext) ?? {};
}
