import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("renders main elements correctly", () => {
  render(<Page />);

  // Check for Next.js logo image
  const nextLogo = screen.getByAltText("Next.js logo");
  expect(nextLogo).toBeDefined();
  expect(nextLogo.getAttribute("width")).toBe("180");
  expect(nextLogo.getAttribute("height")).toBe("38");
  expect(nextLogo.getAttribute("priority")).toBe(null);

  // Check for list items
  expect(screen.getByText(/Get started by editing/)).toBeDefined();
  expect(screen.getByText(/Save and see your changes instantly/)).toBeDefined();

  // Check for code element
  const codeElement = screen.getByText("src/app/page.tsx");
  expect(codeElement.tagName.toLowerCase()).toBe("code");
});

test("renders all required links with correct attributes", () => {
  render(<Page />);

  // Deploy now link
  const deployLink = screen.getByRole("link", { name: /Deploy now/i });
  expect(deployLink).toBeDefined();
  expect(deployLink.getAttribute("href")).toBe(
    "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  );
  expect(deployLink.getAttribute("target")).toBe("_blank");
  expect(deployLink.getAttribute("rel")).toBe("noopener noreferrer");

  // Docs link
  const docsLink = screen.getByRole("link", { name: /Read our docs/i });
  expect(docsLink).toBeDefined();
  expect(docsLink.getAttribute("href")).toBe(
    "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  );

  // Footer links
  const learnLink = screen.getByRole("link", { name: /Learn/i });
  const examplesLink = screen.getByRole("link", { name: /Examples/i });
  const nextjsLink = screen.getByRole("link", { name: /Go to nextjs.org/i });

  expect(learnLink).toBeDefined();
  expect(examplesLink).toBeDefined();
  expect(nextjsLink).toBeDefined();
});

test("renders all footer images with correct attributes", () => {
  render(<Page />);

  // Check footer icons
  const fileIcon = screen.getByAltText("File icon");
  const windowIcon = screen.getByAltText("Window icon");
  const globeIcon = screen.getByAltText("Globe icon");

  [fileIcon, windowIcon, globeIcon].forEach((icon) => {
    expect(icon).toBeDefined();
    expect(icon.getAttribute("width")).toBe("16");
    expect(icon.getAttribute("height")).toBe("16");
    expect(icon.getAttribute("aria-hidden")).toBe("true");
  });
});
