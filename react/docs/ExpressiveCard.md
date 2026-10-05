---
category: Expressive
---

A Material Design card. Renders Google's `<md-gb-card>` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.

## Composition

Children are your own content; give the card padding through your own wrapper. Put `ExpressiveButton`s inside for actions.

## Slots

- default (children) — Used to display the card's content. Note: add padding to content, not the host <md-gb-card> element.
- `slot="container"` — Used to set a custom background container for the card.

## Props

Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element's properties.
- `color`: `"elevated" | "filled" | "outlined"` — The color of the card
- `disabled`: `boolean` — Whether the card is disabled
- `interactive`: `boolean` — Whether the card is interactive
