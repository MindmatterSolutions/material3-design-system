---
category: Expressive
---

A Material Design menu item component. Renders Google's `<md-gb-menu-item>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<ExpressiveMenu>` (optionally in an `<ExpressiveMenuGroup>`).

## Slots

- default (children) — Used to display the item's primary label.
- `slot="leading"` — Used to display icons and content before the item's main content.
- `slot="supporting-text"` — Used to display supporting text below the main label.
- `slot="trailing-text"` — Used to display metadata or text after the item's main content.
- `slot="trailing"` — Used to display icons and content after the item's main content.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean`
- `disabled`: `boolean`
