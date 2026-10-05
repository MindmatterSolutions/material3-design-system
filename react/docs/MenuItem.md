---
category: Containment
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-menu-item>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<Menu>`; the text goes in `<div slot="headline">`.

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

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean` — Disables the item and makes it non-selectable and non-interactive
- `href`: `string` — Sets the underlying `HTMLAnchorElement`'s `href` resource attribute
- `keepOpen`: `boolean` — Keeps the menu open if clicked or keyboard selected
- `selected`: `boolean` — Sets the item in the selected visual state when a submenu is opened
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"` — Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set
- `type`: `"menuitem" | "option" | "button" | "link"` — Sets the behavior and role of the menu item, defaults to "menuitem"
- `typeaheadText`: `string` — The text that is selectable via typeahead
