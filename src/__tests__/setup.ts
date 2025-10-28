import React from "react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";

// Extend Vitest's expect with Jest DOM matchers
expect.extend(matchers);

// Mock React for hooks
vi.mock("react", async () => {
  const actual = await vi.importActual<typeof import("react")>("react");
  return {
    ...(actual as object),
    useState: vi.fn().mockImplementation((init: any) => [init, vi.fn()]),
  };
});

// Mock TanStack Router
vi.mock("@tanstack/react-router", () => ({
  Link: ({
    children,
    ...props
  }: { children: React.ReactNode } & Record<string, any>) =>
    React.createElement("a", props, children),
}));

// runs a cleanup after each test case
afterEach(() => {
  cleanup();
});
