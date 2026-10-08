// Tags custom properties whose kind Claude Design can't infer from the value
// (motion curves and durations, line-heights, opacities, aliases that point at
// other tokens) with a `/* @kind … */` comment inside the declaration:
//
//   --motion-ease:cubic-bezier(.22,.8,.28,1) /* @kind other */;
//
// Idempotent. Run after editing a token file, or let build-components.mjs run it
// on components/m3-system.css, which it re-copies from @material/web.
//
//   node tools/tag-token-kinds.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const STATUS = ['success', 'danger', 'warning', 'info', 'pending', 'active', 'review', 'neutral']
  .flatMap(s => [`--status-${s}`, `--status-${s}-soft`, `--status-${s}-line`]);
const FIELDS = ['--field-fill', '--field-line', '--field-fill-overlay', '--field-line-overlay'];
const INK_ALIASES = ['--bg-page', '--bg-raised', '--border-default', '--border-soft', '--text-quaternary', '--text-note'];
const MOTION = ['--motion-duration', '--motion-ease', '--transition-fast', '--transition-press'];

// file → [[token name or RegExp, kind]]
export const SPEC = {
  'tokens/base/colors.css': [
    ...[...INK_ALIASES, ...STATUS, ...FIELDS].map(t => [t, 'color']),
    [/^--series-\d+$/, 'color'],
  ],
  'tokens/base/typography.css': [
    [/^--leading-/, 'other'],
    [/^--weight-/, 'font'],
  ],
  'tokens/base/spacing.css': [],
  'tokens/base/effects.css': [
    [/^--border-(hairline|hairline-soft|accent)$/, 'color'],
    ...MOTION.map(t => [t, 'other']),
    ['--bg-grid-wash', 'other'],
    ['--bg-grid-base', 'color'],
    ['--bg-grid-raised-opacity', 'other'],
  ],
  'tokens/m3-expressive.css': [
    [/^--md-sys-motion-/, 'other'],
    ...[...INK_ALIASES, ...FIELDS, '--bg-grid-base'].map(t => [t, 'color']),
    ...MOTION.map(t => [t, 'other']),
  ],
  'components/m3-system.css': [
    [/^--md-sys-motion-/, 'other'],
    [/^--md-ref-typeface-/, 'font'],
    [/^--md-sys-typescale-.*-axes$/, 'font'],
  ],
  'components/theme-bridge.css': [
    [/^--md-ref-typeface-/, 'font'],
    ['--md-navigation-drawer-modal-scrim-opacity', 'other'],
  ],
};

const kindFor = (name, rules) =>
  rules.find(([m]) => (typeof m === 'string' ? m === name : m.test(name)))?.[1];

// Walks the declarations `--name: value` (terminated by `;` or `}` outside
// parentheses) and puts the tag at the end of each matching value. A tag already
// trailing the semicolon (`…; /* @kind x */`) is moved inside.
export function tagKinds(css, rules) {
  const decl = /(^|[{;\s])(--[\w-]+)\s*:/g;
  let out = '', last = 0, m;
  while ((m = decl.exec(css))) {
    const name = m[2];
    let i = decl.lastIndex, depth = 0;
    for (; i < css.length; i++) {
      const c = css[i];
      if (c === '(') depth++;
      else if (c === ')') depth--;
      else if (c === '/' && css[i + 1] === '*') i = css.indexOf('*/', i + 2) + 1;
      else if (depth === 0 && (c === ';' || c === '}')) break;
    }
    const kind = kindFor(name, rules);
    decl.lastIndex = i;
    if (!kind) continue;
    const value = css.slice(m.index + m[0].length, i);
    if (/\/\*\s*@kind\b/.test(value)) continue;
    const trailing = css.slice(i).match(/^;[ \t]*\/\*\s*@kind\s+[\w-]+\s*\*\//);
    out += css.slice(last, m.index + m[0].length) + value.replace(/\s+$/, '') +
      ` /* @kind ${kind} */` + (css[i] === ';' ? ';' : '');
    last = trailing ? i + trailing[0].length : css[i] === ';' ? i + 1 : i;
  }
  return out + css.slice(last);
}

export function tagFile(path, root = '.') {
  const p = `${root}/${path}`;
  const css = readFileSync(p, 'utf8');
  const next = tagKinds(css, SPEC[path]);
  if (next !== css) writeFileSync(p, next);
  return next !== css;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('..', import.meta.url));
  for (const path of Object.keys(SPEC)) console.log(`${tagFile(path, root) ? 'tagged ' : 'ok     '} ${path}`);
}
