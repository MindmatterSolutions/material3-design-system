---
category: Expressive
---

A Material Design list item component. Renders Google's `<md-gb-list-item>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<ExpressiveList>`. Default slot is the headline; use the named slots for the rest.

## Slots

- default (children) — Used to display the item's primary label.
- `slot="avatar"` — Used to display a circular avatar before the item's content.
- `slot="leading"` — Used to display icons and content before the item's main content.
- `slot="overline"` — Used to display overline text above the main label.
- `slot="supporting-text"` — Used to display supporting text below the main label.
- `slot="trailing-text"` — Used to display metadata or text after the item's main content.
- `slot="trailing"` — Used to display icons and content after the item's main content.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean` — Whether the list item is selected
- `disabled`: `boolean` — Whether the list item is disabled
- `nonInteractive`: `boolean` — Whether the list item is non-interactive
