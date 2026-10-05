---
category: Expressive
---

A Material Design checkbox component. Renders Google's `<md-gb-checkbox>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Wrap in a `<label>` with the label text to make the text clickable.

## Events

- `onChange` ← `change`
- `onInput` ← `input`

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean` — Whether or not the checkbox is selected
- `defaultChecked`: `boolean` — The default checked state of the checkbox
- `disabled`: `boolean` — Whether or not the element is disabled
- `error`: `boolean` — Whether or not the checkbox is invalid
- `indeterminate`: `boolean` — Whether or not the checkbox is indeterminate
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — When true, require the checkbox to be selected when participating in form submission
- `value`: `string` — The value of the checkbox that is submitted with a form when selected
