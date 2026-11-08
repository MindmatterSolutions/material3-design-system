---
category: Theme
---

The root of every design built with this system. Wrap the whole design in `<ThemeRoot>` so the page gets the theme's surface, the on-surface ink and the theme's sans. Without it the page has no ground of its own.

## Composition

Wrap the entire design once: `<ThemeRoot>…</ThemeRoot>` for the default SigmaOS blue in dark, or `<ThemeRoot accent="teal" mode="light">…</ThemeRoot>`. Give it `style={{ minHeight: '100vh' }}` for a full page. `accent` and `mode` set `data-accent` and `data-theme` on `<html>`, where the theme reads them — so it is **one accent and one mode per page**; two roots that disagree on one page would fight.

## Props

- `accent`: `"nwu" | "violet" | "lavender" | "indigo" | "blue" | "neon-blue" | "navy" | "sky" | "cyan" | "turquoise" | "teal" | "mint" | "green" | "pine" | "lime" | "olive" | "neon-amber" | "orange" | "peach" | "rose" | "magenta" | "fuchsia" | "plum" | "mauve" | "graphite" | "slate" | "sand" | "cocoa"` — the whole scheme follows the seed, the ground included (Material tints its neutrals toward the accent); status colours stay put. Default `neon-blue`, the SigmaOS icon's blue `#3d8bff` with the mark's amber as the tertiary; `nwu` is the NWU purple (Pantone 2603 C) with the university's turquoise.
- `mode`: `"dark" | "light"` — Material's dark or light scheme from the same seed. Default dark.
- `style`, `className` — pass layout here; padding defaults to 16px.
