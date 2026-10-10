// Generates react/src/index.ts: one @lit/react wrapper per @material/web
// element, each with a plain props interface read off the element's own types.
//
//   npm run generate
//
// Nothing here is hand-maintained per prop. The props, their docs, the slots
// and the events all come from @material/web's .d.ts and .js: public, writable
// fields declared inside @material/web (Lit/HTMLElement internals are left
// out), `@slot` / `@fires` JSDoc tags, and the <slot name="…"> the template
// actually renders. What lives here is only the list of elements, their React
// names, and a few events the packages don't document with @fires.
import { Project, Node, ts } from 'ts-morph';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, '..');
const mw = resolve(pkgRoot, 'node_modules/@material/web');

// [React name, tag, module that defines the class, class name, module that registers the tag]
const MW = (p) => `@material/web/${p}`;
const COMPONENTS = [
  // --- Expressive (labs/gb) ------------------------------------------------
  ['ExpressiveButton', 'md-gb-button', 'labs/gb/components/button/button-element.js', 'ButtonElement', 'labs/gb/components/button/md-gb-button.js'],
  ['ExpressiveIconButton', 'md-gb-icon-button', 'labs/gb/components/iconbutton/icon-button-element.js', 'IconButtonElement', 'labs/gb/components/iconbutton/md-gb-icon-button.js'],
  ['SplitButton', 'md-gb-split-button', 'labs/gb/components/splitbutton/split-button-element.js', 'SplitButtonElement', 'labs/gb/components/splitbutton/md-gb-split-button.js'],
  ['ExpressiveFab', 'md-gb-fab', 'labs/gb/components/fab/fab-element.js', 'FabElement', 'labs/gb/components/fab/md-gb-fab.js'],
  ['ExpressiveCard', 'md-gb-card', 'labs/gb/components/card/card-element.js', 'CardElement', 'labs/gb/components/card/md-gb-card.js'],
  ['ExpressiveCheckbox', 'md-gb-checkbox', 'labs/gb/components/checkbox/checkbox-element.js', 'CheckboxElement', 'labs/gb/components/checkbox/md-gb-checkbox.js'],
  ['ExpressiveRadio', 'md-gb-radio', 'labs/gb/components/radio/radio-element.js', 'RadioElement', 'labs/gb/components/radio/md-gb-radio.js'],
  ['ExpressiveSwitch', 'md-gb-switch', 'labs/gb/components/switch/switch-element.js', 'SwitchElement', 'labs/gb/components/switch/md-gb-switch.js'],
  ['ExpressiveList', 'md-gb-list', 'labs/gb/components/list/list-element.js', 'ListElement', 'labs/gb/components/list/md-gb-list.js'],
  ['ExpressiveListItem', 'md-gb-list-item', 'labs/gb/components/list/list-item-element.js', 'ListItemElement', 'labs/gb/components/list/md-gb-list-item.js'],
  ['ExpressiveMenu', 'md-gb-menu', 'labs/gb/components/menu/menu-element.js', 'MenuElement', 'labs/gb/components/menu/md-gb-menu.js'],
  ['ExpressiveMenuGroup', 'md-gb-menu-group', 'labs/gb/components/menu/menu-group-element.js', 'MenuGroupElement', 'labs/gb/components/menu/md-gb-menu-group.js'],
  ['ExpressiveMenuItem', 'md-gb-menu-item', 'labs/gb/components/menu/menu-item-element.js', 'MenuItemElement', 'labs/gb/components/menu/md-gb-menu-item.js'],
  ['ExpressiveBadge', 'md-gb-badge', 'labs/gb/components/badge/badge-element.js', 'BadgeElement', 'labs/gb/components/badge/md-gb-badge.js'],
  ['ExpressiveDivider', 'md-gb-divider', 'labs/gb/components/divider/divider-element.js', 'DividerElement', 'labs/gb/components/divider/md-gb-divider.js'],
  // --- Stable ------------------------------------------------------------
  ['FilledButton', 'md-filled-button', 'button/filled-button.js', 'MdFilledButton'],
  ['FilledTonalButton', 'md-filled-tonal-button', 'button/filled-tonal-button.js', 'MdFilledTonalButton'],
  ['ElevatedButton', 'md-elevated-button', 'button/elevated-button.js', 'MdElevatedButton'],
  ['OutlinedButton', 'md-outlined-button', 'button/outlined-button.js', 'MdOutlinedButton'],
  ['TextButton', 'md-text-button', 'button/text-button.js', 'MdTextButton'],
  ['IconButton', 'md-icon-button', 'iconbutton/icon-button.js', 'MdIconButton'],
  ['FilledIconButton', 'md-filled-icon-button', 'iconbutton/filled-icon-button.js', 'MdFilledIconButton'],
  ['FilledTonalIconButton', 'md-filled-tonal-icon-button', 'iconbutton/filled-tonal-icon-button.js', 'MdFilledTonalIconButton'],
  ['OutlinedIconButton', 'md-outlined-icon-button', 'iconbutton/outlined-icon-button.js', 'MdOutlinedIconButton'],
  ['Fab', 'md-fab', 'fab/fab.js', 'MdFab'],
  ['BrandedFab', 'md-branded-fab', 'fab/branded-fab.js', 'MdBrandedFab'],
  ['Icon', 'md-icon', 'icon/icon.js', 'MdIcon'],
  ['ChipSet', 'md-chip-set', 'chips/chip-set.js', 'MdChipSet'],
  ['AssistChip', 'md-assist-chip', 'chips/assist-chip.js', 'MdAssistChip'],
  ['FilterChip', 'md-filter-chip', 'chips/filter-chip.js', 'MdFilterChip'],
  ['InputChip', 'md-input-chip', 'chips/input-chip.js', 'MdInputChip'],
  ['SuggestionChip', 'md-suggestion-chip', 'chips/suggestion-chip.js', 'MdSuggestionChip'],
  ['SegmentedButtonSet', 'md-outlined-segmented-button-set', 'labs/segmentedbuttonset/outlined-segmented-button-set.js', 'MdOutlinedSegmentedButtonSet'],
  ['SegmentedButton', 'md-outlined-segmented-button', 'labs/segmentedbutton/outlined-segmented-button.js', 'MdOutlinedSegmentedButton'],
  ['FilledTextField', 'md-filled-text-field', 'textfield/filled-text-field.js', 'MdFilledTextField'],
  ['OutlinedTextField', 'md-outlined-text-field', 'textfield/outlined-text-field.js', 'MdOutlinedTextField'],
  ['FilledSelect', 'md-filled-select', 'select/filled-select.js', 'MdFilledSelect'],
  ['OutlinedSelect', 'md-outlined-select', 'select/outlined-select.js', 'MdOutlinedSelect'],
  ['SelectOption', 'md-select-option', 'select/select-option.js', 'MdSelectOption'],
  ['Checkbox', 'md-checkbox', 'checkbox/checkbox.js', 'MdCheckbox'],
  ['Radio', 'md-radio', 'radio/radio.js', 'MdRadio'],
  ['Switch', 'md-switch', 'switch/switch.js', 'MdSwitch'],
  ['Slider', 'md-slider', 'slider/slider.js', 'MdSlider'],
  ['Tabs', 'md-tabs', 'tabs/tabs.js', 'MdTabs'],
  ['PrimaryTab', 'md-primary-tab', 'tabs/primary-tab.js', 'MdPrimaryTab'],
  ['SecondaryTab', 'md-secondary-tab', 'tabs/secondary-tab.js', 'MdSecondaryTab'],
  ['NavigationBar', 'md-navigation-bar', 'labs/navigationbar/navigation-bar.js', 'MdNavigationBar'],
  ['NavigationTab', 'md-navigation-tab', 'labs/navigationtab/navigation-tab.js', 'MdNavigationTab'],
  ['NavigationDrawer', 'md-navigation-drawer', 'labs/navigationdrawer/navigation-drawer.js', 'MdNavigationDrawer'],
  ['NavigationDrawerModal', 'md-navigation-drawer-modal', 'labs/navigationdrawer/navigation-drawer-modal.js', 'MdNavigationDrawerModal'],
  ['List', 'md-list', 'list/list.js', 'MdList'],
  ['ListItem', 'md-list-item', 'list/list-item.js', 'MdListItem'],
  ['Menu', 'md-menu', 'menu/menu.js', 'MdMenu'],
  ['MenuItem', 'md-menu-item', 'menu/menu-item.js', 'MdMenuItem'],
  ['SubMenu', 'md-sub-menu', 'menu/sub-menu.js', 'MdSubMenu'],
  ['Dialog', 'md-dialog', 'dialog/dialog.js', 'MdDialog'],
  ['ElevatedCard', 'md-elevated-card', 'labs/card/elevated-card.js', 'MdElevatedCard'],
  ['FilledCard', 'md-filled-card', 'labs/card/filled-card.js', 'MdFilledCard'],
  ['OutlinedCard', 'md-outlined-card', 'labs/card/outlined-card.js', 'MdOutlinedCard'],
  ['Divider', 'md-divider', 'divider/divider.js', 'MdDivider'],
  ['Elevation', 'md-elevation', 'elevation/elevation.js', 'MdElevation'],
  ['Badge', 'md-badge', 'labs/badge/badge.js', 'MdBadge'],
  ['CircularProgress', 'md-circular-progress', 'progress/circular-progress.js', 'MdCircularProgress'],
  ['LinearProgress', 'md-linear-progress', 'progress/linear-progress.js', 'MdLinearProgress'],
];

