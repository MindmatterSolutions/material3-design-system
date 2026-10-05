import * as React from 'react';
import { ExpressiveList, ExpressiveListItem, ExpressiveSwitch, Icon } from '@mindmatter/material-web-react';

export const Playlist = () => (
  <ExpressiveList style={{ maxWidth: 420 }}>
    <ExpressiveListItem checked>
      <Icon slot="leading">music_note</Icon>
      <span slot="overline">Now playing</span>
      Midnight Drive
      <span slot="supporting-text">Nomvula Ash · Coastline</span>
      <span slot="trailing-text">3:42</span>
    </ExpressiveListItem>
    <ExpressiveListItem>
      <Icon slot="leading">library_music</Icon>
      Paper Lanterns
      <span slot="supporting-text">The Kites · Afterglow</span>
      <span slot="trailing-text">4:05</span>
    </ExpressiveListItem>
    <ExpressiveListItem disabled>
      <Icon slot="leading">music_note</Icon>
      Harbour Lights
      <span slot="supporting-text">Not available in your region</span>
    </ExpressiveListItem>
  </ExpressiveList>
);

export const SegmentedSettings = () => (
  <ExpressiveList segmented style={{ maxWidth: 420 }}>
    <ExpressiveListItem>
      <Icon slot="leading">wifi</Icon>
      Network &amp; internet
      <span slot="supporting-text">Mindmatter-5G</span>
      <Icon slot="trailing">chevron_right</Icon>
    </ExpressiveListItem>
    <ExpressiveListItem>
      <Icon slot="leading">battery_full</Icon>
      Battery
      <span slot="supporting-text">82% · about 14 h left</span>
      <Icon slot="trailing">chevron_right</Icon>
    </ExpressiveListItem>
    <ExpressiveListItem nonInteractive>
      <Icon slot="leading">notifications</Icon>
      Notifications
      <ExpressiveSwitch slot="trailing" selected aria-label="Notifications" />
    </ExpressiveListItem>
  </ExpressiveList>
);
