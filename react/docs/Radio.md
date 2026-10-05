---
category: Inputs
---

A radio component. Renders Google's `<md-radio>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Give every radio in a group the same `name`; wrap each in a `<label>`.

## Events

- `onInput` ← `input` — Dispatched when the value changes from user interaction. --bubbles
- `onChange` ← `change` — Dispatched when the value changes from user interaction. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean` — Whether or not the radio is selected
- `disabled`: `boolean` — Whether or not the element is disabled
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — Whether or not the radio is required
- `value`: `string` — The element value to use in form submission when checked
