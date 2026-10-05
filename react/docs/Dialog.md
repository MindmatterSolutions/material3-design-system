---
category: Containment
---

A dialog component. Renders Google's `<md-dialog>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Set `open` to show it (it is modal). Slots: `<div slot="headline">`, `<div slot="content">` (often a `<form method="dialog" id="…">`), `<div slot="actions">` with buttons.

## Slots

- `slot="icon"`
- `slot="headline"`
- `slot="content"`
- `slot="actions"`

## Events

- `onOpen` ← `open` — Dispatched when the dialog is opening before any animations.
- `onOpened` ← `opened` — Dispatched when the dialog has opened after any animations.
- `onClose` ← `close` — Dispatched when the dialog is closing before any animations.
- `onClosed` ← `closed` — Dispatched when the dialog has closed after any animations.
- `onCancel` ← `cancel` — Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `noFocusTrap`: `boolean` — Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog
- `open`: `boolean` — Opens the dialog when set to `true` and closes it when set to `false`
- `quick`: `boolean` — Skips the opening and closing animations
- `returnValue`: `string` — Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it
- `type`: `"alert"` — The type of dialog for accessibility
