---
category: Expressive
---

A Material Design switch component. Renders Google's `<md-gb-switch>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Wrap in a `<label>`. Optional `<Icon slot="on-icon">` / `<Icon slot="off-icon">`.

## Slots

- `slot="off-icon"` — Used to show an icon when the switch is unselected.
- `slot="on-icon"` — Used to show an icon when the switch is selected.

## Events

- `onChange` ← `change`
- `onInput` ← `input`

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `defaultSelected`: `boolean` — The default selected state of the switch
- `disabled`: `boolean` — Whether or not the element is disabled
- `name`: `string` — The HTML name to use in form submission
- `required`: `boolean` — When true, require the switch to be selected when participating in form submission
- `selected`: `boolean` — Puts the switch in the selected state and sets the form submission value to the `value` property
- `value`: `string` — The value associated with this switch on form submission
