---
category: Containment
---

A divider component. Renders Google's `<md-divider>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

`inset`, `insetStart`, `insetEnd` indent it inside lists.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `inset`: `boolean` — Indents the divider with equal padding on both sides
- `insetEnd`: `boolean` — Indents the divider with padding on the trailing side
- `insetStart`: `boolean` — Indents the divider with padding on the leading side
