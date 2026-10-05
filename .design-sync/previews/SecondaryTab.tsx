import * as React from 'react';
import { Tabs, SecondaryTab, Icon } from '@mindmatter/material-web-react';

const panel: React.CSSProperties = {
  padding: '16px 4px 0',
  color: 'var(--md-sys-color-on-surface-variant)',
  fontSize: 14,
  minHeight: 40,
};

export const LabelOnly = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Pull request" activeTabIndex={1}>
      <SecondaryTab>Conversation</SecondaryTab>
      <SecondaryTab active>Commits</SecondaryTab>
      <SecondaryTab>Checks</SecondaryTab>
      <SecondaryTab>Files</SecondaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>12 commits by Aisha and Pieter · last pushed 2 hours ago.</div>
  </div>
);

export const WithIcons = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Weather" activeTabIndex={0}>
      <SecondaryTab active><Icon slot="icon">schedule</Icon>Hourly</SecondaryTab>
      <SecondaryTab><Icon slot="icon">date_range</Icon>10-day</SecondaryTab>
      <SecondaryTab><Icon slot="icon">air</Icon>Wind</SecondaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>Clear until 16:00, then a south-easter picks up to 35 km/h.</div>
  </div>
);

export const IconOnly = () => (
  <div style={{ maxWidth: 280 }}>
    <Tabs aria-label="Layout" activeTabIndex={0}>
      <SecondaryTab iconOnly active aria-label="Grid"><Icon slot="icon">grid_view</Icon></SecondaryTab>
      <SecondaryTab iconOnly aria-label="List"><Icon slot="icon">view_list</Icon></SecondaryTab>
      <SecondaryTab iconOnly aria-label="Board"><Icon slot="icon">view_kanban</Icon></SecondaryTab>
    </Tabs>
  </div>
);
