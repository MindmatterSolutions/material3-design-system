---
category: Containment
---

Base element class that manages element properties and attributes, and renders a lit-html template. To define a component, subclass `LitElement` and implement a `render` method to provide the component's template. Define properties using the {@linkcode LitElement.properties properties} property or the {@linkcode property} decorator. Renders Google's `<md-menu>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Give the anchor element an `id` and the menu `anchor="<that id>"`; toggle `open`. `positioning="popover"` escapes overflow. Children are `<MenuItem>`s / `<SubMenu>`s.

## Slots

- default (children)

## Events

- `onOpening` ← `opening` — Fired before the opening animation begins
- `onOpened` ← `opened` — Fired once the menu is open, after any animations
- `onClosing` ← `closing` — Fired before the closing animation begins
- `onClosed` ← `closed` — Fired once the menu is closed, after any animations

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `anchor`: `string` — The ID of the element in the same root node in which the menu should align to
- `anchorCorner`: `"end-start" | "end-end" | "start-start" | "start-end"` — The corner of the anchor which to align the menu in the standard logical property style of <block>-<inline> e.g
- `defaultFocus`: `"none" | "list-root" | "first-item" | "last-item"` — The element that should be focused by default once opened
- `hasOverflow`: `boolean` — Displays overflow content like a submenu
- `isSubmenu`: `boolean` — Whether or not the current menu is a submenu and should not handle specific navigation keys
- `menuCorner`: `"end-start" | "end-end" | "start-start" | "start-end"` — The corner of the menu which to align the anchor in the standard logical property style of <block>-<inline> e.g
- `noHorizontalFlip`: `boolean` — Disable the `flip` behavior that usually happens on the horizontal axis when the surface would render outside the viewport
- `noNavigationWrap`: `boolean` — Turns off navigation wrapping
- `noVerticalFlip`: `boolean` — Disable the `flip` behavior that usually happens on the vertical axis when the surface would render outside the viewport
- `open`: `boolean` — Opens the menu and makes it visible
- `positioning`: `"absolute" | "fixed" | "document" | "popover"` — Whether the positioning algorithm should calculate relative to the parent of the anchor element (`absolute`), relative to the window (`fixed`), or relative to the document (`document`)
- `quick`: `boolean` — Skips the opening and closing animations
- `skipRestoreFocus`: `boolean` — After closing, does not restore focus to the last focused element before the menu was opened
- `stayOpenOnFocusout`: `boolean` — Keeps the menu open when focus leaves the menu's composed subtree
- `stayOpenOnOutsideClick`: `boolean` — Keeps the user clicks outside the menu
- `typeaheadDelay`: `number` — The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer
- `xOffset`: `number` — Offsets the menu's inline alignment from the anchor by the given number in pixels
- `yOffset`: `number` — Offsets the menu's block alignment from the anchor by the given number in pixels
