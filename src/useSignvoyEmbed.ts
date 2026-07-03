"use client";

import { useEffect, useRef, useState } from "react";
import {
  parseEmbedEvent,
  type SignvoyCompletedEvent,
  type SignvoyDeclinedEvent,
  type SignvoyEmbedErrorEvent,
  type SignvoyEmbedEvent,
  type SignvoyReadyEvent,
} from "./events";
import { useSignvoyConfig } from "./provider";

export type SignvoyEmbedStatus =
  | "loading"
  | "ready"
  | "completed"
  | "declined"
  | "error";

export interface SignvoyEmbedHandlers {
  /** Fired once when the signing UI has loaded. */
  onReady?: (event: SignvoyReadyEvent) => void;
  /** Fired when the recipient completes signing. */
  onComplete?: (event: SignvoyCompletedEvent) => void;
  /** Fired when the recipient declines to sign. */
  onDecline?: (event: SignvoyDeclinedEvent) => void;
  /** Fired on an unrecoverable error inside the signing UI. */
  onError?: (event: SignvoyEmbedErrorEvent) => void;
  /** Fired for every recognised event, after the specific handler above. */
  onEvent?: (event: SignvoyEmbedEvent) => void;
}

export interface UseSignvoyEmbedOptions extends SignvoyEmbedHandlers {
  /** The scoped signing URL returned by the Signvoy embed-session endpoint. */
  url: string | null | undefined;
  /**
   * Override the origin that events must originate from. Defaults to the
   * provider's `signingOrigin`, then to the origin of `url`.
   */
  signingOrigin?: string;
}

export interface UseSignvoyEmbedResult {
  status: SignvoyEmbedStatus;
  error: SignvoyEmbedErrorEvent | null;
}

function resolveOrigin(url: string | null | undefined, override?: string): string | null {
  if (override) return override;
  if (!url) return null;
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

/**
 * Headless embedded-signing controller. Listens for `postMessage` events from
 * the Signvoy signing iframe, validates their origin, and exposes the current
 * status. Use this directly when you render your own iframe; most apps should
 * use the `<SignvoyEmbed />` component, which wraps this hook.
 */
export function useSignvoyEmbed(options: UseSignvoyEmbedOptions): UseSignvoyEmbedResult {
  const { url, signingOrigin } = options;
  const config = useSignvoyConfig();
  const expectedOrigin = resolveOrigin(url, signingOrigin ?? config.signingOrigin);

  const [status, setStatus] = useState<SignvoyEmbedStatus>("loading");
  const [error, setError] = useState<SignvoyEmbedErrorEvent | null>(null);

  // Keep the latest handlers in a ref so the effect doesn't resubscribe on
  // every render when callers pass inline functions.
  const handlers = useRef(options);
  handlers.current = options;

  useEffect(() => {
    setStatus("loading");
    setError(null);
    if (!expectedOrigin) return;

    function onMessage(event: MessageEvent) {
      if (event.origin !== expectedOrigin) return;
      const parsed = parseEmbedEvent(event.data);
      if (!parsed) return;

      const h = handlers.current;
      switch (parsed.type) {
        case "signvoy:ready":
          setStatus("ready");
          h.onReady?.(parsed);
          break;
        case "signvoy:completed":
          setStatus("completed");
          h.onComplete?.(parsed);
          break;
        case "signvoy:declined":
          setStatus("declined");
          h.onDecline?.(parsed);
          break;
        case "signvoy:error":
          setStatus("error");
          setError(parsed);
          h.onError?.(parsed);
          break;
      }
      h.onEvent?.(parsed);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [expectedOrigin]);

  return { status, error };
}
