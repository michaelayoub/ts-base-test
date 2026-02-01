// Node/Bun adapter. Exposes core utilities and Node-specific helpers.
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

import { randomBytes } from "node:crypto";

/**
 * Generates a deterministic random ID combining timestamp and random parts.
 * @returns A string ID in format "timestamp-randompart"
 */
export function getSecureRandomId(): string {
  const timePart = Date.now().toString(36);
  const bytes = randomBytes(12).toString("base64url");
  return `${timePart}-${bytes}`;
}
