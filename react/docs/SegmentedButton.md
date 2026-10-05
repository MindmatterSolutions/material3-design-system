---
category: Buttons
---

MdOutlinedSegmentedButton is the custom element for the Material Design outlined segmented button component. Renders Google's `<md-outlined-segmented-button>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<SegmentedButtonSet>`. Optional `<Icon slot="icon">`.

## Slots

- `slot="icon"`

## Events

- `onSegmentedButtonInteraction` ← `segmented-button-interaction` — Dispatched whenever a button is clicked. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean`
- `hasIcon`: `boolean`
- `label`: `string`
- `noCheckmark`: `boolean`
- `selected`: `boolean`
