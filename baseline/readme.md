# Material 3 Expressive design system

A faithful working copy of Google's **Material 3 Expressive** (the 2025 evolution of Material Design 3), built as plain CSS on design tokens. It keeps M3's color roles, type scale and component anatomy, and adds what Expressive brought: an emphasized type set, a bigger corner scale and a library of abstract shapes that morph, spring-based motion, five button sizes that change shape when pressed or toggled, button groups, split buttons, the FAB menu, a morphing loading indicator, wavy progress, floating toolbars and the flexible navigation bar/rail.

The goal of Expressive is emotional clarity: use **shape, size, color and motion** to point at the one thing on a screen that matters most, and keep everything else calm.

## How to use this

- Link one stylesheet from every page: `<link rel="stylesheet" href="styles.css">` (adjust the relative path). It imports the token sheets in `tokens/` and then the component layer.
- Take every value from a token: `var(--md-sys-color-*)`, `var(--md-sys-typescale-*)` (or a `.md-typescale-*` class), `var(--md-sys-shape-corner-*)`, `var(--md-shape-path-*)`, `var(--md-motion-spring-*)`, `var(--md-sys-elevation-level*)`, `var(--md-sys-spacing-*)`. Never hard-code a hex, a px radius or a cubic-bezier the tokens already carry.
- Build with the `.md-*` classes below. The component pages are plain HTML: view the source and copy the markup.
- Light is the default. Put `data-theme="dark"` on any ancestor for the dark scheme, or leave it off and follow the OS preference. `data-theme="light"` forces light.
- `templates/app/` is a full phone screen (light and dark) composed only from the system. Copy it whole as a starting point.
- To re-brand, replace the `--md-sys-color-*` roles in `tokens/colors.css` with a scheme generated from your seed color (Material Theme Builder, tonal-spot, or a more expressive "vibrant"/"expressive" variant). Components read only the roles, so nothing else changes.

## Color

Color comes in role **pairs**: every fill (`primary`, `primary-container`, `secondary-container`, `tertiary-container`, `error`, …) has an `on-` role for the content on it. Always use the pair.

- **Primary** is for the key action and the active state. **Secondary-container** is the default tint for selected and tonal things (filter chips, nav indicators, tonal buttons). **Tertiary** is the contrasting accent that balances primary: use it for a hero illustration, a second emphasis or a FAB that needs to stand apart.
- **Elevation is tonal.** Step up the `surface-container-lowest → low → container → high → highest` ladder before reaching for a shadow.
- **Fixed** roles (`primary-fixed`, `…-fixed-dim`) keep the same tone in light and dark, for content that must not flip.
- Expressive screens use **bigger fields of container color** (hero cards, tiles, vibrant toolbars) than baseline M3. That is intended, but keep it to one or two per screen.

## Type

Display, headline and title use the brand face (**Google Sans Flex**, falling back to **Roboto Flex**). Body and label use Roboto Flex. There are 15 baseline styles and 15 **emphasized** twins at the same size and a heavier weight (`.md-typescale-title-medium-emphasized`). Use emphasized for the few words that lead: a selected tab, a hero number, a key action label, a section title. Never set a whole paragraph emphasized.

## Shape

- The corner scale runs `none 0 · extra-small 4 · small 8 · medium 12 · large 16 · large-increased 20 · extra-large 28 · extra-large-increased 32 · extra-extra-large 48 · full`. Expressive leans to the larger end: dialogs, hero cards and sheets sit at 28 and up.
- **Shape contrast is a signal.** A square button among round ones, or a round selected item in a connected group, reads as "this one". Components already do this: pressing morphs toward square, and toggling swaps round ⇄ square.
- The **shape library** (`--md-shape-path-*`: circle, cookie-4/6/7/9/12, clover-4/8, sunny, very-sunny, burst, soft-burst, boom, soft-boom, flower, puffy, pentagon, triangle, diamond, square, gem, oval, pill, heart) is for decoration and emphasis: avatars, image crops, hero art, loading. Apply it with `clip-path`. Every path has the same point count, so a `clip-path` transition between any two morphs smoothly. Never clip text containers to these shapes.

## Motion

Motion uses **springs**, not durations. A spring is a damping ratio plus a stiffness, rendered here as a CSS `linear()` curve with a matching `-duration` token. Always use the two together:

```css
transition: border-radius var(--md-motion-spring-expressive-fast-spatial-duration)
                          var(--md-motion-spring-expressive-fast-spatial);
```

- **Spatial** springs (position, size, shape, rotation) may overshoot and bounce. **Effects** springs (color, opacity) never do.
- **Fast** is for small components (buttons, switches), **default** for mid-size ones (cards, sheets, dialogs), **slow** for full-screen transitions.
- The **expressive** scheme (damping 0.6–0.8) is the default and gives the characteristic bounce. The **standard** scheme (0.9) is for calmer, utilitarian products. Pick one per product.
- Under `prefers-reduced-motion`, spatial springs collapse to 0ms and the loading indicator slows down.

## Components

