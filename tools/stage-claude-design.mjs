// Stages the showcase as a self-contained folder for the "Material 3
// Expressive" Claude Design project:
//
//   dist/claude-design/templates/material-web-showcase/
//
// Paths inside it mirror the repo, so showcase/index.html's relative links
// resolve unchanged. Only the theme's own fonts and the icon subset ship.
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const root = 'dist/claude-design';
const dest = `${root}/templates/material-web-showcase`;
rmSync(root, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

const copy = [
  'index.css', 'tokens',
  'fonts/fonts.css', 'fonts/roboto-flex', 'fonts/inter', 'fonts/ibm-plex-mono', 'fonts/material-symbols',
  'components/material-web.js', 'components/m3-system.css', 'components/theme-bridge.css', 'components/LICENSE',
  'showcase/index.html', 'showcase/showcase.css',
];
for (const p of copy) cpSync(p, `${dest}/${p}`, { recursive: true });
console.log(`staged → ${dest}`);
