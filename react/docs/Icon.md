---
category: Icons
---

An icon element. Renders Google's `<md-icon>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Text content is any Material Symbols ligature (all 4,299 names in fonts.google.com/icons), e.g. `<Icon>favorite</Icon>`. Rounded is the default style; `className="icon-outlined"` or `"icon-sharp"` (on the icon or any ancestor) switches it. Size with `--md-icon-size`, fill with `--md-icon-fill: 1`, weight with `--md-icon-wght` (100–700) — as CSS custom properties in `style`.

## Slots

- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
