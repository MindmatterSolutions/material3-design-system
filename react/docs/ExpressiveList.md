---
category: Expressive
---

A Material Design list component. Renders Google's `<md-gb-list>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<ExpressiveListItem>`s. `segmented` separates them into individual rounded tiles.

## Slots

- default (children) — Used to display list items.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `segmented`: `boolean` — Whether to render the list with segmented items
