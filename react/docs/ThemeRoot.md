---
category: Theme
---

The root of every design built with this system. The theme is **dark only**: wrap the whole design in `<ThemeRoot>` so the page gets the dark surface, the on-surface ink and the theme's sans. Without it, light ink lands on a white page.

## Composition

Wrap the entire design once: `<ThemeRoot accent="teal">…</ThemeRoot>`. Give it `style={{ minHeight: '100vh' }}` for a full page. `accent` sets `data-accent` on `<html>`, where the theme reads it — so it is **one accent per page**; two roots with different accents on one page would fight.

## Props

- `accent`: `"orange" | "violet" | "teal" | "blue" | "green" | "rose"` — only the accent roles move; surfaces, ink and outlines stay put. Default orange.
- `style`, `className` — pass layout here; padding defaults to 16px.
