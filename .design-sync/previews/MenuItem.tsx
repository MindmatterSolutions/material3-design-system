import * as React from 'react';
import { Menu, MenuItem, Divider, Icon, FilledTonalButton, OutlinedButton, IconButton } from '@mindmatter/material-web-react';

const host: React.CSSProperties = { position: 'relative', minHeight: 300, width: 320 };
const anchorWrap: React.CSSProperties = { position: 'relative', display: 'inline-block' };
const holdOpen = {
  positioning: 'absolute' as const,
  open: true,
  quick: true,
  stayOpenOnOutsideClick: true,
  stayOpenOnFocusout: true,
  defaultFocus: 'none' as const,
};

export const IconsAndSupportingText = () => (
  <div style={host}>
    <span style={anchorWrap}>
      <FilledTonalButton id="mi-edit-anchor"><Icon slot="icon">edit</Icon>Edit</FilledTonalButton>
      <Menu anchor="mi-edit-anchor" {...holdOpen} aria-label="Edit" style={{ minWidth: 260 }}>
        <MenuItem><Icon slot="start">content_cut</Icon><div slot="headline">Cut</div><span slot="trailing-supporting-text">⌘X</span></MenuItem>
        <MenuItem><Icon slot="start">content_copy</Icon><div slot="headline">Copy</div><span slot="trailing-supporting-text">⌘C</span></MenuItem>
        <MenuItem><Icon slot="start">content_paste</Icon><div slot="headline">Paste</div><div slot="supporting-text">Clipboard is empty</div></MenuItem>
        <Divider role="separator" tabIndex={-1} />
        <MenuItem keepOpen><Icon slot="start">format_bold</Icon><div slot="headline">Bold</div><Icon slot="end">check</Icon></MenuItem>
      </Menu>
    </span>
  </div>
);

export const SelectedOption = () => (
  <div style={{ ...host, minHeight: 250 }}>
    <span style={anchorWrap}>
      <OutlinedButton id="mi-size-anchor" trailingIcon><Icon slot="icon">arrow_drop_down</Icon>Text size: Medium</OutlinedButton>
      <Menu anchor="mi-size-anchor" {...holdOpen} aria-label="Text size" style={{ minWidth: 220 }}>
        <MenuItem type="option"><div slot="headline">Small</div></MenuItem>
        <MenuItem type="option" selected><div slot="headline">Medium</div><Icon slot="end">check</Icon></MenuItem>
        <MenuItem type="option"><div slot="headline">Large</div></MenuItem>
        <MenuItem type="option"><div slot="headline">Extra large</div></MenuItem>
      </Menu>
    </span>
  </div>
);

export const LinksAndDisabled = () => (
  <div style={{ ...host, minHeight: 280 }}>
    <span style={anchorWrap}>
      <IconButton id="mi-help-anchor" aria-label="Help"><Icon>help</Icon></IconButton>
      <Menu anchor="mi-help-anchor" {...holdOpen} aria-label="Help" style={{ minWidth: 240 }}>
        <MenuItem type="link" href="#docs"><Icon slot="start">menu_book</Icon><div slot="headline">Documentation</div></MenuItem>
        <MenuItem type="link" href="#shortcuts"><Icon slot="start">keyboard</Icon><div slot="headline">Keyboard shortcuts</div></MenuItem>
        <MenuItem type="link" href="#feedback" target="_blank"><Icon slot="start">feedback</Icon><div slot="headline">Send feedback</div><Icon slot="end">open_in_new</Icon></MenuItem>
        <Divider role="separator" tabIndex={-1} />
        <MenuItem disabled><Icon slot="start">update</Icon><div slot="headline">Check for updates</div><div slot="supporting-text">You're on the latest version</div></MenuItem>
      </Menu>
    </span>
  </div>
);
