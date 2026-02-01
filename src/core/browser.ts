// Browser adapter. Re-export core utilities; avoid Node-only APIs.
export {
  add,
  adder,
  divider,
  getRandomId,
  greet,
  multiplier,
  squarer,
  subtracter,
} from "./internal";

/**
 * Generates a deterministic random ID combining timestamp and random parts.
 * @returns A string ID in format "timestamp-randompart"
 */
export function getSecureRandomId(): string {
  const timePart = Date.now().toString(36);
  const array = new Uint8Array(12);
  crypto.getRandomValues(array);
  const rand = btoa(String.fromCharCode(...array))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
  return `${timePart}-${rand}`;
}
