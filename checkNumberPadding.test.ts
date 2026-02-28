import { checkNumberPadding } from "./checkNumberPadding";

/* Provide test globals for TypeScript when type definitions for the test runner are not installed */
declare const describe: any;
declare const test: any;
declare const expect: any;

describe("checkNumberPadding - Complete Coverage (Strict Rule)", () => {

  // =========================
  // Empty Input
  // =========================
  test("returns 0 for empty input", () => {
    expect(checkNumberPadding([])).toBe(0);
  });

  // =========================
  // Consistent Padding
  // =========================
  test("detects consistent padding of length 3", () => {
    expect(checkNumberPadding(["001", "002"])).toBe(3);
  });

  test("detects consistent padding with overflow", () => {
    expect(checkNumberPadding(["001", "002", "9999"])).toBe(3);
  });

  test("all zeros same padded width", () => {
    expect(checkNumberPadding(["00", "00"])).toBe(2);
  });

  test("hidden padding case 09 and 10", () => {
    expect(checkNumberPadding(["09", "10"])).toBe(2);
  });

  test("large padding width", () => {
    expect(checkNumberPadding(["00000001", "00000002"])).toBe(8);
  });

  test("padding with overflow large", () => {
    expect(checkNumberPadding(["0001", "0002", "10000"])).toBe(4);
  });

  // =========================
  // Inconsistent Padding
  // =========================
  test("detects inconsistent padding widths", () => {
    expect(checkNumberPadding(["01", "002"])).toBe(-1);
  });

  test("zero mixed inconsistent widths", () => {
    expect(checkNumberPadding(["0", "00", "000"])).toBe(-1);
  });

  test("mixed padded widths with other values", () => {
    expect(checkNumberPadding(["001", "02", "100"])).toBe(-1);
  });

  test("mixed 01 02 003 inconsistent", () => {
    expect(checkNumberPadding(["01", "02", "003"])).toBe(-1);
  });

  test("mixed 1 02 003 inconsistent", () => {
    expect(checkNumberPadding(["1", "02", "003"])).toBe(-1);
  });

  test("strict rule multiple padded widths", () => {
    expect(checkNumberPadding(["001", "002", "0003"])).toBe(-1);
  });


  // =========================
  // Inconclusive Cases
  // =========================
  test("inconclusive 999 9999", () => {
    expect(checkNumberPadding(["999", "9999"])).toBe(-3);
  });

  test("inconclusive 99 999 9999", () => {
    expect(checkNumberPadding(["99", "999", "9999"])).toBe(-2);
  });

  test("inconclusive same length natural numbers", () => {
    expect(checkNumberPadding(["99", "98", "97"])).toBe(-2);
  });

  test("natural growth length 2", () => {
    expect(checkNumberPadding(["10", "20", "30"])).toBe(-2);
  });

  test("natural growth length 3", () => {
    expect(checkNumberPadding(["100", "200", "300"])).toBe(-3);
  });

  // =========================
  // Clearly No Padding
  // =========================
  test("short value proves no padding", () => {
    expect(checkNumberPadding(["9", "9999"])).toBe(1);
  });

  test("min length 1 proves no padding", () => {
    expect(checkNumberPadding(["1", "2", "999"])).toBe(1);
  });

  test("zero and natural number no padding", () => {
    expect(checkNumberPadding(["0", "10"])).toBe(1);
  });

  test("two zeros no padding", () => {
    expect(checkNumberPadding(["0", "0"])).toBe(1);
  });

  test("9 10 11 no padding", () => {
    expect(checkNumberPadding(["9", "10", "11"])).toBe(1);
  });

  // =========================
  // Single Value Cases
  // =========================
  test("single zero", () => {
    expect(checkNumberPadding(["0"])).toBe(-1);
  });

  test("single natural digit", () => {
    expect(checkNumberPadding(["5"])).toBe(-1);
  });

  test("single double zero", () => {
    expect(checkNumberPadding(["00"])).toBe(-2);
  });

  test("single padded value", () => {
    expect(checkNumberPadding(["0005"])).toBe(-4);
  });

  test("single long natural", () => {
    expect(checkNumberPadding(["999"])).toBe(-3);
  });

  // =========================
  // Invalid Input
  // =========================
  test("invalid alphabetic", () => {
    expect(checkNumberPadding(["abc", "12", "097"])).toBe(0);
  });

  test("invalid negative number", () => {
    expect(checkNumberPadding(["-01", "02"])).toBe(0);
  });

  test("invalid decimal", () => {
    expect(checkNumberPadding(["1.2", "03"])).toBe(0);
  });

  test("invalid leading space", () => {
    expect(checkNumberPadding([" 01", "02"])).toBe(0);
  });

  test("invalid empty string", () => {
    expect(checkNumberPadding(["01", "02", ""])).toBe(0);
  });

});
