---
category: Containment
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-sub-menu>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<Menu>`: one `<MenuItem slot="item">` plus a nested `<Menu slot="menu">`.

## Slots

- `slot="item"`
- `slot="menu"`

## Events

- `onDeactivateItems` ← `deactivate-items` — Requests the parent menu to deselect other items when a submenu opens. --bubbles --composed
- `onRequestActivation` ← `request-activation` — Requests the parent to make the slotted item focusable and focus the item. Used internally for menu keyboard navigation; most applications do not need to listen for this event. It is exposed for authors building their own menu-item replacements, or for advanced cases where you want to call `preventDefault`/`stopPropagation` on it to override default focus handling. --bubbles --composed
- `onDeactivateTypeahead` ← `deactivate-typeahead` — Requests the parent menu to deactivate the typeahead functionality when a submenu opens. --bubbles --composed
- `onActivateTypeahead` ← `activate-typeahead` — Requests the parent menu to activate the typeahead functionality when a submenu closes. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `anchorCorner`: `"end-start" | "end-end" | "start-start" | "start-end"` — The anchorCorner to set on the submenu
- `hoverCloseDelay`: `number` — The delay between ponterleave and the submenu closing
- `hoverOpenDelay`: `number` — The delay between mouseenter and submenu opening
- `isSubMenu`: `boolean` — READONLY: self-identifies as a menu item and sets its identifying attribute
- `menuCorner`: `"end-start" | "end-end" | "start-start" | "start-end"` — The menuCorner to set on the submenu
