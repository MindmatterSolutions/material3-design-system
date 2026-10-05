---
category: Expressive
---

A Material Design icon button component. Renders Google's `<md-gb-icon-button>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Child is a single `<Icon>`. Always give it an `aria-label`.

## Slots

- default (children) — Used to display an icon.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `color`: `"filled" | "tonal" | "outlined" | "standard"` — The color of the button
- `disabled`: `boolean` — Whether or not the element is disabled
- `download`: `string` — The filename to use when downloading the linked resource
- `href`: `string` — The URL that the link button points to
- `name`: `string` — The HTML name to use in form submission
- `selected`: `boolean` — Whether or not the button is selected, when `type="toggle"`
- `size`: `"xs" | "sm" | "md" | "lg" | "xl"` — The size of the button
- `softDisabled`: `boolean` — Whether or not the button is "soft-disabled" (disabled but still focusable)
- `square`: `boolean` — Changes the shape of the button to be square
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"` — Where to display the linked `href` URL for a link button
- `type`: `string` — A string indicating the behavior of the button
- `value`: `string` — The value of the button
- `width`: `"" | "narrow" | "wide"` — Changes the width of the button