// The group each component appears under in Claude Design, and a note on how
// it composes — the one thing the types can't say.
const GROUP = (n) =>
  n.startsWith('Expressive') || n === 'SplitButton' ? 'Expressive'
  : /Chip/.test(n) ? 'Chips'
  : /Button|Fab$|^SegmentedButton/.test(n) ? 'Buttons'
  : /TextField|Select|SelectOption|Checkbox|Radio|Switch|Slider/.test(n) ? 'Inputs'
  : /Tab|Navigation/.test(n) ? 'Navigation'
  : /Badge|Progress/.test(n) ? 'Feedback'
  : n === 'Icon' ? 'Icons'
  : 'Containment';
const COMPOSE = {
  ExpressiveButton: 'Put an `<Icon>` child before the label for a leading icon. `type="toggle"` plus `selected` makes a toggle; selected toggles morph to square.',
  ExpressiveIconButton: 'Child is a single `<Icon>`. Always give it an `aria-label`.',
  SplitButton: 'Exactly two native `<button>` children: `slot="leading"` (the action, may contain an `<Icon>` and text) and `slot="trailing"` (the menu toggle; the chevron is drawn for you — leave it empty and give it an `aria-label`).',
  ExpressiveFab: 'Child is an `<Icon>`, optionally followed by a text label for an extended FAB.',
  ExpressiveCard: 'Children are your own content; give the card padding through your own wrapper. Put `ExpressiveButton`s inside for actions.',
  ExpressiveList: 'Children are `<ExpressiveListItem>`s. `segmented` separates them into individual rounded tiles.',
  ExpressiveListItem: 'Use inside `<ExpressiveList>`. Default slot is the headline; use the named slots for the rest.',
  ExpressiveMenu: 'A popover: give it an `id` and open it from a button with `popoverTarget` (or call `showPopover()`). Children are `<ExpressiveMenuItem>`s, optionally inside `<ExpressiveMenuGroup>`s, separated by `<ExpressiveDivider>`.',
  ExpressiveMenuGroup: 'Wraps `<ExpressiveMenuItem>`s inside `<ExpressiveMenu>`; `checkable="single"|"multiple"` makes them a radio or checkbox group.',
  ExpressiveMenuItem: 'Use inside `<ExpressiveMenu>` (optionally in an `<ExpressiveMenuGroup>`).',
  ExpressiveBadge: 'Empty for a dot; text content for a count. It has no positioning of its own — wrap the icon and badge in a `position: relative` box and place the badge absolutely.',
  ExpressiveCheckbox: 'Wrap in a `<label>` with the label text to make the text clickable.',
  ExpressiveRadio: 'Give every radio in a group the same `name`. Wrap each in a `<label>`.',
  ExpressiveSwitch: 'Wrap in a `<label>`. Optional `<Icon slot="on-icon">` / `<Icon slot="off-icon">`.',
  FilledButton: 'Put `<Icon slot="icon">` inside for an icon; add `trailingIcon` to put it after the label.',
  IconButton: 'Child is a single `<Icon>`; for a toggle add `toggle` and a second `<Icon slot="selected">`.',
  Fab: 'Child is `<Icon slot="icon">`; `label` makes it extended.',
  ChipSet: 'Wraps chips: `<AssistChip>`, `<FilterChip>`, `<InputChip>`, `<SuggestionChip>`.',
  AssistChip: 'Use inside `<ChipSet>`. Optional `<Icon slot="icon">`.',
  FilterChip: 'Use inside `<ChipSet>`. Toggles `selected` on click.',
  InputChip: 'Use inside `<ChipSet>`. `avatar` + `<Icon slot="icon">` for a person chip.',
  SuggestionChip: 'Use inside `<ChipSet>`.',
  SegmentedButtonSet: 'Children are `<SegmentedButton>`s; `multiselect` allows several selected.',
  SegmentedButton: 'Use inside `<SegmentedButtonSet>`. Optional `<Icon slot="icon">`.',
  FilledTextField: 'Self-closing. `<Icon slot="leading-icon">` / `slot="trailing-icon"` for icons; `type="textarea"` with `rows` for multi-line.',
  FilledSelect: 'Children are `<SelectOption value="…"><div slot="headline">Label</div></SelectOption>`.',
  SelectOption: 'Use inside `<FilledSelect>` / `<OutlinedSelect>`; the visible text goes in `<div slot="headline">`.',
  Checkbox: 'Wrap in a `<label>` with the text, as `@material/web` documents.',
  Radio: 'Give every radio in a group the same `name`; wrap each in a `<label>`.',
  Switch: 'Wrap in a `<label>`. `icons` shows a check/close icon in the handle.',
  Slider: '`range` with `valueStart`/`valueEnd` for two handles; `labeled` shows the value bubble; `ticks` with `step` for discrete.',
  Tabs: 'Children are `<PrimaryTab>`s or `<SecondaryTab>`s; `activeTabIndex` picks one. Render the panels yourself.',
  PrimaryTab: 'Use inside `<Tabs>`. Optional `<Icon slot="icon">`.',
  SecondaryTab: 'Use inside `<Tabs>`. Optional `<Icon slot="icon">`.',
  NavigationBar: 'Children are `<NavigationTab>`s; `activeIndex` picks one. It sizes to its container — put it at the bottom of your phone layout.',
  NavigationTab: 'Use inside `<NavigationBar>`. `<Icon slot="active-icon">` and `<Icon slot="inactive-icon">`; `showBadge` + `badgeValue` for a count.',
  NavigationDrawer: '`opened` shows it. Put a `<List>` of `<ListItem type="button">`s inside.',
  NavigationDrawerModal: '`opened` shows it over a scrim. Put a `<List>` inside.',
  List: 'Children are `<ListItem>`s, optionally separated by `<Divider>`.',
  ListItem: 'Use inside `<List>`. Default slot is the headline; `slot="start"` / `slot="end"` for icons, `slot="supporting-text"` / `slot="overline"` for extra lines. `type="button"` makes it interactive.',
  Menu: 'Give the anchor element an `id` and the menu `anchor="<that id>"`; toggle `open`. `positioning="popover"` escapes overflow. Children are `<MenuItem>`s / `<SubMenu>`s.',
  MenuItem: 'Use inside `<Menu>`; the text goes in `<div slot="headline">`.',
  SubMenu: 'Use inside `<Menu>`: one `<MenuItem slot="item">` plus a nested `<Menu slot="menu">`.',
  Dialog: 'Set `open` to show it (it is modal). Slots: `<div slot="headline">`, `<div slot="content">` (often a `<form method="dialog" id="…">`), `<div slot="actions">` with buttons.',
  ElevatedCard: 'Children are your own content; pad it with your own wrapper.',
  Divider: '`inset`, `insetStart`, `insetEnd` indent it inside lists.',
  Elevation: 'Place inside a `position: relative` element and set `--md-elevation-level: 0..5` on that element to cast its shadow.',
  Badge: '`value` for a count, empty for a dot. Position it yourself over the icon it annotates.',
  CircularProgress: '`value` 0..1 (or set `max`); `indeterminate` spins; `fourColor` cycles the accent roles.',
  LinearProgress: '`value` 0..1, `buffer` for a buffer bar, `indeterminate`, `fourColor`.',
  Icon: 'Text content is any Material Symbols ligature (all 4,299 names in fonts.google.com/icons), e.g. `<Icon>favorite</Icon>`. Rounded is the default style; `className="icon-outlined"` or `"icon-sharp"` (on the icon or any ancestor) switches it. Size with `--md-icon-size`, fill with `--md-icon-fill: 1`, weight with `--md-icon-wght` (100–700) — as CSS custom properties in `style`.',
};
for (const [a, b] of [['FilledTonalButton','FilledButton'],['ElevatedButton','FilledButton'],['OutlinedButton','FilledButton'],['TextButton','FilledButton'],
  ['FilledIconButton','IconButton'],['FilledTonalIconButton','IconButton'],['OutlinedIconButton','IconButton'],['BrandedFab','Fab'],
  ['OutlinedTextField','FilledTextField'],['OutlinedSelect','FilledSelect'],['FilledCard','ElevatedCard'],['OutlinedCard','ElevatedCard']]) COMPOSE[a] ??= COMPOSE[b];

