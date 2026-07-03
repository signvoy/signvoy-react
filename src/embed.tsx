"use client";

import { forwardRef } from "react";
import type { CSSProperties } from "react";
import { useSignvoyEmbed, type SignvoyEmbedHandlers } from "./useSignvoyEmbed";

export interface SignvoyEmbedProps extends SignvoyEmbedHandlers {
  /**
   * The scoped signing URL returned by the Signvoy embed-session endpoint
   * (`POST /v1/embed/session`). Mint this on your server with `@signvoy/node`.
   */
  url: string;
  /**
   * Restrict which origin may post events to the host page. Defaults to the
   * provider's `signingOrigin`, then to the origin of `url`.
   */
  signingOrigin?: string;
  /** Accessible title for the iframe. Defaults to "Signvoy document signing". */
  title?: string;
  className?: string;
  style?: CSSProperties;
  /** iframe width. Defaults to "100%". */
  width?: string | number;
  /** iframe height. Defaults to "100%". */
  height?: string | number;
  /**
   * iframe `allow` attribute. Defaults to enabling clipboard + camera, which
   * some signing flows use for pasting and ID capture.
   */
  allow?: string;
  /**
   * iframe `sandbox` attribute. Defaults to the permissions the signing UI
   * needs (scripts, same-origin, forms, popups, top-level navigation). Pass
   * `null` to omit the attribute entirely.
   */
  sandbox?: string | null;
}

const DEFAULT_SANDBOX =
  "allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation";

const defaultStyle: CSSProperties = { border: "none", width: "100%", height: "100%" };

/**
 * Renders the Signvoy embedded signing experience in a sandboxed iframe and
 * surfaces signing lifecycle events (`onReady`, `onComplete`, `onDecline`,
 * `onError`) as React callbacks.
 *
 * @example
 * ```tsx
 * <SignvoyEmbed
 *   url={session.url}
 *   onComplete={(e) => router.push(`/signed/${e.documentId}`)}
 *   onDecline={() => toast("Signing was declined")}
 *   style={{ height: 720 }}
 * />
 * ```
 */
export const SignvoyEmbed = forwardRef<HTMLIFrameElement, SignvoyEmbedProps>(
  function SignvoyEmbed(props, ref) {
    const {
      url,
      signingOrigin,
      title = "Signvoy document signing",
      className,
      style,
      width,
      height,
      allow = "clipboard-write; camera",
      sandbox = DEFAULT_SANDBOX,
      onReady,
      onComplete,
      onDecline,
      onError,
      onEvent,
    } = props;

    useSignvoyEmbed({
      url,
      signingOrigin,
      onReady,
      onComplete,
      onDecline,
      onError,
      onEvent,
    });

    const mergedStyle: CSSProperties = {
      ...defaultStyle,
      ...(width != null ? { width } : null),
      ...(height != null ? { height } : null),
      ...style,
    };

    return (
      <iframe
        ref={ref}
        src={url}
        title={title}
        className={className}
        style={mergedStyle}
        allow={allow}
        sandbox={sandbox ?? undefined}
      />
    );
  },
);
