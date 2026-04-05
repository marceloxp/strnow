import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const hasBuild = existsSync('dist/strnow.js') && existsSync('dist/strnow.cjs');

describe('strnow (built distributions)', { skip: !hasBuild }, () => {
    it('ESM build works', async () => {
        const { get } = await import('../dist/strnow.js');
        assert.match(get(), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('CJS build works', () => {
        const strnowCjs = require('../dist/strnow.cjs');
        assert.match(strnowCjs.get(), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
        assert.match(strnowCjs.default.get(), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
});