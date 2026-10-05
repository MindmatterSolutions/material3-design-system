# Material Web, themed — how to build with it

These are Google's official **@material/web** components (Material 3, including the
**Expressive** set) as React components, wearing a **dark-only** Material 3 Expressive
theme. Every colour, face and corner comes from CSS custom properties; nothing here
takes a colour prop.

## 1. Wrap every design in `ThemeRoot`

```jsx
const { ThemeRoot, ExpressiveButton, OutlinedTextField, Icon } = window.MaterialWeb;

<ThemeRoot accent="orange" style={{ minHeight: '100vh', padding: 24 }}>
  …your design…
</ThemeRoot>
```

`ThemeRoot` paints the dark surface, the on-surface ink and the theme's sans. The theme is
dark only — there is no light mode. `accent` is one of `orange` (default) `violet` `teal`
`blue` `green` `rose`; it sets `data-accent` on `<html>`, so it is one accent per page, and only the accent roles move.

## 2. Two families — prefer Expressive

- **Expressive** (`Expressive*`, `SplitButton`): `ExpressiveButton` (`color` filled|tonal|elevated|outlined|text, `size` xs|sm|md|lg|xl, `square`, `type="toggle"` + `selected`), `ExpressiveIconButton`, `SplitButton`, `ExpressiveFab`, `ExpressiveCard`, `ExpressiveList`/`ExpressiveListItem`, `ExpressiveMenu`/`ExpressiveMenuGroup`/`ExpressiveMenuItem`, `ExpressiveCheckbox`, `ExpressiveRadio`, `ExpressiveSwitch`, `ExpressiveBadge`, `ExpressiveDivider`. Use these for actions, cards, lists and menus.
- **Stable** for everything Expressive doesn't cover: `FilledTextField`/`OutlinedTextField`, `FilledSelect`/`OutlinedSelect` + `SelectOption`, `Slider`, `Tabs` + `PrimaryTab`/`SecondaryTab`, `NavigationBar` + `NavigationTab`, `NavigationDrawer`, `Dialog`, `ChipSet` + `AssistChip`/`FilterChip`/`InputChip`/`SuggestionChip`, `SegmentedButtonSet` + `SegmentedButton`, `CircularProgress`, `LinearProgress`, `Badge`, `Divider`, `Elevation`. Don't mix an Expressive and a stable variant of the same control on one screen.

## 3. Props and slots

- Props are the element's properties, camelCase, real types: `softDisabled`, `supportingText`, `errorText`, `activeTabIndex`, `trailingIcon`, `maxLength={200}`, `disabled` (boolean).
- Content goes in **slots**: put `slot="…"` on a child. Each component's `.prompt.md` lists its slots. Common: `<Icon slot="icon">`, `<Icon slot="leading-icon">`, `<div slot="headline">`, `<span slot="supporting-text">`, `<Icon slot="leading">` (Expressive list items).
- Events: `onChange`, `onInput`, `onClose`, … as listed per component; the handler gets the DOM event — read `event.target.value` / `.checked` / `.selected`.

## 4. Icons

`<Icon>name</Icon>` renders any **Material Symbols** ligature — the full set, 4,299 names (the names on fonts.google.com/icons, e.g. `home`, `shopping_cart`, `calendar_month`, `arrow_forward`). Three styles ship; **Rounded** is the theme's default. Switch with a class on the icon or any ancestor: `className="icon-outlined"` or `className="icon-sharp"` (`icon-rounded` switches back). Axes are CSS custom properties: `style={{ '--md-icon-size': '32px', '--md-icon-fill': 1, '--md-icon-wght': 500 }}`. Filled icons (`--md-icon-fill: 1`) suit selected/active states.

## 5. Your own layout: tokens only, never literals

Colour roles: `var(--md-sys-color-surface)`, `--md-sys-color-surface-container-low|-container|-container-high|-container-highest`, `--md-sys-color-on-surface`, `--md-sys-color-on-surface-variant`, `--md-sys-color-outline-variant`, `--md-sys-color-primary`, `--md-sys-color-primary-container`, `--md-sys-color-on-primary-container`, `--md-sys-color-tertiary`. Semantic aliases: `--surface-card`, `--text-primary`, `--text-secondary`, `--border-default`, `--accent-primary`.
Type: `font: var(--md-sys-typescale-title-lg)` (also `display-sm|md|lg`, `headline-sm|md|lg`, `title-sm|md|lg`, `body-sm|md|lg`, `label-sm|md|lg`); families `--font-sans`, `--font-mono` (tabular figures).
Space and shape: `--space-1` … `--space-12`, `--radius-panel`, `--radius-control`, `--md-sys-shape-corner-lg|xl|full`.

```jsx
<ExpressiveCard color="filled">
  <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
    <h3 style={{ margin: 0, font: 'var(--md-sys-typescale-title-md)' }}>Quarterly review</h3>
    <p style={{ margin: 0, font: 'var(--md-sys-typescale-body-md)', color: 'var(--md-sys-color-on-surface-variant)' }}>Moved to Thursday, 14:00.</p>
    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
      <ExpressiveButton color="text">Archive</ExpressiveButton>
      <ExpressiveButton color="filled"><Icon>send</Icon>Reply</ExpressiveButton>
    </div>
  </div>
</ExpressiveCard>
```

The full stylesheet is `styles.css` → `_ds_bundle.css` (fonts, `tokens/base`, the theme, the Expressive system, the bridge) — read it for any token not named here.
