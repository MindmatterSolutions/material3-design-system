import * as React from 'react';
import { NavigationBar, NavigationTab, Icon } from '@mindmatter/material-web-react';

const phone: React.CSSProperties = {
  position: 'relative',
  width: 360,
  maxWidth: '100%',
  height: 320,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: 16,
  border: '1px solid var(--md-sys-color-outline-variant)',
  background: 'var(--md-sys-color-surface)',
};
const screen: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 20,
  minHeight: 0,
  color: 'var(--md-sys-color-on-surface)',
};
const sub: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };

export const WithBadges = () => (
  <div style={phone}>
    <div style={screen}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Home</h4>
      <p style={sub}>Three things need you this morning. Tap a destination below.</p>
    </div>
    <NavigationBar activeIndex={0} aria-label="Main">
      <NavigationTab label="Home"><Icon slot="active-icon">home</Icon><Icon slot="inactive-icon">home</Icon></NavigationTab>
      <NavigationTab label="Explore"><Icon slot="active-icon">explore</Icon><Icon slot="inactive-icon">explore</Icon></NavigationTab>
      <NavigationTab label="Inbox" showBadge badgeValue="12"><Icon slot="active-icon">mail</Icon><Icon slot="inactive-icon">mail</Icon></NavigationTab>
      <NavigationTab label="Alerts" showBadge><Icon slot="active-icon">notifications</Icon><Icon slot="inactive-icon">notifications</Icon></NavigationTab>
    </NavigationBar>
  </div>
);

export const ActiveLabelOnly = () => (
  <div style={phone}>
    <div style={screen}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Library</h4>
      <p style={sub}>Inactive destinations show only their icon.</p>
    </div>
    <NavigationBar activeIndex={1} hideInactiveLabels aria-label="Media">
      <NavigationTab label="Music"><Icon slot="active-icon">music_note</Icon><Icon slot="inactive-icon">music_note</Icon></NavigationTab>
      <NavigationTab label="Library"><Icon slot="active-icon">folder</Icon><Icon slot="inactive-icon">folder</Icon></NavigationTab>
      <NavigationTab label="Search"><Icon slot="active-icon">search</Icon><Icon slot="inactive-icon">search</Icon></NavigationTab>
      <NavigationTab label="Profile"><Icon slot="active-icon">person</Icon><Icon slot="inactive-icon">person</Icon></NavigationTab>
    </NavigationBar>
  </div>
);
