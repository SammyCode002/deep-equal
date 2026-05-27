# Deep Equal

A JavaScript utility that checks if two values are "deeply equal," meaning they have the same structure and values even if they're different objects in memory.

## What it does

```js
const obj1 = { name: 'Sam', age: 25 };
const obj2 = { name: 'Sam', age: 25 };

obj1 === obj2         // false (different references)
deepEqual(obj1, obj2) // true (same structure & values)
```

## Usage

```js
const deepEqual = require('./deepEqual');

deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]]); // true
deepEqual({ a: 1 }, { a: 2 });             // false
```

## Features

- Compares primitives (numbers, strings, booleans, null, undefined)
- Compares objects by their properties (order doesn't matter)
- Compares arrays by elements in order
- Handles nested objects and arrays
- Uses recursion for deep comparison

## Run Tests

```bash
npm install
npm test
```

## Tech

- JavaScript (ES6)
- Jest (testing)
