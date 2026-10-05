---
category: Inputs
---

A checkbox component. Renders Google's `<md-checkbox>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Wrap in a `<label>` with the text, as `@material/web` documents.

## Events

- `onChange` ← `change` — The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) --bubbles
- `onInput` ← `input` — The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `checked`: `boolean` — Whether or not the checkbox is selected
- `disabled`: `boolean` — Whether or not the element is disabled
- `indeterminate`: `boolean` — Whether or not the checkbox is indeterminate
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — When true, require the checkbox to be selected when participating in form submission
- `value`: `string` — The value of the checkbox that is submitted with a form when selected
