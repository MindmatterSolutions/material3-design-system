---
category: Expressive
---

A Material Design radio component. Renders Google's `<md-gb-radio>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Give every radio in a group the same `name`. Wrap each in a `<label>`.

## Events

- `onChange` ← `change`
- `onInput` ← `input`

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean` — Whether or not the radio is selected
- `defaultChecked`: `boolean` — The default checked state of the radio
- `disabled`: `boolean` — Whether or not the element is disabled
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — Whether or not the radio is required
- `value`: `string` — The element value to use in form submission when checked
