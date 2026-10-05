---
category: Containment
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-list>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<ListItem>`s, optionally separated by `<Divider>`.

## Slots

- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
