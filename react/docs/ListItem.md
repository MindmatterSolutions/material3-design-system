---
category: Containment
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-list-item>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Use inside `<List>`. Default slot is the headline; `slot="start"` / `slot="end"` for icons, `slot="supporting-text"` / `slot="overline"` for extra lines. `type="button"` makes it interactive.

## Slots

- `slot="start"`
- `slot="end"`
- default (children)
- `slot="overline"`
- `slot="headline"`
- `slot="supporting-text"`
- `slot="trailing-supporting-text"`

## Events

- `onRequestActivation` ← `request-activation` — Requests the list to set `tabindex=0` on the item and focus it. Used internally for list keyboard navigation; most applications do not need to listen for this event. It is exposed for authors building their own list-item replacements or wrapping items in a custom controller. --bubbles --composed

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `disabled`: `boolean` — Disables the item and makes it non-selectable and non-interactive
- `href`: `string` — Sets the underlying `HTMLAnchorElement`'s `href` resource attribute
- `isListItem`: `boolean` — READONLY
- `target`: `"" | "_blank" | "_parent" | "_self" | "_top"` — Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set
- `type`: `"text" | "button" | "link"` — Sets the behavior of the list item, defaults to "text"