// Events the elements dispatch but don't tag with @fires. Form controls fire
// the native change/input; overlays fire their open/close lifecycle.
const FORM = ['change', 'input'];
const EXTRA_EVENTS = {
  'md-gb-checkbox': FORM, 'md-gb-radio': FORM, 'md-gb-switch': FORM,
  'md-checkbox': FORM, 'md-radio': FORM, 'md-switch': FORM, 'md-slider': FORM,
  'md-filled-select': FORM, 'md-outlined-select': FORM,
  'md-filled-text-field': FORM, 'md-outlined-text-field': FORM,
  'md-tabs': ['change'],
  'md-filter-chip': ['remove'], 'md-input-chip': ['remove'],
  'md-menu': ['opening', 'opened', 'closing', 'closed'],
  'md-gb-menu': ['toggle'],
  'md-dialog': ['open', 'opened', 'close', 'closed', 'cancel'],
};

// Members that are public on the class but are plumbing, not API.
const SKIP = new Set([
  'renderRoot', 'isUpdatePending', 'hasUpdated', 'updateComplete', 'form', 'labels',
  'validity', 'validationMessage', 'willValidate', 'shadowRootOptions', 'styles',
  'formAssociated', 'anchorElement', 'customState', 'states', 'focusElement',
]);

const project = new Project({
  compilerOptions: { allowJs: false, skipLibCheck: true, moduleResolution: ts.ModuleResolutionKind.Bundler, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  skipAddingFilesFromTsConfig: true,
});
const checker = project.getTypeChecker();

const pascal = (s) => s.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase());
const firstSentence = (s) => (s || '').replace(/\s+/g, ' ').trim();

