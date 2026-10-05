---
category: Containment
---

The `<md-elevation>` custom element with default styles. Elevation is the relative distance between two surfaces along the z-axis. Renders Google's `<md-elevation>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Place inside a `position: relative` element and set `--md-elevation-level: 0..5` on that element to cast its shadow.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
