---
category: Chips
---

TODO(b/243982145): add docs Renders Google's `<md-suggestion-chip>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<ChipSet>`.

## Slots

- `slot="icon"`
- default (children)

## Events

- `onUpdateFocus` ← `update-focus` — Dispatched when `disabled` is toggled. --bubbles

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `alwaysFocusable`: `boolean` — When true, allow disabled chips to be focused with arrow keys
- `disabled`: `boolean` — Whether or not the chip is disabled
- `download`: `string` — The filename to use when downloading the linked resource
- `elevated`: `boolean`
- `hasIcon`: `boolean` — Only needed for SSR
- `href`: `string`
- `label`: `string` — The label of the chip
- `softDisabled`: `boolean` — Whether or not the chip is "soft-disabled" (disabled but still focusable)
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"`
