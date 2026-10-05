---
category: Inputs
---

Slider component. Renders Google's `<md-slider>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

`range` with `valueStart`/`valueEnd` for two handles; `labeled` shows the value bubble; `ticks` with `step` for discrete.

## Events

- `onChange` ← `change` — The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) --bubbles
- `onInput` ← `input` — The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `ariaLabelEnd`: `string` — Aria label for the slider's end handle displayed when range is true
- `ariaLabelStart`: `string` — Aria label for the slider's start handle displayed when range is true
- `ariaValueTextEnd`: `string` — Aria value text for the slider's end value displayed when range is true
- `ariaValueTextStart`: `string` — Aria value text for the slider's start value displayed when range is true
- `disabled`: `boolean` — Whether or not the element is disabled
- `labeled`: `boolean` — Whether or not to show a value label when activated
- `max`: `number` — The slider maximum value
- `min`: `number` — The slider minimum value
- `name`: `string` — The HTML name to use in form submission
- `nameEnd`: `string` — The HTML name to use in form submission for a range slider's ending value
- `nameStart`: `string` — The HTML name to use in form submission for a range slider's starting value
- `range`: `boolean` — Whether or not to show a value range
- `step`: `number` — The step between values
- `ticks`: `boolean` — Whether or not to show tick marks
- `value`: `number` — The slider value displayed when range is false
- `valueEnd`: `number` — The slider end value displayed when range is true
- `valueLabel`: `string` — An optional label for the slider's value displayed when range is false; if not set, the label is the value itself
- `valueLabelEnd`: `string` — An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself
- `valueLabelStart`: `string` — An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself
- `valueStart`: `number` — The slider start value displayed when range is true
