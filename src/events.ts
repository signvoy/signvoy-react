/**
 * Event protocol for the embedded Signvoy signing experience.
 *
 * The signing iframe communicates with the host page via `window.postMessage`.
 * Every message is a JSON object whose `type` is namespaced with `signvoy:` so
 * it can be safely distinguished from unrelated messages on the same window.
 */

export type SignvoyEmbedEventType =
  | "signvoy:ready"
  | "signvoy:completed"
  | "signvoy:declined"
  | "signvoy:error";

interface BaseEmbedEvent {
  type: SignvoyEmbedEventType;
}

/** The signing UI has finished loading and is ready for the signer. */
export interface SignvoyReadyEvent extends BaseEmbedEvent {
  type: "signvoy:ready";
}

/** The recipient completed signing. */
export interface SignvoyCompletedEvent extends BaseEmbedEvent {
  type: "signvoy:completed";
  documentId: string;
  documentRecipientId: string;
}

/** The recipient declined to sign. */
export interface SignvoyDeclinedEvent extends BaseEmbedEvent {
  type: "signvoy:declined";
  documentId: string;
  documentRecipientId: string;
  reason?: string;
}

/** An unrecoverable error occurred inside the signing UI. */
export interface SignvoyEmbedErrorEvent extends BaseEmbedEvent {
  type: "signvoy:error";
  message: string;
  code?: string;
}

/** Discriminated union of every event the signing iframe can emit. */
export type SignvoyEmbedEvent =
  | SignvoyReadyEvent
  | SignvoyCompletedEvent
  | SignvoyDeclinedEvent
  | SignvoyEmbedErrorEvent;

const KNOWN_TYPES = new Set<SignvoyEmbedEventType>([
  "signvoy:ready",
  "signvoy:completed",
  "signvoy:declined",
  "signvoy:error",
]);

/**
 * Narrow an arbitrary `MessageEvent.data` payload to a `SignvoyEmbedEvent`.
 * Returns `null` for anything that isn't a recognised Signvoy event so callers
 * can safely ignore unrelated `postMessage` traffic.
 */
export function parseEmbedEvent(data: unknown): SignvoyEmbedEvent | null {
  if (typeof data !== "object" || data === null) return null;
  const type = (data as { type?: unknown }).type;
  if (typeof type !== "string" || !KNOWN_TYPES.has(type as SignvoyEmbedEventType)) {
    return null;
  }
  return data as SignvoyEmbedEvent;
}
