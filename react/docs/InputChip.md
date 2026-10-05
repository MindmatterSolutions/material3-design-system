---
category: Chips
---

TODO(b/243982145): add docs Renders Google's `<md-input-chip>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<ChipSet>`. `avatar` + `<Icon slot="icon">` for a person chip.

## Slots

- `slot="icon"`
- default (children)

## Events

- `onRemove` ← `remove` — Dispatched when the remove button is clicked.
- `onUpdateFocus` ← `update-focus` — Dispatched when `disabled` is toggled. --bubbles

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `alwaysFocusable`: `boolean` — When true, allow disabled chips to be focused with arrow keys
- `ariaLabelRemove`: `string`
- `avatar`: `boolean`
- `disabled`: `boolean` — Whether or not the chip is disabled
- `hasIcon`: `boolean` — Only needed for SSR
- `href`: `string`
- `label`: `string` — The label of the chip
- `removeOnly`: `boolean`
- `selected`: `boolean`
- `softDisabled`: `boolean` — Whether or not the chip is "soft-disabled" (disabled but still focusable)
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"`
