---
category: Feedback
---

A circular progress component. Renders Google's `<md-circular-progress>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

`value` 0..1 (or set `max`); `indeterminate` spins; `fourColor` cycles the accent roles.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `fourColor`: `boolean` — Whether or not to render indeterminate mode using 4 colors instead of one
- `indeterminate`: `boolean` — Whether or not to display indeterminate progress, which gives no indication to how long an activity will take
- `max`: `number` — Maximum progress to display, defaults to 1
- `value`: `number` — Progress to display, a fraction between 0 and `max`
