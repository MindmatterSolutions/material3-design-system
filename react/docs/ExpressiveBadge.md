---
category: Expressive
---

A Material Design badge component. Renders Google's `<md-gb-badge>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Empty for a dot; text content for a count. It has no positioning of its own — wrap the icon and badge in a `position: relative` box and place the badge absolutely.

## Slots

- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
