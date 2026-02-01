import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["./src/core/index.ts"],
    platform: "node",
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["./src/core/browser.ts"],
    platform: "browser",
    dts: true,
    minify: true,
    sourcemap: true,
  },
]);
