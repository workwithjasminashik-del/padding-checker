# 📌 Number Padding Consistency Checker

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Jest](https://img.shields.io/badge/Tested%20with-Jest-red)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🚀 Overview

This project implements a **TypeScript function** that determines whether a sequence of numeric strings uses consistent left zero-padding.

The goal is to analyze numeric identifiers (such as Bates numbers or formatted IDs) and determine:

- ✅ If consistent zero-padding exists
- ✅ If no padding was used
- ✅ If padding is inconsistent
- ✅ If the result is inconclusive
- ✅ If the input is empty

---

## 🧠 Problem Summary

Numbers are sometimes left-padded with zeros to maintain a fixed width.

Example:

```
1     → 001
25    → 025
300   → 300
```

This project detects whether such padding exists and whether it is applied consistently.

---

## 📌 Function Signature

```ts
export function checkNumberPadding(intStrs: Iterable<string>): number
```

---

## 📤 Return Values

| Return Value | Meaning |
|--------------|----------|
| `> 1`        | Consistent padding width detected |
| `1`          | No padding used |
| `< -1`       | Inconclusive (negative of smallest observed length) |
| `-1`         | Inconsistent padding detected |
| `0`          | Empty input |

---

## 📂 Project Structure

```
padding-checker/
│
├── checkNumberPadding.ts      # Core implementation
├── index.ts                   # Example runner
├── checkNumberPadding.test.ts # Jest unit tests
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Node.js

Download the LTS version:

👉 https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

### 2️⃣ Install Dependencies

Inside the project folder:

```bash
npm install
```

---

## ▶️ Running the Application

To run the example usage file:

```bash
npx ts-node index.ts
```

### Expected Output

```
3
3
1
-3
-2
-1
0
```

---

## 🧪 Running Unit Tests

This project uses **Jest with TypeScript**.

Run tests:

```bash
npm test
```

Expected output:

```
PASS  checkNumberPadding.test.ts
```

---

## 🧩 Example Usage

```ts
checkNumberPadding(["001", "002"]);         // 3
checkNumberPadding(["001", "002", "9999"]); // 3
checkNumberPadding(["1", "2", "999"]);      // 1
checkNumberPadding(["999", "9999"]);        // -3
checkNumberPadding(["01", "002"]);          // -1
checkNumberPadding([]);                     // 0
```

---

## 🧪 Edge Cases Covered

✔ Empty input  
✔ Single padded value  
✔ Single non-padded value  
✔ Consistent padding  
✔ Padding with overflow  
✔ Inconsistent padding widths  
✔ Clearly no padding  
✔ Inconclusive cases  
✔ All zero values  
✔ Zero-only input  

---

## 🏗 Design Decisions

### 1️⃣ Overflow Is Allowed
If padding width is 3:

```
["001", "002", "1000"]
```

`1000` is valid overflow and does not invalidate padding.

---

### 2️⃣ Inconclusive Detection

If no leading zeros exist and lengths vary:

```
["999", "9999"]
```

Padding cannot be confirmed → return negative smallest length.

---

### 3️⃣ Clear No-Padding Case

If minimum length is `1`, padding cannot exist → return `1`.

---

## ⏱ Complexity

Time Complexity:  
```
O(n)
```

Space Complexity:  
```
O(1)
```

Only a single pass through input with constant extra memory.

---

## 🔍 Testing Strategy

The unit tests are structured around behavioral categories:

1. Empty input
2. Consistent padding
3. No padding
4. Inconsistent padding
5. Inconclusive cases
6. Boundary and edge cases

---

## 📚 Technologies Used

- TypeScript
- Node.js
- Jest
- ts-node

---
