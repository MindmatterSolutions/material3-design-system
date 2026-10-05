---
category: Inputs
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-select-option>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<FilledSelect>` / `<OutlinedSelect>`; the visible text goes in `<div slot="headline">`.

## Slots

- `slot="start"`
- `slot="end"`
- default (children)
- `slot="overline"`
- `slot="headline"`
- `slot="supporting-text"`
- `slot="trailing-supporting-text"`

## Events

- `onCloseMenu` ← `close-menu` — >} Closes the encapsulating menu on closable interaction. --bubbles --composed
- `onRequestSelection` ← `request-selection` — Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`. --bubbles --composed
- `onRequestDeselection` ← `request-deselection` — Requests the parent md-select to deselect this element when `selected` changed to `false`. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean` — Disables the item and makes it non-selectable and non-interactive
- `displayText`: `string` — The text that is displayed in the select field when selected
- `isMenuItem`: `boolean` — READONLY: self-identifies as a menu item and sets its identifying attribute
- `selected`: `boolean` — Sets the item in the selected visual state when a submenu is opened
- `type`: `"option"`
- `typeaheadText`: `string` — The text that is selectable via typeahead
- `value`: `string` — Form value of the option
