import { describe, expect, it } from "vitest";

// Example utility function to test
const capitalize = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

describe("Utils", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should handle empty strings", () => {
      expect(capitalize("")).toBe("");
    });

    it("should convert rest of string to lowercase", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });
  });
});
