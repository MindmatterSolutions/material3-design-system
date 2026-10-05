---
category: Navigation
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-tabs>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<PrimaryTab>`s or `<SecondaryTab>`s; `activeTabIndex` picks one. Render the panels yourself.

## Slots

- default (children)

## Events

- `onChange` ← `change` — Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event. --bubbles

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `activeTabIndex`: `number` — The index of the currently selected tab
- `autoActivate`: `boolean` — Whether or not to automatically select a tab when it is focused
