import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  { ignores: ["node_modules", ".next", "dist", "coverage"] },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: { parser: tsparser, globals: { process: "readonly", console: "readonly", crypto: "readonly", btoa: "readonly", atob: "readonly", fetch: "readonly", Request: "readonly", Response: "readonly", URL: "readonly", setTimeout: "readonly", clearTimeout: "readonly", localStorage: "readonly", Audio: "readonly", navigator: "readonly", MediaMetadata: "readonly", KeyboardEvent: "readonly", window: "readonly", document: "readonly", AbortController: "readonly", AbortSignal: "readonly", __dirname: "readonly" } },
    plugins: { "@typescript-eslint": tseslint },
    rules: { "no-unused-vars": "off" },
  },
];
