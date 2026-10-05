---
category: Expressive
---

A Material Design split button component. Renders Google's `<md-gb-split-button>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Exactly two native `<button>` children: `slot="leading"` (the action, may contain an `<Icon>` and text) and `slot="trailing"` (the menu toggle; the chevron is drawn for you — leave it empty and give it an `aria-label`).

## Slots

- `slot="leading"` — Requires a `<button>` for the main action.
- `slot="trailing"` — Requires a `<button>` for the menu action. Use `popovertarget` to display a menu.
- default (children) — Used to render the trailing button's popover menu.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `color`: `"filled" | "elevated" | "tonal" | "outlined"`
- `selected`: `boolean`
- `size`: `"xs" | "sm" | "md" | "lg" | "xl"`
