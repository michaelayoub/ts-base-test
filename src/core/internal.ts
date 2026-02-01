// Core, runtime-agnostic functionality for the template library starter.
// Keep browser- or Node-specific code out of this module so it runs in any JS runtime.

/**
 * Options for customizing greeting behavior.
 */
export interface CoreOptions {
  shout?: boolean;
}

/**
 * Adds two numbers together.
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Returns a function that adds a given number to its argument.
 * @param a - The number to add
 * @returns A function that adds a to its input
 */
export function adder(a: number): (b: number) => number {
  return (b: number) => a + b;
}

/**
 * Returns a function that subtracts its argument from a given number.
 * @param a - The number to subtract from
 * @returns A function that subtracts its input from a
 */
export function subtracter(a: number): (b: number) => number {
  return (b: number) => a - b;
}

/**
 * Returns a function that multiplies a given number by its argument.
 * @param a - The number to multiply
 * @returns A function that multiplies a by its input
 */
export function multiplier(a: number): (b: number) => number {
  return (b: number) => a * b;
}

/**
 * Returns a function that divides a given number by its argument.
 * @param a - The number to divide
 * @returns A function that divides a by its input
 * @throws {Error} When dividing by zero
 */
export function divider(a: number): (b: number) => number {
  return (b: number) => {
    if (b === 0) {
      throw new Error("division by zero");
    } else {
      return a / b;
    }
  };
}

/**
 * Returns a function that squares its argument.
 * @param a - The number to square.
 * @returns A function that produces the square of a
 */
export function squarer(a: number): () => number {
  return () => a * a;
}

/**
 * Greets a person by name.
 * @param name - The person's name
 * @param options - Greeting options
 * @param options.shout - If true, the greeting is in uppercase with an exclamation mark
 * @returns A greeting string
 */
export function greet(name: string, options: CoreOptions = {}): string {
  const base = `Hello, ${name}`;
  return options.shout ? `${base.toUpperCase()}!` : `${base}.`;
}

/**
 * Generates a deterministic random ID combining timestamp and random parts.
 * @param random - Optional custom RNG function for testability (defaults to Math.random)
 * @returns A string ID in format "timestamp-randompart"
 */
export function getRandomId(random: () => number = Math.random): string {
  const timePart = Date.now().toString(36);
  const randPart = Math.floor(random() * 1e9).toString(36);
  return `${timePart}-${randPart}`;
}
