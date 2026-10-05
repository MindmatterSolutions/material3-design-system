---
category: Icons
---

An icon element. Renders Google's `<md-icon>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Text content is a Material Symbols Rounded ligature, e.g. `<Icon>favorite</Icon>`. Only the vendored subset exists (see README); anything else renders as its literal name.

## Slots

- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
