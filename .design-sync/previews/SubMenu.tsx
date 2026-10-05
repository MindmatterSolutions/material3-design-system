import * as React from 'react';
import { Menu, MenuItem, SubMenu, Divider, Icon, FilledTonalButton } from '@mindmatter/material-web-react';

const host: React.CSSProperties = { position: 'relative', minHeight: 320, width: 560 };
const anchorWrap: React.CSSProperties = { position: 'relative', display: 'inline-block' };
const holdOpen = {
  positioning: 'absolute' as const,
  open: true,
  quick: true,
  stayOpenOnOutsideClick: true,
  stayOpenOnFocusout: true,
  defaultFocus: 'none' as const,
};

export const SubmenuOpen = () => (
  <div style={host}>
    <span style={anchorWrap}>
      <FilledTonalButton id="sm-file-anchor"><Icon slot="icon">more_vert</Icon>File</FilledTonalButton>
      <Menu anchor="sm-file-anchor" hasOverflow {...holdOpen} aria-label="File" style={{ minWidth: 220 }}>
        <MenuItem><Icon slot="start">edit</Icon><div slot="headline">Rename</div></MenuItem>
        <SubMenu anchorCorner="start-end" menuCorner="start-start">
          <MenuItem slot="item" id="sm-share-item" selected>
            <Icon slot="start">share</Icon>
            <div slot="headline">Share with</div>
            <Icon slot="end">arrow_right</Icon>
          </MenuItem>
          <Menu
            slot="menu"
            anchor="sm-share-item"
            anchorCorner="start-end"
            menuCorner="start-start"
            hasOverflow
            {...holdOpen}
            aria-label="Share with"
            style={{ minWidth: 220 }}
          >
            <MenuItem><Icon slot="start">person</Icon><div slot="headline">Lerato Mokoena</div></MenuItem>
            <MenuItem><Icon slot="start">person</Icon><div slot="headline">Pieter van der Merwe</div></MenuItem>
            <MenuItem><Icon slot="start">groups</Icon><div slot="headline">Design team</div></MenuItem>
            <Divider role="separator" tabIndex={-1} />
            <MenuItem><Icon slot="start">link</Icon><div slot="headline">Copy link</div></MenuItem>
          </Menu>
        </SubMenu>
        <MenuItem><Icon slot="start">download</Icon><div slot="headline">Download</div></MenuItem>
        <Divider role="separator" tabIndex={-1} />
        <MenuItem><Icon slot="start">delete</Icon><div slot="headline">Move to bin</div></MenuItem>
      </Menu>
    </span>
  </div>
);

export const SubmenuClosed = () => (
  <div style={{ ...host, minHeight: 280 }}>
    <span style={anchorWrap}>
      <FilledTonalButton id="sm-view-anchor"><Icon slot="icon">visibility</Icon>View</FilledTonalButton>
      <Menu anchor="sm-view-anchor" {...holdOpen} aria-label="View" style={{ minWidth: 220 }}>
        <SubMenu>
          <MenuItem slot="item"><Icon slot="start">zoom_in</Icon><div slot="headline">Zoom</div><Icon slot="end">arrow_right</Icon></MenuItem>
          <Menu slot="menu" aria-label="Zoom">
            <MenuItem><div slot="headline">50%</div></MenuItem>
            <MenuItem><div slot="headline">100%</div></MenuItem>
            <MenuItem><div slot="headline">200%</div></MenuItem>
          </Menu>
        </SubMenu>
        <SubMenu>
          <MenuItem slot="item"><Icon slot="start">palette</Icon><div slot="headline">Theme</div><Icon slot="end">arrow_right</Icon></MenuItem>
          <Menu slot="menu" aria-label="Theme">
            <MenuItem><div slot="headline">Light</div></MenuItem>
            <MenuItem><div slot="headline">Dark</div></MenuItem>
          </Menu>
        </SubMenu>
        <Divider role="separator" tabIndex={-1} />
        <MenuItem><Icon slot="start">fullscreen</Icon><div slot="headline">Full screen</div></MenuItem>
      </Menu>
    </span>
  </div>
);
