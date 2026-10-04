// Stitches showcase/sections/*.html into showcase/index.html.
//
//   node tools/build-showcase.mjs              → showcase/index.html (every section)
//   node tools/build-showcase.mjs --only 03-x  → showcase/preview-03-x.html (one section)
//
// A fragment is one <section class="panel" id="…" data-title="…"> and may end
// with one <script> (no type="module": the page must work from file://).
// Scripts are hoisted below the shell's own so sections can't race each other.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const shell = readFileSync('showcase/shell.html', 'utf8');
const files = readdirSync('showcase/sections').filter(f => f.endsWith('.html')).sort()
  .filter(f => !only || f === `${only}.html`);
if (!files.length) throw new Error(only ? `no section ${only}` : 'no sections');

const sections = [], scripts = [], toc = [];
for (const f of files) {
  let src = readFileSync(`showcase/sections/${f}`, 'utf8').trim();
  src = src.replace(/<script>([\s\S]*?)<\/script>/g, (_, js) => {
    scripts.push(`<script>/* ${f} */\n(function () {${js}})();\n</script>`);
    return '';
  });
  const m = src.match(/<section[^>]*\bid="([^"]+)"[^>]*\bdata-title="([^"]+)"/);
  if (!m) throw new Error(`${f}: needs <section class="panel" id="…" data-title="…">`);
  toc.push(`<a href="#${m[1]}">${m[2]}</a>`);
  sections.push(`<!-- ${f} -->\n${src.trim()}`);
}

const out = shell
  .replace('<!--toc-->', toc.join(''))
  .replace('<!--sections-->', sections.join('\n\n'))
  .replace('<!--scripts-->', scripts.join('\n'));
const path = only ? `showcase/preview-${only}.html` : 'showcase/index.html';
writeFileSync(path, out);
console.log(`${path} ← ${files.length} section(s)`);
