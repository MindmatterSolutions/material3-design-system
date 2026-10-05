---
category: Inputs
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-filled-select>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<SelectOption value="…"><div slot="headline">Label</div></SelectOption>`.

## Slots

- `slot="leading-icon"`
- `slot="trailing-icon"`
- default (children)

## Events

- `onChange` ← `change` — The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) --bubbles
- `onInput` ← `input` — The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) --bubbles --composed
- `onOpening` ← `opening` — Fired when the select's menu is about to open.
- `onOpened` ← `opened` — Fired when the select's menu has finished animations and opened.
- `onClosing` ← `closing` — Fired when the select's menu is about to close.
- `onClosed` ← `closed` — Fired when the select's menu has finished animations and closed.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `clampMenuWidth`: `boolean` — Clamps the menu-width to the width of the select
- `disabled`: `boolean` — Whether or not the element is disabled
- `displayText`: `string` — Text to display in the field
- `error`: `boolean` — Gets or sets whether or not the select is in a visually invalid state
- `errorText`: `string` — The error message that replaces supporting text when `error` is true
- `hasLeadingIcon`: `boolean` — Whether or not the text field has a leading icon
- `label`: `string` — The floating label for the field
- `menuAlign`: `"start" | "end"` — Whether the menu should be aligned to the start or the end of the select's textbox
- `menuPositioning`: `"absolute" | "fixed" | "popover"` — Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute
- `name`: `string` — The HTML name to use in form submission
- `noAsterisk`: `boolean` — Disables the asterisk on the floating label, when the select is required
- `quick`: `boolean` — Opens the menu synchronously with no animation
- `required`: `boolean` — Whether or not the select is required
- `selectedIndex`: `number` — The index of the currently selected option
- `supportingText`: `string` — Conveys additional information below the select, such as how it should be used
- `typeaheadDelay`: `number` — The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer
- `value`: `string` — The value of the currently selected option
