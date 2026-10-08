# Material 3 Expressive

Two Material Design 3 Expressive systems, self-contained, with their fonts
vendored — plus Google's official component library, bundled and wearing the
theme. They live in separate directories and **must never be loaded on the
same page** — both spell `--md-sys-color-*` with different values, so whichever
loaded second would win and the result would be neither system.

| | What it is | Entry point |
|---|---|---|
| **The theme** | A dark instrument-panel theme: Material's system roles generated from the seed `#ff7a1a` with fidelity, six swappable accents, one near-grey ground. **Tokens only** — no components. | [`index.css`](index.css) |
| **The components** | Google's official [`@material/web`](https://github.com/material-components/material-web) 2.5.0 — every stable element, the labs set (cards, navigation, segmented buttons, badge) and the Expressive `md-gb-*` set — bundled into one script and themed by the theme above through [`components/theme-bridge.css`](components/theme-bridge.css). | [`showcase/index.html`](showcase/index.html) |
| **The baseline** | Google's own baseline Expressive system: the `#6750A4` tonal-spot scheme in light and dark, 15 type styles plus emphasized twins, the 10-step corner scale, 24 morphable shapes, spring motion, **and a full component layer**. | [`baseline/styles.css`](baseline/styles.css) |

Open [`index.html`](index.html) for the theme's specimen, or
[`baseline/readme.md`](baseline/readme.md) and the preview pages under
`baseline/foundations/` and `baseline/components/` for the baseline's.

## The theme

Two layers, and the split is the point:

- **The base layer** (`tokens/base/`) declares a semantic vocabulary —
  `--bg-page`, `--surface-card`, `--text-primary`, `--accent-primary`, eight
  status hues, spacing and shadow scales. It is a complete dark theme on its own
  ("Midnight").
- **The theme layer** (`tokens/m3-expressive.css`) declares Material 3's system
  roles and then **re-points every semantic token at them**.

Nothing that consumes the vocabulary knows the theme exists. Delete the one
`@import` at the foot of `index.css` and you are back on the base layer exactly
— no component changes, no class names to swap. That escape hatch is the design,
not a leftover.

```html
<link rel="stylesheet" href="path/to/index.css">
```

Then write `var(--surface-card)`, `var(--text-secondary)`,
`var(--accent-primary)` — never a literal.

### Accents

One attribute on `<html>`:

```html
<html data-accent="violet">
```

`orange` (the default, and what no attribute means), `violet`, `teal`, `blue`,
`green`, `rose`. Each is the Material dark scheme generated from its own seed
with the seed kept as the primary container, so the accent stays saturated
instead of becoming a pastel.

**Only the accent roles move.** Material would tint its neutrals toward each
seed; here every surface, the ink on it and the outlines come from one near-grey
palette (hue ~300, chroma ~2 — the tone `m3.material.io` is itself drawn in), set
once and restated by no accent. Choosing violet recolours the accent and leaves
the page's ground exactly where it was. The status hues are untouched too: they
carry meaning, not brand, and Material has no role for "pending" or "review".

## The components

`@material/web` styles itself from Material's system roles —
`--md-sys-color-*`, `--md-ref-typeface-*` — which is exactly the vocabulary the
theme declares. So the components need no restyling; they need the theme, plus
a bridge for the roles the theme leaves unset (the fixed roles, `on-secondary`,
`scrim` and the like), each derived from a role the theme does set so every
accent carries through.

```html
<html data-accent="orange">
<link rel="stylesheet" href="path/to/index.css">
<link rel="stylesheet" href="path/to/components/m3-system.css">
<link rel="stylesheet" href="path/to/components/theme-bridge.css">
<script src="path/to/components/material-web.js"></script>

<md-gb-button color="filled" size="md">Send</md-gb-button>
<md-outlined-text-field label="Subject"></md-outlined-text-field>
```

`material-web.js` is a classic script, not a module, so pages work straight
from `file://`. It is generated but committed, like the fonts, so nothing needs
building to use it. To update it:

