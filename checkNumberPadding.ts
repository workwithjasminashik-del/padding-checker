export function checkNumberPadding(intStrs: Iterable<string>): number {
  
  let hasLeadingZero = false;
  let minLength = Infinity;
  let count = 0;

  const paddedLengths = new Set<number>();
  const digitOnly = /^[0-9]+$/;

  for (const s of intStrs) {

    // Check numeric string 
    if (!digitOnly.test(s)) {
      return 0;
    }

    count++;
    const len = s.length;

    // Track smallest length
    minLength = Math.min(minLength, len);

    // Detect padded values (leading zero & more than 1 digit)
    if (len >1 && s.startsWith("0")) {
      hasLeadingZero = true;
      paddedLengths.add(len);
    }
  }

   // Empty input
  if (count === 0) return 0;

   // Single value → always inconclusive
  if (count === 1) return -minLength;

  // Case 1: Padding observed
  if (hasLeadingZero) {
    // Inconsistent padding widths
    if (paddedLengths.size > 1) {
      return -1;
    }

    // Consistent padding width
    return [...paddedLengths][0]!;
  }

  // Case 2: No padding observed

  // If smallest length is 1 → clearly no padding
  if (minLength === 1) {
    return 1;
  }

  // Otherwise inconclusive
  return -minLength;
}