function docOf(node) {
  if (!Node.isJSDocable(node)) return { text: '', tags: [] };
  const docs = node.getJsDocs();
  const text = docs.map((d) => d.getDescription()).join(' ');
  const tags = docs.flatMap((d) => d.getTags().map((t) => ({ name: t.getTagName(), text: (t.getCommentText() || '').replace(/\s+/g, ' ').trim() })));
  return { text: firstSentence(text), tags };
}

// Primitive or literal-union types only; anything else isn't something a
// design agent should pass as a prop.
function typeText(type) {
  const parts = type.isUnion() ? type.getUnionTypes() : [type];
  const out = new Set();
  for (const t of parts) {
    if (t.isBooleanLiteral() || t.isBoolean()) out.add('boolean');
    else if (t.isStringLiteral() || t.isNumberLiteral()) out.add(t.getText());
    else if (t.isString()) out.add('string');
    else if (t.isNumber()) out.add('number');
    else if (t.isNull() || t.isUndefined()) continue;
    else if (t.isArray() && t.getArrayElementType()?.isString()) out.add('string[]');
    else return null;
  }
  if (!out.size) return null;
  return [...out].join(' | ');
}

function classChain(decl) {
  const chain = [];
  let cur = decl;
  const seen = new Set();
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    chain.push(cur);
    const base = cur.getBaseClass?.();
    if (base) { cur = base; continue; }
    // Mixins: `extends baseClass` where baseClass is a mixin call — follow the
    // innermost class argument that lives inside @material/web.
    const ext = cur.getExtends?.();
    if (!ext) break;
    const sym = ext.getExpression().getSymbol?.();
    const vd = sym?.getDeclarations()?.[0];
    let next = null;
    vd?.forEachDescendant?.((n) => {
      if (next) return;
      if (Node.isIdentifier(n)) {
        const d = n.getSymbol()?.getDeclarations()?.[0];
        if (d && Node.isClassDeclaration(d) && d.getSourceFile().getFilePath().includes('@material/web')) next = d;
      }
    });
    cur = next;
  }
  return chain;
}

