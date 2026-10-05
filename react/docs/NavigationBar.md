---
category: Navigation
---

b/265346501 - add docs Renders Google's `<md-navigation-bar>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<NavigationTab>`s; `activeIndex` picks one. It sizes to its container — put it at the bottom of your phone layout.

## Slots

- default (children)

## Events

- `onNavigationBarActivated` ← `navigation-bar-activated` — Dispatched whenever the `activeIndex` changes. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `activeIndex`: `number`
- `hideInactiveLabels`: `boolean`