```sh
npm install
npm run build:components   # components/material-web.js, m3-system.css, LICENSE
npm run build:showcase     # showcase/index.html from showcase/sections/*.html
```

`components/m3-system.css` is the Expressive system stylesheet that ships with
`labs/gb`; every rule in it sits in an `@layer`, so the theme's unlayered roles
win without `!important`. Icons use the same Material Symbols subset as
`baseline/` — an icon outside it renders as its ligature text.

The showcase page is built from one fragment per section under
`showcase/sections/`; `tools/shot.mjs` screenshots a page in headless Chrome.
`tools/stage-claude-design.mjs` stages it as a self-contained static folder
(`dist/claude-design/`). The Claude Design project no longer carries it: its
components come from `/design-sync` instead.

## The baseline system

Google's baseline Expressive, extracted from the Claude Design project it was
authored in. Unlike the theme it ships a **component layer** — five button
sizes that morph shape on press, button groups, split buttons, the FAB menu, a
loading indicator that morphs through the shape library, wavy progress, floating
and docked toolbars, the flexible navigation bar and collapsible rail, cards,
segmented lists, chips, inputs and a dialog.

```html
<link rel="stylesheet" href="path/to/baseline/styles.css">
```

Light is the default; `data-theme="dark"` on any ancestor switches, and with no
attribute it follows the OS preference. `baseline/readme.md` is Google's own
documentation for it — the class table, the do/don't list and the re-branding
instructions all live there.

## Layout

| Path | What it is |
|---|---|
| `index.css` | The theme's entry point. Imports its fonts and both token layers in load order — that order is the contract. |
| `index.html` | The theme's specimen page. Static; open it directly. |
| `tokens/m3-expressive.css` | The theme: Material's system roles, then the semantic layer re-pointed onto them. |
| `tokens/base/*.css` | The base layer — colors, typography, spacing, effects. |
| `baseline/styles.css` | The baseline system's entry point. |
| `baseline/tokens/*.css` | Its eight token files: fonts, colors, typography, shape, motion, elevation, spacing, components. |
| `baseline/foundations/*.html` | Six specimen pages — color, type, shape, motion, elevation/states/spacing, icons. |
| `baseline/components/*.html` | Eleven component preview pages. |
| `baseline/templates/app/index.html` | A full phone screen, light and dark, built only from the system. |
| `fonts/fonts.css` | `@font-face` for the theme's 12 faces. |
| `fonts/baseline.css` | `@font-face` for the baseline's 9 faces. |
| `fonts/<family>/` | The `.woff2` files and that family's licence. |
| `components/material-web.js` | Every `@material/web` element in one classic script (generated, committed). |
| `components/theme-bridge.css` | Applies the theme to the components: the missing roles, the faces, the icon font. |
| `components/m3-system.css` | The Expressive system stylesheet from `@material/web/labs/gb` (generated, committed). |
| `showcase/index.html` | Every component, themed (generated from `showcase/sections/`). |
| `tools/build-components.mjs` | Rebuilds the three generated files in `components/`. |
| `tools/build-showcase.mjs` | Stitches the showcase sections into `showcase/index.html`. |
| `components/icons-full.css` | The complete Material Symbols fonts (Rounded, Outlined, Sharp) and the `icon-*` style classes. Opt-in; the React package always uses it. |
| `fonts/material-symbols-full/` | Every Material Symbols icon (4,299) in all three styles, with each style's `.codepoints` name index. |
| `tools/fetch-symbols.py` | Re-fetches `fonts/material-symbols-full/` from google/material-design-icons at a pinned commit. |
| `tools/fetch-fonts.py` | Re-fetches and re-vendors every font. |
| `tools/icon-names.py` | Prints the icon ligatures `baseline/` uses, for the Symbols subset. |

## Fonts

Self-hosted, so neither system makes a third-party request and nothing waits on
`fonts.googleapis.com` to paint. One bundle per system, since the two are never
loaded together.

