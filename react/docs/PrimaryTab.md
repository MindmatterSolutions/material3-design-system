---
category: Navigation
---

A primary tab component. Renders Google's `<md-primary-tab>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<Tabs>`. Optional `<Icon slot="icon">`.

## Slots

- `slot="icon"`
- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `active`: `boolean` — Whether or not the tab is selected
- `hasIcon`: `boolean` — In SSR, set this to true when an icon is present
- `iconOnly`: `boolean` — In SSR, set this to true when there is no label and only an icon
- `inlineIcon`: `boolean` — Whether or not the icon renders inline with label or stacked vertically
- `selected`: `boolean`
