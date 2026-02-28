# padding-checker

A tiny TypeScript project that detects consistent numeric padding in strings.

## Requirements

- Node.js 18+ (or a recent LTS)
- npm

## Install

From the project root:

```bash
npm install
```

This will install dev dependencies required to run the tests.

## Run tests

Run the full test suite with:

```bash
npm test
```

This runs Jest via the `test` script in `package.json`.

Run a single test file with:

```bash
npx jest ./checkNumberPadding.test.ts --colors
```

## Development notes

- Tests are written in TypeScript — `ts-jest` is used to run tests directly.
- If you remove `node_modules`, restore dependencies with `npm install`.

## Repository

Repository: https://github.com/workwithjasminashik-del/padding-checker

If you need help pushing or setting up CI, open an issue or reach out.
# padding-checker