---
category: Inputs
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-switch>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Wrap in a `<label>`. `icons` shows a check/close icon in the handle.

## Slots

- `slot="on-icon"`
- `slot="off-icon"`

## Events

- `onInput` ← `input` — Fired whenever `selected` changes due to user interaction (bubbles and composed).
- `onChange` ← `change` — Fired whenever `selected` changes due to user interaction (bubbles).

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean` — Whether or not the element is disabled
- `icons`: `boolean` — Shows both the selected and deselected icons
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — When true, require the switch to be selected when participating in form submission
- `selected`: `boolean` — Puts the switch in the selected state and sets the form submission value to the `value` property
- `showOnlySelectedIcon`: `boolean` — Shows only the selected icon, and not the deselected icon
- `value`: `string` — The value associated with this switch on form submission