function slotsFromJs(dtsPath) {
  const js = dtsPath.replace(/\.d\.ts$/, '.js');
  if (!existsSync(js)) return [];
  const src = readFileSync(js, 'utf8');
  const names = new Set();
  for (const m of src.matchAll(/<slot\b([^>]*)>/g)) {
    const n = m[1].match(/name="([^"$]+)"/);
    names.add(n ? n[1] : '');
  }
  return [...names];
}

const imports = [];
const blocks = [];
const meta = [];
const docsDir = resolve(pkgRoot, 'docs');
rmSync(docsDir, { recursive: true, force: true });
mkdirSync(docsDir, { recursive: true });

for (const [name, tag, classModule, className, registerModule] of COMPONENTS) {
  const dts = resolve(mw, classModule.replace(/\.js$/, '.d.ts'));
  const sf = project.addSourceFileAtPath(dts);
  project.resolveSourceFileDependencies();
  const decl = sf.getClass(className) ?? sf.getExportedDeclarations().get(className)?.[0];
  if (!decl || !Node.isClassDeclaration(decl)) throw new Error(`${name}: no class ${className} in ${classModule}`);

  const chain = classChain(decl);
  let summary = '';
  const slotDocs = new Map();
  const fires = new Map();
  for (const c of chain) {
    const d = docOf(c);
    if (!summary && d.text) summary = d.text;
    for (const t of d.tags) {
      if (t.name === 'slot') {
        const m = t.text.match(/^(\S+)?\s*-\s*(.*)$/);
        const key = m ? (m[1] && m[1] !== '-' ? m[1] : '') : t.text.split(' ')[0];
        if (!slotDocs.has(key)) slotDocs.set(key, m ? m[2] : '');
      }
      if (t.name === 'fires' || t.name === 'event') {
        const m = t.text.match(/^([\w-]+)\s*(?:\{[^}]*\})?\s*(.*)$/);
        if (m && !fires.has(m[1])) fires.set(m[1], m[2]);
      }
    }
    for (const s of slotsFromJs(c.getSourceFile().getFilePath())) if (!slotDocs.has(s)) slotDocs.set(s, '');
  }
  for (const e of EXTRA_EVENTS[tag] || []) if (!fires.has(e)) fires.set(e, '');

  const props = [];
  const instance = decl.getType();
  for (const sym of instance.getProperties()) {
    const pname = sym.getName();
    if (pname.startsWith('_') || pname.startsWith('#') || SKIP.has(pname)) continue;
    const decls = sym.getDeclarations();
    if (!decls.length) continue;
    const d0 = decls[0];
    if (!d0.getSourceFile().getFilePath().includes('@material/web')) continue;
    if (Node.isMethodDeclaration(d0) || Node.isMethodSignature(d0)) continue;
    if (decls.every((d) => Node.isGetAccessorDeclaration(d))) continue; // read-only getter
    if (Node.isPropertyDeclaration(d0) || Node.isPropertySignature(d0)) {
      if (d0.isReadonly?.() || d0.hasModifier?.(ts.SyntaxKind.PrivateKeyword) || d0.hasModifier?.(ts.SyntaxKind.ProtectedKeyword) || d0.isStatic?.()) continue;
    }
    if (decls.some((d) => d.hasModifier?.(ts.SyntaxKind.PrivateKeyword) || d.hasModifier?.(ts.SyntaxKind.ProtectedKeyword))) continue;
    const t = typeText(checker.getTypeOfSymbolAtLocation(sym, decl));
    if (!t) continue;
    const doc = decls.map((d) => docOf(d).text).find(Boolean) || '';
    props.push({ name: pname, type: t, doc });
  }
  props.sort((a, b) => a.name.localeCompare(b.name));

  const events = [...fires.entries()].map(([ev, doc]) => ({ ev, prop: `on${pascal(ev)}`, doc }));
  const own = new Set([...props.map((p) => p.name), ...events.map((e) => e.prop)]);

  const alias = `${name}Element`;
  imports.push(`import { ${className} as ${alias} } from '${MW(classModule)}';`);
  if (registerModule) imports.push(`import '${MW(registerModule)}';`);

  const slotLines = [...slotDocs.entries()].map(([s, d]) => ` *   - ${s ? `\`slot="${s}"\`` : 'default'}${d ? ` — ${d}` : ''}`);
  const header = [
    `/**`,
    ` * ${summary || `The \`<${tag}>\` element from @material/web.`}`,
    ` *`,
    ` * Renders \`<${tag}>\` from Google's @material/web, themed by the design system's tokens.`,
    ...(slotLines.length ? [` *`, ` * Slots (put \`slot="…"\` on a child):`, ...slotLines] : []),
    ` */`,
  ];
  const omit = [...own].filter((k) => k !== 'children').map((k) => `'${k}'`);
  const body = [
    ...header,
    `export interface ${name}Props extends Omit<React.HTMLAttributes<HTMLElement>, ${omit.length ? omit.join(' | ') : 'never'}> {`,
    ...props.flatMap((p) => [...(p.doc ? [`  /** ${p.doc.replace(/\*\//g, '* /')} */`] : []), `  ${p.name}?: ${p.type};`]),
    ...events.flatMap((e) => [`  /** \`${e.ev}\` event${e.doc ? ` — ${e.doc.replace(/\*\//g, '* /')}` : ''} */`, `  ${e.prop}?: (event: Event) => void;`]),
    `  children?: React.ReactNode;`,
    `}`,
    ``,
    ...header,
    `export const ${name} = createComponent({`,
    `  tagName: '${tag}',`,
    `  elementClass: ${alias},`,
    `  react: React,`,
    `  displayName: '${name}',`,
    `  events: { ${events.map((e) => `${e.prop}: '${e.ev}'`).join(', ')} },`,
    `}) as unknown as React.ForwardRefExoticComponent<${name}Props & React.RefAttributes<HTMLElement>>;`,
  ];
  blocks.push(body.join('\n'));

  // Per-component doc: becomes <Name>.prompt.md in Claude Design.
  const doc = [
    '---', `category: ${GROUP(name)}`, '---', '',
    `${summary || `The \`<${tag}>\` element.`} Renders Google's \`<${tag}>\` (@material/web); colours, type and shape come from the theme's tokens — never style it with literals.`,
    '',
    ...(COMPOSE[name] ? ['## Composition', '', COMPOSE[name], ''] : []),
    ...(slotDocs.size ? ['## Slots', '', ...[...slotDocs.entries()].map(([sl, d]) => `- ${sl ? `\`slot="${sl}"\`` : 'default (children)'}${d ? ` — ${d}` : ''}`), ''] : []),
    ...(events.length ? ['## Events', '', ...events.map((e) => `- \`${e.prop}\` ← \`${e.ev}\`${e.doc ? ` — ${e.doc}` : ''}`), ''] : []),
    '## Props', '', 'Boolean props are real booleans (`disabled`, not `disabled="true"`). Camel-case names (`softDisabled`, `activeTabIndex`) are the element\'s properties.',
    ...props.map((p) => `- \`${p.name}\`: \`${p.type}\`${p.doc ? ` — ${p.doc.split('. ')[0].replace(/\.$/, '')}` : ''}`),
    '',
  ];
  writeFileSync(resolve(docsDir, `${name}.md`), doc.join('\n'));
  meta.push({ name, tag, props: props.length, slots: slotDocs.size, events: events.length });
}

