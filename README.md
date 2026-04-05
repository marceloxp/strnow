# strnow

[![npm version](https://img.shields.io/npm/v/strnow.svg)](https://www.npmjs.com/package/strnow)
[![License](https://img.shields.io/npm/l/strnow.svg)](https://github.com/marceloxp/strnow/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/strnow.svg)](https://www.npmjs.com/package/strnow)
[![Test](https://github.com/marceloxp/strnow/actions/workflows/test.yml/badge.svg)](https://github.com/marceloxp/strnow/actions/workflows/test.yml)

**Returns current date and time in `YYYY-MM-DD HH:mm:ss` format** – simple and lightweight.

Fully supports **ESM** and **CommonJS** (dual package), using the latest version of `date-and-time`.

## Installation

```bash
npm install strnow
```

```bash
yarn add strnow
```

## Usage

### ESM (import) — Recommended

```javascript
import strnow from 'strnow';

console.log(strnow.get());
// Output: 2026-04-05 14:30:25

// Or using named import
import { get } from 'strnow';

console.log(get());
// Output: 2026-04-05 14:30:25
```

### CommonJS (require)

```javascript
const strnow = require('strnow');

console.log(strnow.get());
// Output: 2026-04-05 14:30:25
```

### TypeScript

Type definitions are included.

```typescript
import strnow from 'strnow';
// or
import { get } from 'strnow';

const now: string = strnow.get();
console.log(now);
```

## API

| Method         | Description                          | Returns |
|----------------|--------------------------------------|---------|
| `get()`        | Returns formatted current date/time  | `string` |
| `default.get()`| Alias for compatibility              | `string` |

**Fixed format:** `YYYY-MM-DD HH:mm:ss` (e.g., `2026-04-05 14:30:25`)

## Why strnow?

- ✅ **Extremely lightweight** – minimal wrapper
- ✅ **Dual module** (ESM + CommonJS) – works in any Node.js project
- ✅ **Zero configuration** – minimal, predictable API
- ✅ **Single well-maintained dependency:** `date-and-time`
- ✅ **Tested and compatible with Node.js 18+**

## License

MIT © [marceloxp](https://github.com/marceloxp)
