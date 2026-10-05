---
category: Expressive
---

A Material Design fab component. Renders Google's `<md-gb-fab>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Child is an `<Icon>`, optionally followed by a text label for an extended FAB.

## Slots

- default (children) — Used to display an icon and optional label.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `color`: `"primary" | "primary-container" | "secondary" | "secondary-container" | "tertiary" | "tertiary-container"`
- `size`: `"default" | "md" | "lg"`
