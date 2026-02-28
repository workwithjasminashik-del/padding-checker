import { checkNumberPadding } from "./checkNumberPadding";

describe("checkNumberPadding", () => {

  // ✅ Empty input
  test("returns 0 for empty input", () => {
    expect(checkNumberPadding([])).toBe(0);
  });

  // ✅ Consistent padding
  test("detects consistent padding of length 3", () => {
    expect(checkNumberPadding(["001", "002"])).toBe(3);
  });

  test("detects consistent padding with overflow", () => {
    expect(checkNumberPadding(["001", "002", "9999"])).toBe(3);
  });

  test("single padded value", () => {
    expect(checkNumberPadding(["05"])).toBe(2);
  });

  // ✅ No padding cases
  test("detects clearly no padding (same length)", () => {
    expect(checkNumberPadding(["10", "20", "30"])).toBe(1);
  });

  test("detects clearly no padding (min length = 1)", () => {
    expect(checkNumberPadding(["1", "2", "999"])).toBe(1);
  });

  test("single non-padded value", () => {
    expect(checkNumberPadding(["7"])).toBe(1);
  });

  // ✅ Inconsistent padding
  test("detects inconsistent padding widths", () => {
    expect(checkNumberPadding(["01", "002"])).toBe(-1);
  });

  test("mixed padded widths with other values", () => {
    expect(checkNumberPadding(["001", "02", "100"])).toBe(-1);
  });

  // ✅ Inconclusive cases
  test("inconclusive when no padding and varying lengths", () => {
    expect(checkNumberPadding(["999", "9999"])).toBe(-3);
  });

  test("inconclusive with multiple varying lengths", () => {
    expect(checkNumberPadding(["99", "999", "9999"])).toBe(-2);
  });

  // ✅ Edge cases
  test("all zeros same length", () => {
    expect(checkNumberPadding(["000", "000"])).toBe(3);
  });

  test("zero only value", () => {
    expect(checkNumberPadding(["0"])).toBe(1);
  });

  test("large numbers without padding", () => {
    expect(checkNumberPadding(["123456", "987654"])).toBe(1);
  });

});
