import * as React from 'react';
import { ExpressiveList, ExpressiveListItem, ExpressiveSwitch, Icon } from '@mindmatter/material-web-react';

const list: React.CSSProperties = { maxWidth: 420 };

export const LineCounts = () => (
  <ExpressiveList style={list}>
    <ExpressiveListItem>Downloads</ExpressiveListItem>
    <ExpressiveListItem>
      Shared with me
      <span slot="supporting-text">14 files from 3 people</span>
    </ExpressiveListItem>
    <ExpressiveListItem>
      <span slot="overline">Pinned</span>
      Quarterly board pack
      <span slot="supporting-text">Edited by Lerato · 2 hours ago</span>
    </ExpressiveListItem>
  </ExpressiveList>
);

export const LeadingAndTrailing = () => (
  <ExpressiveList style={list}>
    <ExpressiveListItem>
      <span slot="avatar">NA</span>
      Nomvula Ash
      <span slot="supporting-text">Sent you the venue shortlist</span>
      <span slot="trailing-text">09:42</span>
    </ExpressiveListItem>
    <ExpressiveListItem>
      <Icon slot="leading">calendar_month</Icon>
      Design critique
      <span slot="supporting-text">Tomorrow · Room 3</span>
      <Icon slot="trailing">chevron_right</Icon>
    </ExpressiveListItem>
    <ExpressiveListItem nonInteractive>
      <Icon slot="leading">dark_mode</Icon>
      Dark theme
      <ExpressiveSwitch slot="trailing" selected aria-label="Dark theme" />
    </ExpressiveListItem>
  </ExpressiveList>
);

export const States = () => (
  <ExpressiveList style={list}>
    <ExpressiveListItem checked>
      <Icon slot="leading">inbox</Icon>
      Inbox
      <span slot="supporting-text">Selected</span>
      <span slot="trailing-text">24</span>
    </ExpressiveListItem>
    <ExpressiveListItem>
      <Icon slot="leading">send</Icon>
      Sent
      <span slot="supporting-text">Default</span>
    </ExpressiveListItem>
    <ExpressiveListItem disabled>
      <Icon slot="leading">archive</Icon>
      Archive
      <span slot="supporting-text">Disabled while syncing</span>
    </ExpressiveListItem>
  </ExpressiveList>
);
