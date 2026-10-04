# Material 3 Expressive

A Material Design 3 **theme layer**, self-contained and with its fonts vendored.

The thing to hold onto is that this is two layers, not one:

- **The base layer** (`tokens/base/`) declares a semantic vocabulary —
  `--bg-page`, `--surface-card`, `--text-primary`, `--accent-primary`, the eight
  status hues, the spacing and shadow scales. It is a dark instrument-panel
  theme in its own right ("Midnight").
- **The theme layer** (`tokens/m3-expressive.css`) declares Material 3's system
  roles (`--md-sys-color-*`, `--md-sys-shape-*`, `--md-sys-motion-*`) and then
  **re-points every semantic token at them**.

Nothing that consumes the vocabulary knows the theme exists. Delete the one
`@import` at the foot of [`index.css`](index.css) and you are back on the base
layer exactly — no component changes, no class names to swap. That escape hatch
is the design, not a leftover.

Open [`index.html`](index.html) for the specimen: every colour role, the type
scale, shape, the motion curves and the live semantic mapping.

## Use it

```html
<link rel="stylesheet" href="path/to/index.css">
```

or from a bundler:

```js
import 'material3-design-system/index.css';
```

That one file pulls the fonts and both token layers in the order they have to
load. Then write `var(--surface-card)`, `var(--text-secondary)`,
`var(--accent-primary)` and so on — never a literal.

### Accents

The accent picker is one attribute on `<html>`:

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

## Layout

| Path | What it is |
|---|---|
| `index.css` | The entry point. Imports everything in load order — that order is the contract. |
| `index.html` | The specimen page. Static; open it directly. |
| `tokens/m3-expressive.css` | The theme: Material's system roles, then the semantic layer re-pointed onto them. |
| `tokens/base/colors.css` | Raw palette, surfaces, ink, borders, the eight status hues, chart series. |
| `tokens/base/typography.css` | Families, the size scale, weights, tracking, heading roles. |
| `tokens/base/spacing.css` | The space scale, radii, control and panel metrics. |
| `tokens/base/effects.css` | Shadows, glows, the lit-grid ground, transitions. |
| `fonts/fonts.css` | `@font-face` for the theme's 12 vendored faces. |
| `fonts/baseline.css` | `@font-face` for the baseline system's faces. |
| `fonts/<family>/` | The `.woff2` files and that family's licence. |
| `tools/fetch-fonts.py` | Re-fetches and re-vendors the fonts. |

## Google's baseline Expressive system — not here yet

A second system is on its way into `baseline/`: Google's **baseline** Expressive
design system (the `#6750A4` tonal-spot scheme), with the type styles, the corner
scale, the library shapes, the springs and the Expressive components — five button
sizes, button groups, split button, FAB menu, loading indicator, wavy progress,
toolbars, the flexible nav bar and rail. Its fonts are already vendored
(`fonts/baseline.css`); the system itself still has to be pulled out of the
Claude Design project it was authored in.

**The two will never be loadable together.** Both define `--md-sys-color-*` with
different values, so whichever loads second wins and the result is neither
system. They get separate directories and separate entry points for exactly that
reason — `index.css` will not import `baseline/`, and nothing should import both.

## Fonts

Self-hosted, so the system makes **no third-party request at runtime** and
nothing waits on `fonts.googleapis.com` to paint.

Two bundles, one per system, because the two must not be loaded together:

- `fonts/fonts.css` — the dashboard theme's faces
- `fonts/baseline.css` — the baseline system's faces

| Family | Bundle | Role | Faces | Licence |
|---|---|---|---|---|
| **Roboto Flex** | theme | The Expressive sans. Carries every Material role, display to label. | 1 variable — `opsz 8..144`, `wdth 25..151`, `wght 100..1000` | OFL |
| **IBM Plex Mono** | theme | Figures and instrument readouts, where tabular digits are the job. | 400, 500, 600, 700 | OFL |
| **Inter** | theme | The fallback behind Roboto Flex in `--font-sans`, and the base layer's own sans. | 1 variable — `wght 400..800` | OFL |
| **Roboto** | baseline | Baseline M3's own typeface — what `md.ref.typeface.plain` and `.brand` resolve to. A *different family* from Roboto Flex, so both are vendored. | 2 variable — `wght 100..900`, roman + italic | Apache 2.0 |

Each family's licence text sits beside its files, as both licences require.

Three notes on what is *not* here:

- **Material Symbols Outlined is not vendored yet.** Google Fonts serves it as
  one block covering every icon — 3.9 MB, too much to hand a browser or carry
  here for the handful of glyphs the components use. It needs a subset pass
  against the real icon list; `tools/fetch-fonts.py` has the query and an empty
  `MATERIAL_SYMBOLS_ICONS` list ready for it.

- **Only the `latin` and `latin-ext` subsets are vendored.** Cyrillic, Greek and
  Vietnamese are left out, which is what keeps the whole set to ~600 KiB. If you
  need them, widen `KEEP` in `tools/fetch-fonts.py` and re-run it.
- **Newsreader is not vendored, deliberately.** The base layer names it for
  `--font-figure` (a display serif for hero numbers), but the theme re-points
  `--font-figure` at the sans, because Material sets its display and headline
  roles in the same face at a larger size and heavier weight. Under this theme
  the serif is never asked for. If you load the base layer *without* the theme
  and want that second voice back, add Newsreader yourself — it will fall back to
  Georgia until you do.

The `wdth` axis matters: the display and card-title roles widen to 110, so a
static Roboto build would silently drop that. `tools/fetch-fonts.py` requests the
variable face and keeps the axis.

```sh
python3 tools/fetch-fonts.py    # re-vendor; rewrites fonts/fonts.css
```

## Where this came from

Extracted from the dashboard in
[SigmaOS](https://github.com/MindmatterSolutions/SigmaOS), where this theme was
designed and where it still ships — that copy stays the live one, and this repo
is the standalone extraction, not its replacement. The theme itself was built in
a Claude Design fork, "SigmaOS Design System — M3 Expressive".

Colour is Material's dark scheme generated from the seed `#ff7a1a` with
`material-color-utilities`' **SchemeFidelity**. Fidelity is the point: the
default TonalSpot scheme puts `primary` at tone 80 and turns a saturated orange
into a pale peach, while fidelity keeps the seed itself as the primary container.

The Expressive motion curves are springs approximated as cubic-béziers. The
spatial ones overshoot — that is what makes them expressive — and are only for
`transform` and size; the effects curves do not overshoot, and they are the ones
for colour and opacity.

## Browser support

Uses `color-mix()` for the accent tints and variable-font axes via
`font-variation-settings`. Current Chrome, Edge, Firefox and Safari all handle
both. There is no fallback for `color-mix()`: the accent washes resolve to
nothing without it, rather than to a wrong colour.
