// Bundles Google's @material/web into components/ so the repo stays buildless
// for whoever consumes it: one classic <script> registers every element, and
// it works from file:// (a module script would not).
//
//   npm install && npm run build:components
import { build } from 'esbuild';
import { copyFileSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { tagFile } from './tag-token-kinds.mjs';

const require = createRequire(import.meta.url);
const pkgDir = require.resolve('@material/web/package.json').replace(/package\.json$/, '');
const { version } = JSON.parse(readFileSync(`${pkgDir}package.json`, 'utf8'));

// labs/gb imports its stylesheets as CSS module scripts
// (`import s from './x.css' with { type: 'css' }`), which esbuild does not
// bundle. Each becomes a constructed CSSStyleSheet — exactly what the browser
// would have produced, and what Lit's `static styles` accepts.
const cssModuleScripts = {
  name: 'css-module-scripts',
  setup(b) {
    b.onResolve({ filter: /\.css$/ }, args =>
      args.with?.type === 'css'
        ? { path: resolve(dirname(args.importer), args.path), namespace: 'css-sheet' }
        : undefined);
    b.onLoad({ filter: /.*/, namespace: 'css-sheet' }, args => ({
      contents: `const s = new CSSStyleSheet(); s.replaceSync(${JSON.stringify(readFileSync(args.path, 'utf8'))}); export default s;`,
      loader: 'js',
    }));
  },
};

await build({
  entryPoints: ['components/entry.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2021',
  legalComments: 'none',
  banner: { js: `/*! @material/web ${version} — Copyright Google LLC, Apache-2.0 (components/LICENSE) */` },
  outfile: 'components/material-web.js',
  plugins: [cssModuleScripts],
});

// The Expressive system stylesheet. Every rule sits in an @layer, so the
// theme's unlayered tokens win without !important.
copyFileSync(`${pkgDir}labs/gb/styles/m3.css`, 'components/m3-system.css');
// Its motion and typeface tokens carry no inferable kind; re-tag them for
// Claude Design every time the file is re-copied (tools/tag-token-kinds.mjs).
tagFile('components/m3-system.css');
copyFileSync(`${pkgDir}LICENSE`, 'components/LICENSE');
console.log(`@material/web ${version} → components/material-web.js, components/m3-system.css`);
