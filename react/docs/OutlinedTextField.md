---
category: Inputs
---

TODO(b/228525797): Add docs Renders Google's `<md-outlined-text-field>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Self-closing. `<Icon slot="leading-icon">` / `slot="trailing-icon"` for icons; `type="textarea"` with `rows` for multi-line.

## Slots

- `slot="container"`
- `slot="leading-icon"`
- `slot="trailing-icon"`

## Events

- `onSelect` ← `select` — The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event) --bubbles
- `onChange` ← `change` — The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) --bubbles
- `onInput` ← `input` — The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `autocomplete`: `string` — Describes what, if any, type of autocomplete functionality the input should provide
- `cols`: `number` — The number of cols to display for a `type="textarea"` text field
- `disabled`: `boolean`
- `error`: `boolean` — Gets or sets whether or not the text field is in a visually invalid state
- `errorText`: `string` — The error message that replaces supporting text when `error` is true
- `hasLeadingIcon`: `boolean` — Whether or not the text field has a leading icon
- `hasTrailingIcon`: `boolean` — Whether or not the text field has a trailing icon
- `inputMode`: `string`
- `label`: `string` — The floating Material label of the textfield component
- `max`: `string` — Defines the greatest value in the range of permitted values
- `maxLength`: `number` — The maximum number of characters a user can enter into the text field
- `min`: `string` — Defines the most negative value in the range of permitted values
- `minLength`: `number` — The minimum number of characters a user can enter into the text field
- `multiple`: `boolean` — Indicates that input accepts multiple email addresses
- `name`: `string`
- `noAsterisk`: `boolean` — Disables the asterisk on the floating label, when the text field is required
- `noSpinner`: `boolean` — When true, hide the spinner for `type="number"` text fields
- `pattern`: `string` — A regular expression that the text field's value must match to pass constraint validation
- `placeholder`: `string` — Defines the text displayed in the textfield when it has no value
- `prefixText`: `string` — An optional prefix to display before the input value
- `readOnly`: `boolean` — Indicates whether or not a user should be able to edit the text field's value
- `required`: `boolean` — Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty
- `rows`: `number` — The number of rows to display for a `type="textarea"` text field
- `selectionDirection`: `"forward" | "backward" | "none"` — Gets or sets the direction in which selection occurred
- `selectionEnd`: `number` — Gets or sets the end position or offset of a text selection
- `selectionStart`: `number` — Gets or sets the starting position or offset of a text selection
- `step`: `string` — Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set
- `suffixText`: `string` — An optional suffix to display after the input value
- `supportingText`: `string` — Conveys additional information below the text field, such as how it should be used
- `textDirection`: `string` — Override the input text CSS `direction`
- `type`: `"number" | "email" | "password" | "search" | "tel" | "text" | "url" | "textarea" | "color" | "date" | "datetime-local" | "file" | "month" | "time" | "week"` — The `<input>` type to use, defaults to "text"
- `value`: `string` — The current value of the text field
- `valueAsNumber`: `number` — The text field's value as a number
