# maybe-stringify

A [Node.js](https://nodejs.org/) module which will convert data to JSON or, if the conversion is not possible, will return a fallback value.

## Installation

```bash
npm install maybe-stringify --save
```

## Usage

```javascript
const maybeStringify = require('maybe-stringify')

maybeStringify(['test']) // returns '["test"]'

// Default fallback behavior is to return the value as-is,
// but this can be overridden.
maybeStringify(function () {}) // returns the function as-is since it can't stringify
maybeStringify(function () {}, {fallback: 'something else'}) // returns 'something else'

// Set `safe` to `false` to make recursive references trigger
// the fallback behavior.
const recursive = {}
recursive.prop = recursive
maybeStringify(recursive) // returns '{"recursive":"[Circular]"}'
maybeStringify(recursive, {safe: false}) // returns the object as-is since it can't stringify
```
