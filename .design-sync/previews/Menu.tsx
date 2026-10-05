import * as React from 'react';
import { Menu, MenuItem, Divider, Icon, FilledTonalButton, OutlinedButton } from '@mindmatter/material-web-react';

const host: React.CSSProperties = { position: 'relative', minHeight: 340, width: 320 };

export const DocumentActions = () => (
  <div style={host}>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <FilledTonalButton id="menu-doc-anchor"><Icon slot="icon">more_vert</Icon>Document</FilledTonalButton>
      <Menu
        anchor="menu-doc-anchor"
        positioning="absolute"
        open
        quick
        stayOpenOnOutsideClick
        stayOpenOnFocusout
        defaultFocus="none"
        aria-label="Document actions"
        style={{ minWidth: 240 }}
      >
        <MenuItem><Icon slot="start">edit</Icon><div slot="headline">Rename</div></MenuItem>
        <MenuItem><Icon slot="start">share</Icon><div slot="headline">Share</div><div slot="supporting-text">3 people have access</div></MenuItem>
        <MenuItem><Icon slot="start">download</Icon><div slot="headline">Download</div></MenuItem>
        <Divider role="separator" tabIndex={-1} />
        <MenuItem disabled><Icon slot="start">delete</Icon><div slot="headline">Delete</div></MenuItem>
      </Menu>
    </span>
  </div>
);

export const SortSelection = () => (
  <div style={{ ...host, minHeight: 240 }}>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <OutlinedButton id="menu-sort-anchor"><Icon slot="icon">keyboard_arrow_down</Icon>Sort: Newest</OutlinedButton>
      <Menu
        anchor="menu-sort-anchor"
        positioning="absolute"
        open
        quick
        stayOpenOnOutsideClick
        stayOpenOnFocusout
        defaultFocus="none"
        aria-label="Sort order"
        style={{ minWidth: 200 }}
      >
        <MenuItem selected><Icon slot="start">today</Icon><div slot="headline">Newest first</div><Icon slot="end">check</Icon></MenuItem>
        <MenuItem><Icon slot="start">event</Icon><div slot="headline">Oldest first</div></MenuItem>
        <MenuItem><Icon slot="start">star</Icon><div slot="headline">Starred</div></MenuItem>
      </Menu>
    </span>
  </div>
);
