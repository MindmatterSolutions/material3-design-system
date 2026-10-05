---
category: Buttons
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-branded-fab>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Child is `<Icon slot="icon">`; `label` makes it extended.

## Slots

- `slot="icon"`

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `label`: `string` — The text to display on the FAB
- `lowered`: `boolean` — Lowers the FAB's elevation
- `size`: `"medium" | "small" | "large"` — The size of the FAB
- `variant`: `"surface" | "primary" | "secondary" | "tertiary"` — Branded FABs have no variants
