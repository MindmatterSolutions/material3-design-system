---
category: Expressive
---

A Material Design menu group component. Renders Google's `<md-gb-menu-group>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Wraps `<ExpressiveMenuItem>`s inside `<ExpressiveMenu>`; `checkable="single"|"multiple"` makes them a radio or checkbox group.

## Slots

- default (children) — Used to display the menu group's items.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checkable`: `"single" | "multiple"`
