---
category: Buttons
---

A button for rendering icons. Renders Google's `<md-filled-icon-button>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Child is a single `<Icon>`; for a toggle add `toggle` and a second `<Icon slot="selected">`.

## Slots

- default (children)
- `slot="selected"`

## Events

- `onInput` ← `input` — Dispatched when a toggle button toggles --bubbles --composed
- `onChange` ← `change` — Dispatched when a toggle button toggles --bubbles

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `ariaLabelSelected`: `string` — The `aria-label` of the button when the button is toggleable and selected
- `disabled`: `boolean` — Whether or not the element is disabled
- `download`: `string` — The filename to use when downloading the linked resource
- `flipIconInRtl`: `boolean` — Flips the icon if it is in an RTL context at startup
- `href`: `string` — Sets the underlying `HTMLAnchorElement`'s `href` resource attribute
- `name`: `string` — The HTML name to use in form submission
- `selected`: `boolean` — Sets the selected state
- `softDisabled`: `boolean` — "Soft-disables" the icon button (disabled but still focusable)
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"` — Sets the underlying `HTMLAnchorElement`'s `target` attribute
- `toggle`: `boolean` — When true, the button will toggle between selected and unselected states
- `type`: `string` — A string indicating the form submission behavior of the element
- `value`: `string` — The value of the button