writeFileSync(resolve(docsDir, 'ThemeRoot.md'), `---
category: Theme
---

The root of every design built with this system. Wrap the whole design in \`<ThemeRoot>\` so the page gets the theme's surface, the on-surface ink and the theme's sans. Without it the page has no ground of its own.

## Composition

Wrap the entire design once: \`<ThemeRoot>…</ThemeRoot>\` for the default NWU purple in dark, or \`<ThemeRoot accent="teal" mode="light">…</ThemeRoot>\`. Give it \`style={{ minHeight: '100vh' }}\` for a full page. \`accent\` and \`mode\` set \`data-accent\` and \`data-theme\` on \`<html>\`, where the theme reads them — so it is **one accent and one mode per page**; two roots that disagree on one page would fight.

## Props

- \`accent\`: \`"nwu" | "orange" | "violet" | "teal" | "blue" | "green" | "rose"\` — the whole scheme follows the seed, the ground included (Material tints its neutrals toward the accent); status colours stay put. Default \`nwu\`, the NWU purple (Pantone 2603 C) with the university's turquoise as the tertiary.
- \`mode\`: \`"dark" | "light"\` — Material's dark or light scheme from the same seed. Default dark.
- \`style\`, \`className\` — pass layout here; padding defaults to 16px.
`);

const out = `// GENERATED by react/tools/generate.mjs from @material/web's own types — do not edit.
// Re-run \`npm run generate\` after changing COMPONENTS or upgrading @material/web.
import * as React from 'react';
import { createComponent } from '@lit/react';
${imports.join('\n')}

export { ThemeRoot } from './theme-root';
export type { ThemeRootProps, Accent, Mode } from './theme-root';

${blocks.join('\n\n')}
`;
writeFileSync(resolve(pkgRoot, 'src/index.ts'), out);
for (const m of meta) console.log(`${m.name.padEnd(24)} ${m.tag.padEnd(34)} props:${String(m.props).padStart(3)} slots:${m.slots} events:${m.events}`);
console.log(`${meta.length} components → src/index.ts`);
