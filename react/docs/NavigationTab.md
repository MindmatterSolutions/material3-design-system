---
category: Navigation
---

b/265346501 - add docs Renders Google's `<md-navigation-tab>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<NavigationBar>`. `<Icon slot="active-icon">` and `<Icon slot="inactive-icon">`; `showBadge` + `badgeValue` for a count.

## Slots

- `slot="inactive-icon"`
- `slot="active-icon"`

## Events

- `onNavigationTabRendered` ← `navigation-tab-rendered` — Dispatched when the navigation tab's DOM has rendered and custom element definition has loaded. --bubbles --composed
- `onNavigationTabInteraction` ← `navigation-tab-interaction` — >} Dispatched when the navigation tab has been clicked. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `active`: `boolean`
- `badgeValue`: `string`
- `disabled`: `boolean`
- `hideInactiveLabel`: `boolean`
- `label`: `string`
- `showBadge`: `boolean`
