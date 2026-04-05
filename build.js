import { build } from 'esbuild';
import { rmSync, mkdirSync } from 'fs';

console.log('🛠️  Starting build...');

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

await build({
    entryPoints: ['src/strnow.js'],
    outfile: 'dist/strnow.js',
    format: 'esm',
    platform: 'node',
    bundle: true,
    external: ['date-and-time']
});

console.log('✅ Generated ESM: dist/strnow.js');

await build({
    entryPoints: ['src/strnow.js'],
    outfile: 'dist/strnow.cjs',
    format: 'cjs',
    platform: 'node',
    bundle: true,
    external: ['date-and-time']
});

console.log('✅ Generated CommonJS: dist/strnow.cjs');
console.log('🎉 Build completed successfully!');