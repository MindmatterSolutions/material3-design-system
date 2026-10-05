import * as React from 'react';
import { NavigationBar, NavigationTab, Icon } from '@mindmatter/material-web-react';

const phone: React.CSSProperties = {
  position: 'relative',
  width: 360,
  maxWidth: '100%',
  height: 260,
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

export const Badges = () => (
  <div style={phone}>
    <div style={screen}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Chats</h4>
      <p style={sub}>A number badge counts unread items; an empty badge is a small dot.</p>
    </div>
    <NavigationBar activeIndex={0} aria-label="Messaging">
      <NavigationTab label="Chats" showBadge badgeValue="5"><Icon slot="active-icon">chat</Icon><Icon slot="inactive-icon">chat</Icon></NavigationTab>
      <NavigationTab label="Calls" showBadge badgeValue="99+"><Icon slot="active-icon">call</Icon><Icon slot="inactive-icon">call</Icon></NavigationTab>
      <NavigationTab label="Updates" showBadge><Icon slot="active-icon">notifications</Icon><Icon slot="inactive-icon">notifications</Icon></NavigationTab>
      <NavigationTab label="Settings"><Icon slot="active-icon">settings</Icon><Icon slot="inactive-icon">settings</Icon></NavigationTab>
    </NavigationBar>
  </div>
);

export const OutlinedInactiveIcons = () => (
  <div style={phone}>
    <div style={screen}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Favourites</h4>
      <p style={sub}>Filled icon on the active destination, outlined on the rest.</p>
    </div>
    <NavigationBar activeIndex={1} aria-label="Shop">
      <NavigationTab label="Home"><Icon slot="active-icon">home</Icon><Icon slot="inactive-icon" className="icon-outlined">home</Icon></NavigationTab>
      <NavigationTab label="Favourites"><Icon slot="active-icon" style={{ '--md-icon-fill': 1 } as React.CSSProperties}>favorite</Icon><Icon slot="inactive-icon" className="icon-outlined">favorite</Icon></NavigationTab>
      <NavigationTab label="Cart" showBadge badgeValue="2"><Icon slot="active-icon">shopping_cart</Icon><Icon slot="inactive-icon" className="icon-outlined">shopping_cart</Icon></NavigationTab>
      <NavigationTab label="Account"><Icon slot="active-icon">person</Icon><Icon slot="inactive-icon" className="icon-outlined">person</Icon></NavigationTab>
    </NavigationBar>
  </div>
);

export const LabelOnActiveOnly = () => (
  <div style={phone}>
    <div style={screen}>
      <h4 style={{ margin: 0, fontSize: 20 }}>Maps</h4>
      <p style={sub}>Each tab's hideInactiveLabel (set by the bar) keeps only the active label.</p>
    </div>
    <NavigationBar activeIndex={2} hideInactiveLabels aria-label="Travel">
      <NavigationTab label="Explore"><Icon slot="active-icon">explore</Icon><Icon slot="inactive-icon">explore</Icon></NavigationTab>
      <NavigationTab label="Saved"><Icon slot="active-icon">bookmark</Icon><Icon slot="inactive-icon">bookmark</Icon></NavigationTab>
      <NavigationTab label="Directions"><Icon slot="active-icon">directions</Icon><Icon slot="inactive-icon">directions</Icon></NavigationTab>
      <NavigationTab label="Updates" showBadge badgeValue="3"><Icon slot="active-icon">notifications</Icon><Icon slot="inactive-icon">notifications</Icon></NavigationTab>
    </NavigationBar>
  </div>
);
