---
category: Buttons
---

A filled tonal button component. Renders Google's `<md-filled-tonal-button>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Put `<Icon slot="icon">` inside for an icon; add `trailingIcon` to put it after the label.

## Slots

- `slot="icon"`
- default (children)

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean` — Whether or not the element is disabled
- `download`: `string` — The filename to use when downloading the linked resource
- `hasIcon`: `boolean` — Whether to display the icon or not
- `href`: `string` — The URL that the link button points to
- `name`: `string` — The HTML name to use in form submission
- `softDisabled`: `boolean` — Whether or not the button is "soft-disabled" (disabled but still focusable)
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"` — Where to display the linked `href` URL for a link button
- `trailingIcon`: `boolean` — Whether to render the icon at the inline end of the label rather than the inline start
- `type`: `string` — A string indicating the form submission behavior of the element
- `value`: `string` — The value of the button
