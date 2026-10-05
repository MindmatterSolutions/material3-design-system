import * as React from 'react';
import { NavigationDrawer, List, ListItem, Divider, Icon, OutlinedIconButton } from '@mindmatter/material-web-react';

const drawerHost = {
  position: 'relative',
  display: 'flex',
  width: 600,
  maxWidth: '100%',
  height: 380,
  overflow: 'hidden',
  borderRadius: 16,
  border: '1px solid var(--md-sys-color-outline-variant)',
  background: 'var(--md-sys-color-surface)',
  '--md-navigation-drawer-container-width': '240px',
  '--md-navigation-drawer-container-shape': '0 16px 16px 0',
} as React.CSSProperties;
const list = { '--md-list-container-color': 'transparent', padding: 8 } as React.CSSProperties;
const title: React.CSSProperties = {
  padding: '16px 20px 8px',
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--md-sys-color-on-surface-variant)',
};
const active = {
  '--md-list-item-container-color': 'var(--md-sys-color-secondary-container)',
  '--md-list-item-label-text-color': 'var(--md-sys-color-on-secondary-container)',
  '--md-list-item-leading-icon-color': 'var(--md-sys-color-on-secondary-container)',
  borderRadius: 28,
} as React.CSSProperties;
const main: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  color: 'var(--md-sys-color-on-surface)',
};
const sub: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };

export const MailFolders = () => (
  <div style={drawerHost}>
    <NavigationDrawer opened aria-label="Mail folders">
      <div style={title}>Mail</div>
      <List style={list}>
        <ListItem type="button" style={active}><Icon slot="start">inbox</Icon>Inbox<span slot="trailing-supporting-text">24</span></ListItem>
        <ListItem type="button"><Icon slot="start">send</Icon>Sent</ListItem>
        <ListItem type="button"><Icon slot="start">star</Icon>Starred<span slot="trailing-supporting-text">3</span></ListItem>
        <ListItem type="button"><Icon slot="start">delete</Icon>Bin</ListItem>
        <Divider />
        <ListItem type="button"><Icon slot="start">settings</Icon>Settings</ListItem>
      </List>
    </NavigationDrawer>
    <div style={main}>
      <OutlinedIconButton aria-label="Collapse navigation"><Icon>menu_open</Icon></OutlinedIconButton>
      <h4 style={{ margin: 0, fontSize: 20 }}>Inbox</h4>
      <p style={sub}>24 unread · invoices and the Thursday design review.</p>
    </div>
  </div>
);

export const SectionedWorkspace = () => (
  <div style={drawerHost}>
    <NavigationDrawer opened aria-label="Workspace">
      <div style={title}>Workspace</div>
      <List style={list}>
        <ListItem type="button"><Icon slot="start">dashboard</Icon>Overview</ListItem>
        <ListItem type="button" style={active}><Icon slot="start">checklist</Icon>Tasks<span slot="trailing-supporting-text">8</span></ListItem>
        <ListItem type="button"><Icon slot="start">calendar_month</Icon>Calendar</ListItem>
      </List>
      <Divider />
      <div style={title}>Projects</div>
      <List style={list}>
        <ListItem type="button"><Icon slot="start">folder</Icon>Website refresh</ListItem>
        <ListItem type="button"><Icon slot="start">folder</Icon>Mobile app v3</ListItem>
      </List>
    </NavigationDrawer>
    <div style={main}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Tasks</h4>
      <p style={sub}>8 open tasks across 2 projects · 3 due this week.</p>
    </div>
  </div>
);
