import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import strnow from '../src/strnow.js';

describe('strnow (source)', () => {
    it('returns a string', () => {
        assert.strictEqual(typeof strnow.get(), 'string');
    });

    it('returns format YYYY-MM-DD HH:mm:ss', () => {
        const result = strnow.get();
        assert.match(result, /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('returns 19 characters exactly', () => {
        assert.strictEqual(strnow.get().length, 19);
    });

    it('named export get() works', async () => {
        const { get } = await import('../src/strnow.js');
        assert.strictEqual(typeof get(), 'string');
        assert.match(get(), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
});