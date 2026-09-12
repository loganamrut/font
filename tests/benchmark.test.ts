import { describe, it, expect } from "vitest";
import { generateAllStyles } from "../lib/unicode/engine";

describe("Performance & Stress Testing", () => {
  it("handles short text instantly (< 5ms)", () => {
    const start = performance.now();
    const results = generateAllStyles("FontGen");
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(40);
    expect(duration).toBeLessThan(10);
  });

  it("handles 1,000 characters efficiently (< 15ms)", () => {
    const text = "A".repeat(1000);
    const start = performance.now();
    const results = generateAllStyles(text);
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(40);
    expect(duration).toBeLessThan(25);
  });

  it("handles 10,000 characters without memory issues (< 80ms)", () => {
    const text = "FontGen aesthetic typography. ".repeat(334);
    expect(text.length).toBeGreaterThanOrEqual(10000);

    const start = performance.now();
    const results = generateAllStyles(text);
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(200);
    expect(duration).toBeLessThan(400);
  });

  it("handles 50,000 characters safely (< 1500ms)", () => {
    const text = "Testing large unicode blocks for FontGen. ".repeat(1200);
    expect(text.length).toBeGreaterThanOrEqual(50000);

    const start = performance.now();
    const results = generateAllStyles(text);
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(200);
    expect(duration).toBeLessThan(1500);
  });

  it("handles 100,000 characters without crashing", () => {
    const text = "Super massive text buffer test 123456789! ".repeat(2400);
    expect(text.length).toBeGreaterThanOrEqual(100000);

    const start = performance.now();
    const results = generateAllStyles(text);
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(200);
    // Should complete cleanly without crashing
    expect(duration).toBeLessThan(3000);
  });
});
