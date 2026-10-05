import * as React from 'react';
import { NavigationDrawerModal, List, ListItem, Divider, Icon, IconButton } from '@mindmatter/material-web-react';

const appHost = {
  position: 'relative',
  width: 480,
  maxWidth: '100%',
  height: 420,
  overflow: 'hidden',
  borderRadius: 16,
  border: '1px solid var(--md-sys-color-outline-variant)',
  background: 'var(--md-sys-color-surface)',
  color: 'var(--md-sys-color-on-surface)',
  '--md-navigation-drawer-modal-container-width': '280px',
  '--md-navigation-drawer-modal-container-shape': '0 16px 16px 0',
} as React.CSSProperties;
const appBar: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, padding: '8px 8px 8px 4px' };
const content: React.CSSProperties = { padding: '8px 20px', display: 'flex', flexDirection: 'column', gap: 8 };
const sub: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };
const list = { '--md-list-container-color': 'transparent', padding: 8 } as React.CSSProperties;
const title: React.CSSProperties = {
  padding: '20px 24px 8px',
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

const tile: React.CSSProperties = {
  borderRadius: 12,
  padding: 12,
  background: 'var(--md-sys-color-surface-container-high)',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 14,
};

const Screen = ({ heading, body, items }: { heading: string; body: string; items: string[] }) => (
  <>
    <div style={appBar}>
      <IconButton aria-label="Open navigation"><Icon>menu</Icon></IconButton>
      <span style={{ fontSize: 20 }}>{heading}</span>
    </div>
    <div style={content}>
      <p style={sub}>{body}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {items.map((t) => (
          <div key={t} style={tile}>
            <div style={{ height: 56, borderRadius: 8, background: 'var(--md-sys-color-primary-container)' }} />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  </>
);

export const MailFolders = () => (
  <div style={appHost}>
    <Screen heading="Inbox" body="24 unread · invoices and the Thursday design review." items={["Invoice #2041", "Design review", "Team lunch", "Flight to JNB"]} />
    <NavigationDrawerModal opened pivot="start" aria-label="Mail folders">
      <div style={title}>Mail</div>
      <List style={list}>
        <ListItem type="button" style={active}><Icon slot="start">inbox</Icon>Inbox<span slot="trailing-supporting-text">24</span></ListItem>
        <ListItem type="button"><Icon slot="start">send</Icon>Sent</ListItem>
        <ListItem type="button"><Icon slot="start">star</Icon>Starred<span slot="trailing-supporting-text">3</span></ListItem>
        <ListItem type="button"><Icon slot="start">drafts</Icon>Drafts</ListItem>
        <ListItem type="button"><Icon slot="start">delete</Icon>Bin</ListItem>
      </List>
    </NavigationDrawerModal>
  </div>
);

export const AppSections = () => (
  <div style={appHost}>
    <Screen heading="Recipes" body="12 saved recipes · 3 planned for this week." items={["Bobotie", "Malva pudding", "Chakalaka", "Bunny chow"]} />
    <NavigationDrawerModal opened pivot="start" aria-label="App sections">
      <div style={title}>Kitchen</div>
      <List style={list}>
        <ListItem type="button"><Icon slot="start">home</Icon>Home</ListItem>
        <ListItem type="button" style={active}><Icon slot="start">restaurant_menu</Icon>Recipes</ListItem>
        <ListItem type="button"><Icon slot="start">shopping_basket</Icon>Shopping list<span slot="trailing-supporting-text">7</span></ListItem>
        <ListItem type="button"><Icon slot="start">calendar_month</Icon>Meal plan</ListItem>
      </List>
      <Divider />
      <List style={list}>
        <ListItem type="button"><Icon slot="start">settings</Icon>Settings</ListItem>
        <ListItem type="button"><Icon slot="start">help</Icon>Help &amp; feedback</ListItem>
      </List>
    </NavigationDrawerModal>
  </div>
);
