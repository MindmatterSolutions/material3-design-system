import * as React from 'react';
import { Tabs, PrimaryTab, SecondaryTab, Icon } from '@mindmatter/material-web-react';

const panel: React.CSSProperties = {
  padding: '16px 4px 0',
  color: 'var(--md-sys-color-on-surface-variant)',
  fontSize: 14,
  minHeight: 48,
};

export const PrimaryWithIcons = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Library" activeTabIndex={0}>
      <PrimaryTab active><Icon slot="icon">music_note</Icon>Music</PrimaryTab>
      <PrimaryTab><Icon slot="icon">photo_camera</Icon>Photos</PrimaryTab>
      <PrimaryTab><Icon slot="icon">bookmark</Icon>Saved</PrimaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>214 tracks · 3 playlists synced this week.</div>
  </div>
);

export const PrimaryInlineIcons = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Inbox" activeTabIndex={1}>
      <PrimaryTab inlineIcon><Icon slot="icon">mail</Icon>Primary</PrimaryTab>
      <PrimaryTab inlineIcon active><Icon slot="icon">groups</Icon>Social</PrimaryTab>
      <PrimaryTab inlineIcon><Icon slot="icon">notifications</Icon>Updates</PrimaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>3 new comments on the community thread.</div>
  </div>
);

export const Secondary = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Project" activeTabIndex={0}>
      <SecondaryTab active>Overview</SecondaryTab>
      <SecondaryTab>Tasks</SecondaryTab>
      <SecondaryTab>Files</SecondaryTab>
      <SecondaryTab>Activity</SecondaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>Website refresh · due 14 November · 62% complete.</div>
  </div>
);

export const SecondaryWithIcons = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Calendar view" activeTabIndex={1}>
      <SecondaryTab><Icon slot="icon">today</Icon>Day</SecondaryTab>
      <SecondaryTab active><Icon slot="icon">calendar_month</Icon>Month</SecondaryTab>
      <SecondaryTab><Icon slot="icon">event</Icon>Agenda</SecondaryTab>
    </Tabs>
  </div>
);
