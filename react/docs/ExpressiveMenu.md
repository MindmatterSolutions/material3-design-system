---
category: Expressive
---

A Material Design menu component. Renders Google's `<md-gb-menu>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

A popover: give it an `id` and open it from a button with `popoverTarget` (or call `showPopover()`). Children are `<ExpressiveMenuItem>`s, optionally inside `<ExpressiveMenuGroup>`s, separated by `<ExpressiveDivider>`.

## Slots

- default (children) — Used to display the menu's items.

## Events

- `onToggle` ← `toggle`

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `color`: `"standard" | "vibrant"`
