import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [".next/**", "node_modules/**", "playwright-report/**", "test-results/**"],
  },
  {
    languageOptions: {
      globals: {
        React: "readonly",
        console: "readonly",
        process: "readonly",
        module: "readonly",
        fetch: "readonly",
        FormData: "readonly",
        Response: "readonly",
        setTimeout: "readonly",
        window: "readonly",
        navigator: "readonly",
      },
    },
  },
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
