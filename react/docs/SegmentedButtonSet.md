---
category: Buttons
---

MdOutlinedSegmentedButtonSet is the custom element for the Material Design outlined segmented button set component. Renders Google's `<md-outlined-segmented-button-set>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are `<SegmentedButton>`s; `multiselect` allows several selected.

## Slots

- default (children)

## Events

- `onSegmentedButtonSetSelection` ← `segmented-button-set-selection` — >} Dispatched when a button is selected programattically with the `setButtonSelected` or the `toggleSelection` methods as well as on user interaction. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `multiselect`: `boolean`
