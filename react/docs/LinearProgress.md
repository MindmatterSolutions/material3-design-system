---
category: Feedback
---

A linear progress component. Renders Google's `<md-linear-progress>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

`value` 0..1, `buffer` for a buffer bar, `indeterminate`, `fourColor`.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `buffer`: `number` — Buffer amount to display, a fraction between 0 and `max`
- `fourColor`: `boolean` — Whether or not to render indeterminate mode using 4 colors instead of one
- `indeterminate`: `boolean` — Whether or not to display indeterminate progress, which gives no indication to how long an activity will take
- `max`: `number` — Maximum progress to display, defaults to 1
- `value`: `number` — Progress to display, a fraction between 0 and `max`
