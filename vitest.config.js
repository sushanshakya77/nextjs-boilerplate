import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json", "lcov"],
      exclude: [
        "node_modules/**",
        "src/app/**/*.d.ts",
        "src/**/*.{test,spec}.{ts,tsx}",
        "src/app/env.ts",
        "src/test/**",
      ],
    },
  },
});