| Class | What it is | Shown in |
| --- | --- | --- |
| `.md-button` + `--xs/--s/--m/--l/--xl`, `--square`, `--filled/--tonal/--elevated/--outlined/--text`; `aria-pressed` for toggles | Buttons in five sizes and two shapes. Press morphs the corners; toggles swap shape and fill their icon | components/buttons.html |
| `.md-icon-button` + sizes, `--narrow/--wide`, `--square`, `--standard/--filled/--tonal/--outlined` | Icon buttons in three widths | components/icon-buttons.html |
| `.md-button-group` (+ `--connected`, size modifiers) | Groups that flex on press, and connected single- or multi-select groups (replaces segmented buttons) | components/button-groups.html |
| `.md-split-button` | A primary action plus a menu trigger; `aria-expanded` rounds the trigger and flips its chevron | components/button-groups.html |
| `.md-fab` + `--medium/--large`, `--extended`, color modifiers; `.md-fab-menu` | FABs at 56/80/96 and the FAB menu (replaces speed dial) | components/fab.html |
| `.md-loading-indicator` (+ `--contained`) | Morphing, spinning shape for short indeterminate waits | components/loading-progress.html |
| `.md-progress-linear` (+ `--wavy`, `--indeterminate`), `.md-progress-circular` | Progress with a gap and a stop dot, wavy or flat | components/loading-progress.html |
| `.md-toolbar` (+ `--floating`, `--vibrant`, `--vertical`), `.md-toolbar-dock` | Docked and floating toolbars (replace the bottom app bar) | components/toolbars.html |
| `.md-navbar` (+ `--horizontal`), `.md-nav-item`, `.md-navrail` (+ `--expanded`) | Flexible navigation bar and collapsible rail (the rail replaces the drawer) | components/navigation.html |
| `.md-card` + `--elevated/--filled/--outlined/--hero`, `--interactive` | Cards, including the expressive hero card | components/cards-lists.html |
| `.md-list` (+ `--segmented`), `.md-list-item`, `.md-avatar` | Lists; segmented rows each get their own surface | components/cards-lists.html |
| `.md-chip` (+ `--elevated`, `aria-pressed`) | Assist, filter, input and suggestion chips | components/chips.html |
| `.md-badge` (+ `--dot`), `.md-snackbar` | Badges and the snackbar | components/chips.html |
| `.md-text-field` (+ `--outlined`, `--error`) | Filled and outlined text fields | components/inputs.html |
| `.md-switch`, `.md-checkbox`, `.md-radio` | Selection controls on native inputs, with no script | components/inputs.html |
| `.md-slider` (+ `--l`) | Expressive slider: tall track, bar handle, stop dot | components/inputs.html |
| `.md-scrim` + `.md-dialog` (`__icon/__headline/__body/__actions`) | Basic dialog | components/dialog.html |
| `.md-icon` (+ `--filled`) | Material Symbols Rounded by ligature | foundations/icons.html |
| `.md-state` | Adds the shared state layer to any custom interactive element | — |

States are built in and shouldn't be restyled per page. Hover, focus and pressed are an on-color overlay at 8/10/10%. Keyboard focus is a 3px secondary ring, offset 2px. Disabled is 38% content on a 12% container.

## Do

- Pick **one hero moment** per screen (a large square button, a hero card, a shaped image, a vibrant toolbar) and keep the rest baseline.
- Use size to show importance: an XL or L button for the screen's main action, S/XS for the rest.
- Let components change shape on interaction. It is the system's main feedback channel.
- Use the emphasized type styles sparingly, for what leads.
- Give content 48dp touch targets, even on XS controls.

## Don't

- Don't hard-code colors. Every color is a role and has its `on-` pair.
- Don't put abstract library shapes behind text or on inputs. They are decoration and emphasis only.
- Don't mix the expressive and standard motion schemes in one product, and don't use a spatial spring for a color change.
- Don't stack several vibrant containers or hero elements on one screen. Expressive is about *clear* emphasis.
- Don't use the retired M3 patterns: small FAB, bottom app bar, speed dial, segmented buttons, navigation drawer. Use FAB (56), toolbars, FAB menu, connected button groups and the expanded navigation rail instead.

## Files

- `styles.css`: the entry point. Link this.
- `tokens/fonts.css`: Google Sans Flex, Roboto Flex and Material Symbols Rounded.
- `tokens/colors.css`: light and dark color roles.
- `tokens/typography.css`: the 15 baseline and 15 emphasized styles, as tokens and `.md-typescale-*` classes.
- `tokens/shape.css`: the corner scale and the shape-library clip-paths.
- `tokens/motion.css`: spring tokens (as `linear()` plus duration) and the legacy easing/duration tokens.
- `tokens/elevation.css`: elevation levels and state-layer opacities.
- `tokens/spacing.css`: the 4dp spacing scale, window size classes and margins.
- `tokens/components.css`: the component layer.
- `foundations/*.html`: color, type, shape, motion, elevation/states/spacing, icons.
- `components/*.html`: one preview page per component family.
- `templates/app/index.html`: a phone screen in light and dark, built only from the system.
- `theme.json`: the parameters the system was built from.
- `thumbnail.html`: the project cover.
