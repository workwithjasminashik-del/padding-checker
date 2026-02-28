export function checkNumberPadding(intStrs: Iterable<string>): number {
  const arr = Array.from(intStrs);

  // Case 0: No observations
  if (arr.length === 0) {
    return 0;
  }

  let hasLeadingZero = false;
  let minLength = Infinity;
  let allLengthsSame = true;

  const firstLength = arr[0]!.length;
  const paddedLengths = new Set<number>();

  for (const s of arr) {
    const len = s.length;

    // Track smallest length
    if (len < minLength) {
      minLength = len;
    }

    // Check if all lengths are same
    if (len !== firstLength) {
      allLengthsSame = false;
    }

    // Detect padded values (leading zero & more than 1 digit)
    if (len > 1 && s.startsWith("0")) {
      hasLeadingZero = true;
      paddedLengths.add(len);
    }
  }

  // Case 1: Padding observed
  if (hasLeadingZero) {
    // Inconsistent padding widths
    if (paddedLengths.size > 1) {
      return -1;
    }

    // Consistent padding width
    return paddedLengths.values().next().value!;
  }

  // Case 2: No leading zeros observed

  // If smallest length is 1 → clearly no padding
  if (minLength === 1) {
    return 1;
  }

  // If all lengths same → clearly no padding
  if (allLengthsSame) {
    return 1;
  }

  // Otherwise inconclusive
  return -minLength;
}