| Family | Used by | Role | Faces | Licence |
|---|---|---|---|---|
| **Roboto Flex** | both | The Expressive sans. The theme drives its `wdth` axis to 110 for display and card titles; the baseline uses it as the plain face. | 1 variable — `opsz 8..144`, `wdth 25..151`, `wght 100..1000` | OFL |
| **IBM Plex Mono** | theme | Figures and instrument readouts, where tabular digits are the job. | 400, 500, 600, 700 | OFL |
| **Inter** | theme | The fallback behind Roboto Flex in `--font-sans`. | 1 variable — `wght 100..900` | OFL |
| **Google Sans Flex** | baseline | The Expressive *brand* face — display, headline and title. | 1 variable — `opsz 6..144`, `wght 1..1000` | OFL |
| **Roboto** | baseline | The next fallback after Roboto Flex. A different family from it, so both are vendored. | 1 variable, roman + italic — `wght 100..900` | OFL |
| **Material Symbols Rounded** | baseline | The icon font. Rounded, not Outlined — it matches Expressive's soft geometry. | 1 variable — `opsz`, `wght`, `FILL`, `GRAD` | Apache 2.0 |

Each family's licence text sits beside its files, as both licences require.

Three things worth knowing:

- **Material Symbols is subsetted to the 63 icons `baseline/` actually names.**
  Unsubsetted, Google Fonts serves it as one block covering every icon — 3.9 MB.
  The subset is 73 KiB. If you add an icon to a component, run
  `python3 tools/icon-names.py` and paste the result into
  `MATERIAL_SYMBOLS_ICONS` in `tools/fetch-fonts.py`, then re-vendor; an icon
  that is used but not vendored renders as its literal ligature text, which is
  the tell.
- **The full icon set is vendored separately.** `fonts/material-symbols-full/`
  holds every icon in Rounded, Outlined and Sharp (~12.6 MB of woff2), fetched
  from [google/material-design-icons](https://github.com/google/material-design-icons)
  by `python3 tools/fetch-symbols.py`. Link `components/icons-full.css` after the
  bridge to use it; the React package and its Claude Design sync always do.
- **Only the `latin` and `latin-ext` subsets are vendored.** Cyrillic, Greek and
  Vietnamese are left out, which is what keeps the whole set near 1 MB. Widen a
  family's subset set in `tools/fetch-fonts.py` if you need them.
- **Newsreader is deliberately not vendored.** The theme's base layer names it
  for `--font-figure` (a display serif for hero numbers), but the theme
  re-points `--font-figure` at the sans, because Material sets display and
  headline in the same face at a larger size and heavier weight. Under the theme
  the serif is never asked for; load the base layer alone and it falls back to
  Georgia.

The variable axes matter. The theme widens Roboto Flex to `wdth 110`, and the
icon font's `FILL` axis is how an icon fills in when selected — a static build
would silently drop both.

```sh
python3 tools/fetch-fonts.py    # re-vendor everything; rewrites both bundles
```

## Where this came from

The theme was extracted from the dashboard in
[SigmaOS](https://github.com/MindmatterSolutions/SigmaOS), where it was designed
and where it still ships — that copy stays the live one, and this repo is the
standalone extraction, not its replacement. Its colour is Material's dark scheme
generated from `#ff7a1a` with `material-color-utilities`' **SchemeFidelity**;
fidelity is the point, because the default TonalSpot scheme puts `primary` at
tone 80 and turns a saturated orange into a pale peach.

The baseline system came out of a Claude Design project of the same name. Its
own `baseline/readme.md` is Google's documentation of it, carried over intact.

## Browser support

Both systems use `color-mix()` and variable-font axes via
`font-variation-settings`; the baseline also uses CSS `linear()` easing for its
springs and `clip-path` polygons for the shape library. Current Chrome, Edge,
Firefox and Safari handle all of it. There is no `color-mix()` fallback: the
accent washes resolve to nothing without it, rather than to a wrong colour.
