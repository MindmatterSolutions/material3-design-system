---
category: Navigation
---

b/265346501 - add docs Renders Google's `<md-navigation-drawer>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

`opened` shows it. Put a `<List>` of `<ListItem type="button">`s inside.

## Slots

- default (children)

## Events

- `onNavigationDrawerChanged` ← `navigation-drawer-changed` — >} Dispatched whenever the drawer opens or closes --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `opened`: `boolean`
- `pivot`: `"start" | "end"`
